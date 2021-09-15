var cadastrados = ["lucas", "carlos", "ana", "julio", "clara", "ruan"]
var validos = ["inicio"]

    console.log("seja bem-vindo a comunidade dedicado aos desenvolvedores.")
    console.log("para se cadastrar e necessario passar por algumas etapas.")
    console.log("-----------------------------------------------------")
    console.log("a data de cadastro e ate dia 25 de setembro, se nao, nao permitiremos seu cadastro.")
    console.log("-----------------------------------------------------")
    var ano = 21 // colocar o ano em que estamos.
    var mes = 9 // colocar o mes em que estamos.
    var dia = 23// colocar o dia em que estamos.

    if(ano <=21){
        var validacao = ("cadastro valido")
        var anoData = "Confirmado1"
        validos.push(anoData)
        console.log("ano valido")
    } else{ 
        var invalidacao = ("cadastro negado")
        console.log("ano invalido.")
    }
    if(mes <=9){
        var validacao = ("cadastro valido")
        var mesData = "Confirmado2"
        validos.push(mesData)
        console.log("mes valido")
    } else{
        var invalidacao = ("cadastro negado")
        console.log("mes invalido. ")
    }
    if(dia <=25){
        var validacao = ("cadastro valido")
        var diaData = "Confirmado3"
        validos.push(diaData)
        console.log("dia valido")
    } else{
        var invalidacao = ("cadastro negado")
        console.log("dia invalido.")
    }
    
    console.log("-----------------------------------------------------")
    var nascimentoAno = 2003 //colocar ano que nasceu aqui

    var anoAtual = 2021
    resultadoIdade = anoAtual-nascimentoAno
    if(resultadoIdade >= 18){
        var validacao = ("cadastro valido")
        console.log("voce tem "+ resultadoIdade + " anos, idade valida")
        var idadeData = "Confirmado4"
        validos.push(idadeData)
    } else{
        var invalidacao = ("cadastro negado")
        console.log("voce tem "+ resultadoIdade+ "anos, idade invalida")
    }
    console.log("-----------------------------------------------------")
    console.log("atualmente temos "+ cadastrados.length + " cadastrados.")
    cadastrosMaximos = 100
    cadastrosRestantes = cadastrosMaximos - cadastrados.length
    console.log("cadastros restantes sao " + cadastrosRestantes +".")
    var nomeCadastro = "jose" //Adicionar nome aqui 
    cadastrados.push(nomeCadastro); 
    console.log("adicionando "+ nomeCadastro +" como novo cadastrado....")
    if(cadastrados.length <=100){
        cadastrosRestantes = cadastrosMaximos - cadastrados.length
        var cadastroData = "Confirmado5"
        validos.push(cadastroData)
    } else{
        var invalidacao = ("cadastro negado")
        console.log("cadastro negado. numero maximo de cadastro atingido.")

    }
    if(validos.length >=6){
        console.log("agora restam " + cadastrosRestantes +".")
        console.log("e temos "+ cadastrados.length + " cadastrados agora.")
        console.log("Parabens voce foi cadastrado com sucesso.")
    } else{
        console.log("voce nao esta legivel para cadastro, por favor tente novamente uma outra vez.")
    }

    
    
    

    
    





