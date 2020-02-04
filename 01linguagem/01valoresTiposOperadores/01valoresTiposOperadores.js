/*Existem seis tipos básicos de valores no JavaScript: 
Números,  Strings,  Booleanos,  Objetos,  Funções e  Valores Indefinidos.*/

// #0.01#  Números:

07

// Fracionários:

0.7 //Fracionários são escritos usando um ponto.

// Para números muito grandes ou pequenos, pode usar a notação científica adicionando um “e” (de “expoente”) seguido do valor do expoente:

2.998e8  // isso é Isso é 2.998 x 10⁸ = 299800000.


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

// #0.02# Aritmética:

8 - 2 == 6
8 + 2 == 10
8 / 2 == 4
8 * 2 == 16

// O operador / possui a mesma precedência que * e, de forma similar, os operadores + e - possuem a mesma precedência entre si.

1  + 2 * 5 == 11

// Como na matemática, você pode mudar esse comportamento envolvendo a adição com parênteses.

(1  + 2) * 5 == 15

//  A precedência é aplicada da esquerda para direita em caso de vários operadores de mesma precedência.

5 - 3 + 2 == 4

// O símbolo % é usado para representar a operação de resto.

404 % 100 == 4


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

// #0.03# Números Especiais

// NaN é a abreviação de “not a number” (não é um número)

0 / 0 


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

// #0.4# Strings

//As Strings devem permanecer em uma única linha. Ambas as aspas simples e duplas podem ser usadas para representar Strings.

"Posso escrever com aspas duplas"
'Posso escrever com aspas simples'

// Se caractere de barra invertida (\) for encontrado dentro de um texto entre aspas, indicará que o caractere seguinte possui um significado especial. 
// Isso é chamado de escapar o caractere.

" Posso colocar algo entre "

// Quando um caractere n aparecer após uma barra invertida, ele será interpretado como uma quebra de linha .
// De forma similar, um t significará um caractere de tabulação.

"Esta é uma linha\nE esta é outra linha"

// Strings não respondem a valores aritiméticos, mas concatena, ou seja, junta duas  ou amis Strings em uma única String.

"con" + "ca" + "te" + "na" + "ção"


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

// #0.05# Operadores Unários

// O operador typeof, que produz um valor do tipo String contendo o nome do tipo do valor que você está verificando.

console.log(typeof 7.5)
// → number
console.log(typeof "y")
// → string


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

// #0.06# Valores Booleanos

// O JavaScript possui o tipo Booleano, que tem apenas dois valores: verdadeiro e falso (que são escritos como true e false respectivamente).

// Comparações: 

console.log(7 > 3)
// → true
console.log(7 < 3)
// → false

//Strings podem ser comparadas da mesma forma:

console.log("Menor" < "Maiores")
// → true

// Outros operadores parecidos são >= (maior que ou igual a), <= (menor que ou igual a), == (igual a) e != (não igual a).

// Existe apenas um valor no JavaScript que não é igual a ele mesmo, que é o valor NaN. 
// Ele significa “not a number”, que em português seria traduzido como “não é um número”.

console.log(NaN == NaN)
// → false


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */


// #0.07# Operadores Lógicos

// O operador && representa o valor lógico and ou, em português, e. Ele é um operador binário, e seu resultado é apenas verdadeiro se ambos os valores dados à ele forem verdadeiros.

console.log(true && false)
// → false
console.log(true && true)
// → true


//O operador || indica o valor lógico or ou, em português, ou. Ele produz um valor verdadeiro se qualquer um dos valores dados à ele for verdadeiro.

console.log(false || true)
// → true
console.log(false || false)
// → false

// Not, em português não, é escrito usando um ponto de exclamação (!). 
// Ele é um operador unário que inverte o valor que é dado à ele. Por exemplo, !true produz false e !false produz true.

//O valor presente à esquerda do ponto de interrogação “seleciona” qual dos outros dois valores será retornado.

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2



/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */


// #0.08#Valores Indefinidos

// null e undefined, são usados para indicar a ausência de um valor com significado.



/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */


// #0.09#Conversão Automática de Tipo

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


// Quando null ou undefined aparece em algum dos lados do operador, será produzido verdadeiro apenas se ambos os lados forem null ou undefined.

console.log(null == undefined);
// → true
console.log(null == 0);
// → false



/* Alguns valores são criados digitando seu nome (true, null) ou valores (13, "abc"). 
Você pode combinar e transformar valores com operadores. 
Nós vimos operadores binários para operações aritméticas (+, -, *, /, e %), 
um para concatenação de String (+), comparação (==, !=, ===, !==, <, >, <=, >=) e lógica (&&, ||), 
assim como vários operadores unários (- para negativar um número, ! para negar uma lógica, 
typeof para encontrar o tipo do valor) e o operador ternario (?:) para retornar um de dois valores, baseando-se em um terceiro valor. */