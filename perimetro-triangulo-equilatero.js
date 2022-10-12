DESAFIO

Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência do triângulo equilátero dado.

ENTRADA

A entrada será dada por um inteiro N que representará os lados do triângulo. 

SAÍDA

A saída deverá retornar “A area da circunferencia é: “,  e em seguida o valor do perimetro do triângulo, conforme exemplo abaixo.

EXEMPLO 1

------------------------------------------------
| Entrada |              Saída                 |
------------------------------------------------
|    6    |   A área da circunferência é: 37.70| 
------------------------------------------------

EXEMPLO 2

------------------------------------------------
| Entrada |              Saída                 |
------------------------------------------------
|    9    |   A área da circunferência é: 84.82| 
------------------------------------------------

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let pi = 3.14159265358979323846;
 
let a = gets();

//TODO: Retorne a área do perímetro do triângulo

let raio = 0;
let area = 0;

raio = a * Math.sqrt(3) / 3;
area = pi * Math.pow(raio, 2)

print("A area da circunferencia eh: " + area.toFixed(2));