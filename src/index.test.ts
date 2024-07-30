import { test, expect} from "vitest";

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código
function criaNovoVetor(vetor: number[], valor1:number, valor2:number ): number[] {
   let novovalor = vetor.concat(valor1, valor2)
   return novovalor;
   
}

//Fim do seu código

test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 4, 5)).toEqual([1, 2, 3, 4, 5])
    expect(vetor).toEqual([1, 2, 3])
})
test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 0, 0)).toEqual([1, 2, 3, 0, 0])
    expect(vetor).toEqual([1, 2, 3])
})


/**
 * Exercício 02 - Inverte a ordem dos caracteres de uma string
 * Nome da função - inverteString
 * Crie uma função que receba uma string e retorne essa string com os caracteres em ordem inversa.
 * @param {string} str A string que será invertida
 * @returns {string} Retorna a string com os caracteres em ordem inversa
 * @example
 * inverteString("hello") // "olleh"
 * inverteString("abcdef") // "fedcba"
 */ 

// Início do seu código
//OBS: não use as funções reverse e join
function inverteString(str) {
  
        let String = "";
        for (let i = str.length - 1; i >= 0; i--) {
            String += str[i];
        }
        return String;
}
   
// Fim do seu código

test('inverteString deve inverter a string corretamente', () => {
    expect(inverteString("hello")).toBe("olleh");
    expect(inverteString("abcdef")).toBe("fedcba");
    expect(inverteString("12345")).toBe("54321");
    expect(inverteString("!@#$%")).toBe("%$#@!");
});


/**
 * Exercício 03 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código
function divisivelPor11(min:number, max:number): number[] {
    for(let i = 1; i>= 100; i++){
        let array = []
        if(i % 11 == 0){
           array = [i]
        }
    }
    return array;
}

//Fim do seu código

test('divisivelPor11', () => {
    expect(divisivelPor11(1, 100)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99])
})
test("divisivelPor11 quando min =11 e max 110", () => {
    expect(divisivelPor11(11, 110)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 110])
})
test('divisivelPor11 quando valores trocados', () => {
    expect(divisivelPor11(100, 1)).toEqual([])
})