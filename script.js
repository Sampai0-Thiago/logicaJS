// document.getElementById("meuBotao").addEventListener("click", 
//     funct.ion(){
//         alert("OLÁ, MUNDO!")
//     }
// )

// let nome = "Thito" ;
// console.log(nome);

// nome = "Ariely"
// console.log(nome)

// let x = 1;
// x = "um";

// console.log(x);

// const z = 3.24;

// let soma = x + z;
// console.log(soma);

// let turma = ``;
// console.log(turma)

// let nome = "Thito";
// let idade = 38;
// let preco = 1999.99;

// console.log(`
//     =======================================
//     O usuário ${nome},
//     de ${idade} anos de idade,
//     efetuou uma compre no valor de ${preco}.
//     ========================================
//     `)

// let nome = prompt ("Qual o seu nome?");

// alert(`Olá, S{nome}. Seja bem vindo!!` );

// let nome = confirm("ALUNO DO GTECH 4.0 ?");
//     if (confirm){
//         alert("Seja bem vindo!");

//     } else {
//         alert("Corre");
//     }


function somaMaior(){

    let A = parseInt(prompt("Digite um número inteiro"));
    let B = parseInt(prompt("Digite um número inteiro"));
    let C = parseInt(prompt("Digite um número inteiro"));
    
    let soma = A+B;
    
    if (soma < C) {
        
        alert(`O valor da soma é ${soma}
        e o valor de C é ${C}`);
        } else
            alert(`O valor da soma é maior que o C`)            
}

function tempoCasamento(){
    let nome = String(prompt("Qual seu nome ?") );
    let genero = String(prompt("Qual o seu gênero?\n M - Masculino F - Feminino")).toUpperCase();
    let estadoCivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado (a)")).toUpperCase()

    if (genero == "F" && estadoCivil == "CASADA"){
        let tempo = Number(prompt("Digite quantos anos de casada."))
        alert(`${nome} tem ${tempo} anos de casada!`)
    } else {
        alert("Bora casar ?")
    }

}

function imparPar(){
    let num = Number(prompt("Digite um número qualquer."));

   // (num %2 === 0) ? alert("Esse número é par") : alert("Esse número é ímpar");


    if (num %2 === 0) {
        alert("Este número é par");
    } else if (num % 2 ===1){
        alert("Este númro é ímpar");
    } else {
        alert("Caracter inválido");
    }

}
