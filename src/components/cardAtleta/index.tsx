import * as C from "./style.ts";

type Atleta = {
  name: string;
  age: number;
  team: string;
  country: string;
  image: string;
};
//POPULANDO O CARD
export const CardAtleta = (props: Atleta) => {
  return (
    <C.ContainerCardAtleta>
      <div>
        <img
          src={
            props.image
              ? props.image
              : "https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg"
          }
          alt=""
        />
      </div>
      <div className="dataAtleta">
        <h4>{props.name}</h4>
        <p>{props.age} anos</p>
        <p>{props.team}</p>
        <p>{props.country}</p>
      </div>
    </C.ContainerCardAtleta>
  );
};
