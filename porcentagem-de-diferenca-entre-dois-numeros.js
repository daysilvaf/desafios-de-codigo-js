DESCRIÇÃO

Dados dois números A e B, onde o valor de ‘B’ é incrementado ou decrementado por alguma porcentagem de ‘A’. Sua tarefa é descobrir qual é a porcentagem de diferença entre esses dois valores.

ENTRADA

A entrada é composta por dois números inteiros, A e B. 

SAÍDA

A saída será a diferença de porcentagem entre os valores A e B.  

EXEMPLO 1

----------------------
| Entrada | Saída    |
----------------------
|   20    |   25%    |
|   25    |          |  
----------------------

EXEMPLO 2

----------------------
| Entrada | Saída    |
----------------------
|   30    |   16%    |
|   35    |          |  
----------------------

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let A = parseInt(gets()), B= parseInt(gets()); 
 
// TODO: Calcule a porcentagem de diferença entre os dois valores

let  percentual = (B-A)/A*100; 

print(Math.trunc(percentual) + "%")
