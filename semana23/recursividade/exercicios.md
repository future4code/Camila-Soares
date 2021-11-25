Obs: A aula foi complexa,e sozinha eu não consegui fazer os exercícios,então as respostas do gabarito eu li cada linha e vou colocar no gabarito.
### Exercício 1

`a)`
const printNumbers = (n: number) => {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}; 
 

`b)` 
 
const printNumbers = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbers(n - 1);
  }
};


### Exercício 2

export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};


