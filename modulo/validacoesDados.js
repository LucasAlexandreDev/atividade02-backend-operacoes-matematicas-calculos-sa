 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de validação e verificação de dados de entrada da aplicação.
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// função que válida a operação escolhida pelo usuário
function operacaoUsuario(respostaUsuario){

    // padroniza a resposta do usuário: remove espaços extras e converte para letras minúsculas
    let operacao = respostaUsuario.trim().toLowerCase()

    // verifica se a operação é inválida
    if(operacao == '' || operacao != 'soma' && operacao != 'subtração' && operacao != 'divisão' && operacao != 'multiplicação'){
        return false
    }else{
        return operacao
    }
}

// função que converte a operação de string para number
function conversaoDados(operacao){

    // chama a função que válida a operação do usuário
    let resposta = operacaoUsuario(operacao)

    // converte a operação para um number
    if(!resposta){
        return false

    }else if(resposta == 'soma'){
        return 1

    }else if(resposta == 'subtração'){
        return 2

    }else if(resposta == 'divisão'){
        return 3

    }else if(resposta == 'multiplicação'){
        return 4
    }
}

// função que válida números e converte para decimal
function validarValorDecimal(numero1, numero2){
    
     // Verifica se algum dos campos está vazio
    if(numero1 == '' || numero2 == ''){
        return false
    }

    // substitui a vírgula por ponto e converte para Number
    let n1 = Number(numero1.replace(',', '.'))
    let n2 = Number(numero2.replace(',', '.'))

    /* 
    regex para validar números decimais com até 2 casas decimais, positivos ou negativos:

    ^             -> início da string
    -?            -> sinal de menos opcional (para números negativos)
    \d+           -> pelo menos um dígito antes do ponto decimal
    (\.\d{1,2})?  -> ponto opcional seguido de 1 ou 2 dígitos decimais
    $             -> fim da string
    */

    const regex = /^-?\d+(\.\d{1,2})?$/

    // válida os números convertidos usando o regex
    if(!regex.test(n1) || !regex.test(n2)){
        return false

    }else{
        // se ambos os números forem válidos, retorna um array com os dois
        return [n1, n2]
    }
}

// função que valida a opção do usuário para reiniciar ou finalizar a aplicação
function validarIniciarProgramaNovamente(resposta) {
    let respostaTratada = resposta.trim().toLowerCase()

    // caso o usuário queira continuar
    if (respostaTratada == 's' || respostaTratada == 'sim'){
        return true
    
    // caso o usuário queira encerrar
    }else if (respostaTratada == 'n' || respostaTratada == 'não'){
        return false

    // caso resposta seja inválida   
    }else{
        return 'invalido'
    } 
}

module.exports = {
    operacaoUsuario,
    conversaoDados,
    validarValorDecimal,
    validarIniciarProgramaNovamente
}