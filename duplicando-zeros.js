DESAFIO

Dado um array inteiro de comprimento fixo Arr, duplique cada ocorrência de zero, deslocando os elementos restantes para direita. Fique atento, pois os elementos que estiverem além do comprimento da matriz original, não devem ser gravados. Caso não houver nenhum zero, retorne a matriz original. 

ENTRADA

A entrada vai ser composta de um array com tamanho fixo de 8 índices.  

SAÍDA

A saída será composta pelo array com os zeros devidamente duplicados. Caso não haja zero, retorne a própria matriz. 

-------------------------------------------
| Entrada |           Saída               |
------------------------------------------
|    1     |   1, 0, 0, 2, 3, 0, 0, 4     | 
-------------------------------------------
|    0     |                              | 
-------------------------------------------
|    2     |                              | 
-------------------------------------------
|    3     |                              | 
-------------------------------------------
|    0     |                              | 
-------------------------------------------
|    4     |                              | 
-------------------------------------------
|    5     |                              | 
-------------------------------------------
|    0     |                              | 
-------------------------------------------
|    1     |           1, 2, 3            | 
-------------------------------------------
|    2     |                              | 
-------------------------------------------
|    3     |                              | 
-------------------------------------------
|    2     |          2, 0, 0, 4          | 
-------------------------------------------
|    0     |                              | 
-------------------------------------------
|    4     |                              | 
-------------------------------------------
|    0     |                              | 
-------------------------------------------

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let N = parseInt(gets()); 

let arr = new Array(N); 

for (let i = 0; i < N; i++){ 

    arr[i] = parseInt(gets());
    
    if(arr[i] === 0){
      if((i+1) < N){
        arr[i+1] = 0;
        i++;  
      }  
      
    }

}    
 
print(arr);