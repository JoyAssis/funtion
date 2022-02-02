//1 - crie uma função que exiba uma mensagem no console

function umaMensagem(){
    console.log("Quando vai começar os dias de glória? pq to cansada de lutar!")
}
umaMensagem ()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(name){
    console.log(`Meu nome é, ${name},`)
}

meuNome("Joy")


//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console


function ExibirDados(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu estilo músical favorito é o ${estiloMusical}`)
}

ExibirDados(`Joy`, `25`, `MPB`)
 
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmeeMusica(filmeFavorito, musica){
    console.log(`Meu filme  ${filmeFavorito} e minha música ${musica}`)
}

filmeeMusica(`nick and norah's infinite playlist`, `Every second by Mina Okabe`)

//BÔNUS
//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triple(num){
    return (num*3)
}

console.log(triple(3))