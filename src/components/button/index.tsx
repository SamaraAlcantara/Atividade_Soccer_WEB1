import * as C from "./style.ts";
type Button = {
  buttonName: string;
  onClick: () => void;
  color?: string;
};

export const Button = ({ buttonName, onClick, color }: Button) => {
  return (
    <C.SearchButton onClick={onClick} color={color}>
      {buttonName}
    </C.SearchButton>
  );
};
