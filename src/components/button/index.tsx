import * as C from "./style.ts";

// Define o tipo Button
type Button = {
  buttonName: string;
  onClick: () => void;
  color?: string;
};

export const Button = ({ buttonName, onClick, color }: Button) => {
  return (
    // Componente estilizado SearchButton
    <C.SearchButton onClick={onClick} color={color}>
      {buttonName}
    </C.SearchButton>
  );
};
