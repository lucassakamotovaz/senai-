console.log('--------------------------------')
console.log('--------------------------------')

console.log('Cadastro de animais do PetShop')

const animais = ['cachorro', 'gato', 'coelho', 'peixe', 'pardal', 'cobra', 'vaca']

console.log('----------------')
var numeroAnimais = animais.length

console.log('>>>Temos atualmente ' +numeroAnimais + ' em nossa Loja')
console.log('----------------')



console.log('Nossos animais disponiveis:')

for(let index = 0; index<animais.length; index++){
    console.log('O animal número '+index + ' é o ' +animais[index])
}

console.log('--------------------------------')
console.log('A variavel nome é do tipo: ' +typeof animais)
