DESAFIO

Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.

ENTRADA

A entrada consiste em um número inteiro ( n );

SAÍDA

A saída consiste na multiplicação do produto dos dígitos ( n ), a soma de seus dígitos e a diferenção entre o produto e a soma, como no exemplo a baixo:

EXEMPLO 1

----------------------
| Entrada | Saída    |
----------------------
|   234   |   15     | 
----------------------

EXPLICAÇÃO 

Produto de dígitos = 2 * 3 * 4 = 24

Soma dos dígitos = 2 + 3 + 4 = 9

Resultado = 24 - 9 = 15

EXEMPLO 2

----------------------
| Entrada | Saída    |
----------------------
|   4421  |   21     | 
----------------------

EXPLICAÇÃO

Produto de dígitos = 4 * 4 * 2 * 1 = 32

Soma dos dígitos = 4 + 4 + 2 + 1 = 11

Resultado = 32 - 11 = 21

Restrições:

1 <= n <= 10^5

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("");

let subtractProductAndSum = 0;
let n = 0;
let product = 1;
let sum = 0;

while( lines.length > 0) {
  n = parseInt(lines.shift());
  sum += n;
  product *= n;
}

subtractProductAndSum = product - sum;

print(subtractProductAndSum);