import { useState } from "react";
//IMPORTANDO COMPONETES
import { CardAtleta } from "./components/cardAtleta";
import { Search } from "./components/search";
import { Button } from "./components/button";
import { FlexDiv } from "./components/flexDix";
import axios from "axios";
import { caclAge } from "./utils/calcAge";

// Interface Da estrutura do card
interface Player {
  player_id: string;
  player_name: string;
  player_birthdate: string;
  team_name: string;
  player_country: string;
  player_image: string;
  favorite?: boolean;
}
function App() {
  const [searchPlayer, setSearchPlayer] = useState(""); //armazenar o valor da busca de jogador
  const [favorite, setFavorite] = useState<Player[]>(() => {
    //armazenar os jogadores favoritos
    const savedFavorites = sessionStorage.getItem("favorites"); // Recupera os favoritos do sessionStorage
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [data, setData] = useState<Player[]>(); //array de jogadores
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //atualizar o valor da busca
    setSearchPlayer(event.target.value);
  };
  //Função assíncrona para buscar os jogadores
  const fetchPlayers = async (type: string) => {
    setLoading(true);
    if (type === "data") {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_players&player_name=${searchPlayer}&APIkey=${
          //API
          import.meta.env.VITE_API_KEY
        }`
      );
      setData(response.data); // Armazena os jogadores retornados na variável data
    } else {
      setData(favorite); // Se for a busca pelos favoritos, define os dados como a lista de favoritos
    }
    setLoading(false);
  };

  // Função para adicionar um jogador à lista de favoritos
  const addFavorite = (player: Player) => {
    const newFavorite = [...favorite, player]; // Cria um novo array
    setFavorite(newFavorite); // Atualiza o estado de favoritos
    sessionStorage.setItem("favorites", JSON.stringify(newFavorite)); // Armazena os novos favoritos no sessionStorage
  };

  return (
    <div className="container">
      <div className="menu">
        <Button
          buttonName={"Ver meus Favoritos"} //BOTÃO VER FAVORITADOS
          onClick={() => {
            fetchPlayers("favorite"); // Chama a função de busca com o tipo "favorite"
          }}
          color="#ffbf00"
        />

        <FlexDiv>
          <Search onChange={handleSearchChange} /> //Campo de busca de jogadores
          <Button
            buttonName={"Buscar jogador"} //Botão de busca
            onClick={() => {
              fetchPlayers("data"); // Chama a função de busca
            }}
          />
        </FlexDiv>
      </div>
      {!loading ? (
        <div className="results">
          {data &&
            data.map(
              (
                item,
                index //MAPEANDO REULTADOS (NOME, IMAGEM, IDADE, TIME E PAIS)
              ) => (
                <div className="playerArea">
                  <CardAtleta
                    key={index} //ATRIBUI UM ID AO ATLETA
                    image={item.player_image}
                    name={item.player_name}
                    age={caclAge(item.player_birthdate)}
                    team={item.team_name}
                    country={item.player_country}
                  />
                  {!favorite.find((fav) => fav.player_id === item.player_id) ? ( //Se o jogador não está nos favoritos, exibe o botão para adicionar
                    <Button
                      onClick={() =>
                        addFavorite({
                          player_id: `${item.player_id}`,
                          player_name: `${item.player_name}`,
                          player_birthdate: `${item.player_birthdate}`,
                          team_name: `${item.team_name}`,
                          player_country: `${item.player_country}`,
                          player_image: `${item.player_image}`,
                        })
                      }
                      buttonName="Adicionar aos Favoritos"
                      color="transparent"
                    ></Button>
                  ) : (
                    <h3 className="favTitle">Favorito!</h3> // Se o jogador já for favorito, exibe "Favorito!"
                  )}
                </div>
              )
            )}
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  );
}

export default App;
