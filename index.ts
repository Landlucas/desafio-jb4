// Desafio: Contando os troquinhos
// 
// Ler os dados de moedas existentes em um array e determinar quantos valores  
// entre 1 a 10000 unidades monetárias não podem ser formados com essas moedas

const jb4 = (coins: Array<number>) => {
  let irreproducibleVals = 0;
  for (let i = 1; i <= 10000; i++) {
    let remainingVal = i;
    const n = coins.length;
    for (let j = n - 1; j >= 0; j--) {
      while (remainingVal >= coins[j]) {
        remainingVal -= coins[j];
      }
    }
    if (remainingVal > 0) {
      irreproducibleVals++;
    }
  }
  console.log(irreproducibleVals);
};

const coins = [1, 5, 10, 20, 50, 100, 500, 1000];
jb4(coins);