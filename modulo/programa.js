/*************************************************************************** 

* Objetivo: Controlar o fluxo da aplicação, coordenando entrada de dados, validações e cálculos.
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca de entrada de dados
const readline = require('readline')

// import da biblioteca de calculos das operações
const calculo = require('./calculos')

// import da biblioteca de validações de dados
const validacao = require('./validacoesDados')

// import da biblioteca de  exibição de erros
const mensagemErros = require('./mensagemErros')

// cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// função principal que inicia o fluxo da aplicação
function iniciarPrograma() {
// entrada de dados do usuário
    entradaDeDados.question('Informe qual operação matemática deseja para realizar o cálculo:', function(operacaoMatematica){
        let operacao = operacaoMatematica

        entradaDeDados.question('Insira o primeiro número:', function (numero1){
            let n1 = numero1

            entradaDeDados.question('Insira o segundo número: ', function (numero2){
                let n2 = numero2

                // chamo a função operacaoUsuario e passo como argumento a operação
                const resultadoOperacao = validacao.operacaoUsuario(operacao)
                
                // chamo a função conversaoDados e passo como argumento a operação
                const conversao = validacao.conversaoDados(operacao)
                
                let erro = ''
                let exibirResultado = ''

                // condição responsável por verifica erros de entrada do usuário
                if(resultadoOperacao == '' && n1 == '' && n2 == ''){
                    erro = mensagemErros.erros('operacaoVazia')

                }else if(!resultadoOperacao){
                    erro = mensagemErros.erros('operacaoInvalida')

                }else if(n1 == '' || n2 == ''){
                    erro = mensagemErros.erros('camposNumerosObrigatorios')

                }else if(!validacao.validarValorDecimal(n1, n2)){
                    erro = mensagemErros.erros('numeroInvalido')
                }

                // condição responsável por executar a operação escolhida pelo usuário
                if(conversao == 1){
                    let soma = calculo.operacaoSoma(n1, n2)
                    exibirResultado = `O resultado da Adição entre os números ${n1} e ${n2} é: ${soma}`

                }else if (conversao == 2){
                    let subtracao = calculo.operacaoSubtracao(n1, n2)
                    exibirResultado = `O resultado da Subtração entre os números ${n1} e ${n2} é: ${subtracao}`

                }else if (conversao == 3){
                    let divisao = calculo.operacaoDivisao(n1, n2)

                    if(divisao === 'erroDivisao'){
                    erro = mensagemErros.erros('divisaoZero')
                    }else{
                    exibirResultado = `O resultado da Divisão entre os números ${n1} e ${n2} é: ${divisao}`
                    }

                }else if (conversao == 4){
                    let multiplicacao = calculo.operacaoMultiplicacao(n1, n2)
                    exibirResultado = `O resultado da Multiplicacao entre os números ${n1} e ${n2} é: ${multiplicacao}`
                }

                // condição responsável por exibir o resultado ou erro pro usuário
                if(erro){
                    console.log(`ERRO: ${erro}`)
                }else{
                    console.log(`\n****************** Cálculos SA ******************\n\n${exibirResultado}\n\n*************************************************`)
                }
                
                // chama a função responsável por verificar se o usuário deseja continuar
                perguntarSeDesejaContinuar()
            })
        })
    })
}

// função responsável por controlar a reinicialização ou encerramento do programa                              
function perguntarSeDesejaContinuar() {
    entradaDeDados.question('Deseja realizar outro cálculo? (s/n): ', function(resposta){

        let respostaUsuario = resposta

        // chamo a função validarIniciarProgramaNovamente e passo como argumento a respostaUsuario
        const resultado = validacao.validarIniciarProgramaNovamente(respostaUsuario)

        // caso o usuário queira continuar
        if(resultado == true){
            iniciarPrograma()
        
        // caso o usuário queira encerrar
        } else if(resultado == false){
            console.log('\nMuito obrigado por utilizar os serviços da Cálculos SA.\n*************************************************')
            entradaDeDados.close()
        
        // caso resposta seja inválida  
        } else {
            console.log(mensagemErros.erros('iniciarNovamenteInvalida'))
            perguntarSeDesejaContinuar()
        }    
    })
}

module.exports = {
    iniciarPrograma
}
