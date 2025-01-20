import * as C from "./style";
type SearchProps = {
  // Define o tipo das propriedades
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função que será chamada quando o valor do input mudar
};
// Componente funcional Search
export const Search = ({ onChange }: SearchProps) => {
  return (
    <C.SearchInput
      type="text"
      placeholder="Digite sua busca..."
      onChange={onChange} // A função onChange será chamada sempre que o valor do input mudar
    />
  );
};
