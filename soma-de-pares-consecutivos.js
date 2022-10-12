DESAFIO

O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0. Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

ENTRADA

O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

SAÍDA

Imprima a saida conforme a explicação acima e o exemplo abaixo.

--------------------------------------------
| Exemplo de Entrada | Exemplo de Saída    |
--------------------------------------------
|         4          |        40           |
|         11         |        80           |
|         0          |                     |
--------------------------------------------

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções


let x = parseInt(gets());
let soma = 0;
let i = 0;

while (x !== 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
while (i < 5)
{
    if  (x % 2 !== 0)
    {
        x = x + 1;
    } else {
      soma += x;
      x = x + 1;
      i++;
    }
}
//Imprima a soma:
    print(soma);
    soma = 0;
    i = 0;
    x = parseInt(gets());
}