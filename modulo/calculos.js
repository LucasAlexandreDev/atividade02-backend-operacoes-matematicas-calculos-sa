/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculos matemáticos 
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca de validações de dados
const validacao = require('./validacoesDados')

// função que retorna a soma do n1 com n2
function operacaoSoma(numero1, numero2){

    // chama a função de validação e conversão, que transforma os números em decimais válidos
    let numerosConvertidos = validacao.validarValorDecimal(numero1, numero2)
    
    // separa os valores do array retornado pela função de validação e conversão
    let n1 = numerosConvertidos[0]
    let n2 = numerosConvertidos[1]

    // cálculo de soma
    let soma = n1 + n2
    
    return Number(soma.toFixed(2))
}

// função que retorna a subtração do n1 com o n2
function operacaoSubtracao(numero1, numero2){
    let numerosConvertidos = validacao.validarValorDecimal(numero1, numero2)
    let n1 = numerosConvertidos[0]
    let n2 = numerosConvertidos[1]
    
    // cálculo de subtração
    let subtracao = n1 - n2

    return Number(subtracao.toFixed(2))
}

// função que retorna a divisão do n1 com o n2
function operacaoDivisao(numero1, numero2){
    let numerosConvertidos = validacao.validarValorDecimal(numero1, numero2)
    let n1 = numerosConvertidos[0]
    let n2 = numerosConvertidos[1]
    
    // cálculo de divisão
    let divisao = n1 / n2

    // verifica se o divisor é zero 
    if(n2 == 0){
        return 'erroDivisao'

    }else{
        return Number(divisao.toFixed(2))
    }
}

// função que retorna a multiplicação do n1 com o n2
function operacaoMultiplicacao(numero1, numero2){
    let numerosConvertidos = validacao.validarValorDecimal(numero1, numero2)
    let n1 = numerosConvertidos[0]
    let n2 = numerosConvertidos[1]
    
    // cálculo de multiplicação
    let multiplicacao = n1 * n2

    return Number(multiplicacao.toFixed(2))
}


module.exports = {
    operacaoSoma,
    operacaoSubtracao,
    operacaoDivisao,
    operacaoMultiplicacao
}