import * as C from "./style";
type SearchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ onChange }: SearchProps) => {
  return (
    <C.SearchInput
      type="text"
      placeholder="Digite sua busca..."
      onChange={onChange}
    />
  );
};
