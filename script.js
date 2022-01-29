// Crie um objeto que receba ao menos três propriedades sobre você.
let dadosPessoais = {
    nome: "Eduardo",
    idade: "29",
    cidade: "Rio de Janeiro",
    estilosMusicais: ["Samba", "Chorinho", "Jazz", "Flamenco"],
}
console.log(dadosPessoais)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
dadosPessoais.sorvete = "Baunilha"
console.log(dadosPessoais)

// Remova uma propriedade desse objeto.
delete dadosPessoais.cidade

//Mostre no console todas as propriedades desse objeto.
console.log(dadosPessoais)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
cadastro = [{nome: "Edu", idade: 20 , telefone: 219123234, amigos: ["João", "Maria", "Marcelly", "Antônia"]}, {nome: "João", idade: 21, telefone: 219234345, amigos: ["Edu", "Larissa", "Juliana", "Ana"]}, {nome: "Maria", idade: 23, telefone: 219345456, amigos: ["Larissa", "Gabriel", "Edu", "Juliana"]}, {nome: "Gabriela", idade: 21, telefone: 219456567, amigos: ["Marcelly", "Edu", "Antônia", "Juliana"]}, {nome: "Alex", idade: 22, telefone: 219567678, amigos: ["Juliana", "Marcelly", "Edu", "Pedro"]}]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0], cadastro[1].amigos[0], cadastro[2].amigos[0], cadastro[3].amigos[0], cadastro[4].amigos[0])
