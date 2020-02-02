//... A arte de programar é, basicamente, a habilidade de controlar a complexidade. 
//... Um ótimo programa é suave e simples em sua própria complexidade.
//... A dimensão das técnicas de programação é enorme e fascinante em sua diversidade e, ainda assim, amplamente inexplorada. 
//... Conforme você aprende, sempre haverá novos territórios e desafios a serem explorados. 
/*
Porque linguagens importam?
No início, quando a computação nasceu, não haviam linguagens de programação. Os programas eram parecidos com algo assim:

00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000

Esse é um programa que soma os números de 1 a 10 e imprime o resultado: 1 + 2 + … + 10 = 55.
Aqui temos o mesmo programa em JavaScript: 
*/

var total = 0, count = 1;
while (count <=10) {
  total += count;
  count += 1;
}
console.log(total);
// -> 55 
