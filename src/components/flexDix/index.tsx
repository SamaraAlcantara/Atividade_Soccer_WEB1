import * as C from "./style";
type FlexDiv = {
  children: React.ReactNode;
};
export const FlexDiv = ({ children }: FlexDiv) => {
  //RENDERIZA O COMPONENTE
  return <C.FlexDiv>{children}</C.FlexDiv>;
};
