//CALCULANDO IDADE DO ATLETA
export const caclAge = (date: string): number => {
  const dateAge = new Date(date);
  const today = new Date();
  return (
    //// Calcula a diferença entre o ano atual e o ano de nascimento
    today.getFullYear() -
    dateAge.getFullYear() -
    (today.getMonth() < dateAge.getMonth() || // Se o mês atual for antes do mês de nascimento ou se for o mesmo mês, verifica o dia
    (today.getMonth() === dateAge.getMonth() &&
      today.getDate() < dateAge.getDate()) // E e o dia atual for antes do dia de nascimento
      ? 1 // Se o aniversário ainda não ocorreu, subtrai 1
      : 0)
  );
};
