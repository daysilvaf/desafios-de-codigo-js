DESAFIO

Dado uma string S, retorne os valores removendo todas as letras que aparecem de forma duplicada, restando apenas letras que aparecem uma vez.

ENTRADA

A entrada consiste em uma string com letras duplicadas

SAÍDA

A saída deverá retornar  a string sem as letras duplicadas, conforme exemplo abaixo

----------------------------------
|     Entrada      |    Saída    |
----------------------------------
|    abbcddeof     |    abcdeof  | 
|      aabbcc      |    abc      | 
----------------------------------

const s = gets(); 

	let result = ''; 
  

	for (let index = 0; index < s.length; index++) { 

		const str = s[index]; 

		if (result.includes(str)) continue; 

  

		while (str === result) { 

			//TODO: Retorne as string sem as letras duplicadas

			 result = result.slice(0, -1); 

		} 
		result += str 
	} 

	print(result);