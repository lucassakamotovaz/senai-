var Peças =  ["ABC", "AB", "Peça"] 

var nome1 = "ABC"
var nome2 = "AB"
var nome3 = "Peça"
var peso1 = 103
var peso2 = 120
var peso3 = 50



console.log("Peças sendo acresentadas "+ nome1+ ", " + nome2 + " e " + nome3 + "." )

for(let index = 0; index<Peças.length; index++){
    

   const TextoVetor = Peças[index]
    
    if (TextoVetor.length <3){
        console.log( "A peça "+TextoVetor + " esta com caracteres errado.")
        
    } else { 
        console.log( "A "+Peças[index]+ " pode ser cadastrado")
    }
}

console.log("-----------------------------------")

console.log("Peso da " + nome1 + " é " + peso1 + ".")

console.log("Peso da " + nome2 + " é " + peso2 + ".")

console.log("Peso da " + nome3 + " é " + peso3 + ".")

var Pesos = [103, 120, 50 ]

for(let index = 0; index<Pesos.length; index++){
    const pesoAtual = Pesos[index]
    if (pesoAtual <=100){
        console.log("o peso"+ Pesos[index] + " não pode ser cadastrado" )
    

    }   else{
        console.log( "O "+Pesos[index] + " pode se cadastrar")
    }

}
console.log("-----------------------------------")

var quantidadeDepecas = 3

if (quantidadeDepecas <10){
    console.log("a quantidade "+ quantidadeDepecas+ " e suportavel")


}   else{
console.log("a quantidade "+ quantidadeDepecas + " nao e suportavel")
}







