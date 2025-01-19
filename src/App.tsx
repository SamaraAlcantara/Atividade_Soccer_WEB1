import { useState } from "react";
import { CardAtleta } from "./components/cardAtleta";
import { Search } from "./components/search";
import { Button } from "./components/button";
import { FlexDiv } from "./components/flexDix";
import axios from "axios";
import { caclAge } from "./utils/calcAge";

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
  const [searchPlayer, setSearchPlayer] = useState("");
  const [favorite, setFavorite] = useState<Player[]>(() => {
    const savedFavorites = sessionStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [data, setData] = useState<Player[]>();
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlayer(event.target.value);
  };

  const fetchPlayers = async (type: string) => {
    setLoading(true);
    if (type === "data") {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_players&player_name=${searchPlayer}&APIkey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setData(response.data);
    } else {
      setData(favorite);
    }
    setLoading(false);
  };

  const addFavorite = (player: Player) => {
    const newFavorite = [...favorite, player];
    setFavorite(newFavorite);
    sessionStorage.setItem("favorites", JSON.stringify(newFavorite));
  };

  return (
    <div className="container">
      <div className="menu">
        <Button
          buttonName={"Ver meus Favoritos"}
          onClick={() => {
            fetchPlayers("favorite");
          }}
          color="#ffbf00"
        />

        <FlexDiv>
          <Search onChange={handleSearchChange} />
          <Button
            buttonName={"Buscar jogador"}
            onClick={() => {
              fetchPlayers("data");
            }}
          />
        </FlexDiv>
      </div>
      {!loading ? (
        <div className="results">
          {data &&
            data.map((item, index) => (
              <div className="playerArea">
                <CardAtleta
                  key={index}
                  image={item.player_image}
                  name={item.player_name}
                  age={caclAge(item.player_birthdate)}
                  team={item.team_name}
                  country={item.player_country}
                />
                {!favorite.find((fav) => fav.player_id === item.player_id) ? (
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
                  <h3 className="favTitle">Favorito!</h3>
                )}
              </div>
            ))}
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  );
}

export default App;
