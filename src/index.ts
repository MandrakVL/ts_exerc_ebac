function multiplicarValores(valorA: number, valorB: number): number {
    return valorA * valorB;
}

function saudacoes(nome: string): string {
    return "Olá, " + nome;
}

const valores = multiplicarValores(5, 5);
console.log(valores)

const seuNome = saudacoes("Mandrake");
console.log(seuNome)
