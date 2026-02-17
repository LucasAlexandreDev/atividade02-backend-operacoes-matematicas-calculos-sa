 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas mensagens de erro de possíveis erros que o usuário (inteligente)pode cometer ao utilizar o sistema
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// função responsável por fornecer mensagens de erro para o usuário
function erros(tipoErro){
    const mensagens = {
        operacaoVazia: 'Por favor, informe a operação desejada (soma, subtração, multiplicação ou divisão) e seus respectos dois núméros.',
        operacaoInvalida: 'Escolha apenas uma dessas operações: soma, subtração, multiplicação ou divisão.',
        camposNumerosObrigatorios: 'Preencha todos os campos de números obrigatórios.',
        numeroInvalido: 'Digite apenas números válidos (ex: 10 ou 10,5 ou 10,55).',
        divisaoZero: 'Divisão por zero não existe.',
        iniciarNovamenteInvalida: 'Opção inválida! Digite "s" para sim ou "n" para não.'
    }

    // retorna a mensagem correspondente ao tipo de erro informado
    return mensagens[tipoErro]
}

module.exports = {
    erros
}