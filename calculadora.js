function soma(numero1, numero2) {
    return numero1 + numero2
}

function subtracao(numero1, numero2) {
    return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2
}

function divisao(numero1, numero2) {
    return numero1 / numero2
}

let calculadora = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}

let versao = "1.0"

export { versao }
export default calculadora