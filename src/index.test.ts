
import { test,expect} from 'vitest';

//Questão 1
import { calcularQuadrado } from './quadrado';
test('Calcular o quadrado de um número', () => {
 expect(calcularQuadrado(2)).toBe(4);
 expect(calcularQuadrado(0)).toBe(0);
 expect(calcularQuadrado(-3)).toBe(9);
 expect(calcularQuadrado(1.5)).toBe(2.25);
});
//Questão 2
import { ehPositivo } from './positivo';
test('Verificar se um número é positivo', () => {
 expect(ehPositivo(2)).toBe(true);
 expect(ehPositivo(-3)).toBe(false);
 expect(ehPositivo(0)).toBe(false);
 expect(ehPositivo(1.5)).toBe(true);
});
//Questão 3
import { calcularMedia } from './media';
test('Calcular média de três números', () => {
 expect(calcularMedia(2, 4, 6)).toBe(4);
 expect(calcularMedia(1, 1, 1)).toBe(1);
 expect(calcularMedia(-1, 0, 1)).toBe(0);
 expect(calcularMedia(10, 20, 30)).toBe(20);
});
//Questão 4
import { ehAnoBissexto } from './bissexto';
test('Verificar se um ano é bissexto', () => {
 expect(ehAnoBissexto(2020)).toBe(true);
 expect(ehAnoBissexto(2021)).toBe(false);
 expect(ehAnoBissexto(2000)).toBe(true);
 expect(ehAnoBissexto(1900)).toBe(true);
});
//Questão 5
import { calcularFatorial } from './fatorial';
test('Calcular fatorial de um número', () => {
 expect(calcularFatorial(0)).toBe(1);
 expect(calcularFatorial(1)).toBe(1);
 expect(calcularFatorial(5)).toBe(120);
 expect(calcularFatorial(10)).toBe(3628800);
});
//Questão 6
import { encontrarMenorNumero } from './menorvetor';
// Teste: encontrar o menor número em um array de números positivos
test('encontra o menor número em um array de números positivos', () => {
 const numeros = [3, 1, 5, 2, 4];
 expect(encontrarMenorNumero(numeros)).toBe(1);
});
// Teste: encontrar o menor número em um array de números negativos
test('encontra o menor número em um array de números negativos', () => {
 const numeros = [-3, -1, -5, -2, -4];
 expect(encontrarMenorNumero(numeros)).toBe(-5);
});
//Questão 7
import { calcularMaior } from './maior';
test('Calcular o maior entre dois números', () => {
 expect(calcularMaior(2, 3)).toBe(3);
 expect(calcularMaior(5, 1)).toBe(5);
 expect(calcularMaior(-1, 0)).toBe(0);
 expect(calcularMaior(10, 10)).toBe(10);
});
//Questão 8
import { concatenarStrings } from './concatenar';
test('Concatenar duas strings', () => {
 expect(concatenarStrings('Olá, ', 'mundo!')).toBe('Olá, mundo!');
 expect(concatenarStrings('', 'teste')).toBe('teste');
 expect(concatenarStrings('123', '456')).toBe('123456');
});