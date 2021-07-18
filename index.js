const pattern = new RegExp('^[A-Z]+$', 'i'); 
let quantidade=3;//número de pessoas para comparar (pode ser mudado)
let pessoas=repetição(quantidade);//obtém os dados de uma ou mais pessoas dependendo da variável de quantidade
console.log("personas:");
console.table(pessoas);//mostra no console os dados das pessoas que entraram
console.log("comparacion:");
console.table(compararIdadePessoas(pessoas));//mostra no console os dados das pessoas de mayor e menor idade


//função para obtém os dados de uma ou mais pessoas dependendo da variável de quantidade
function repetição(quantidade){
    let pessoas=[];
    for(numero=1;numero<=quantidade;numero++){
        pessoas[numero]= pegarPessoa(numero); 
    }
    return pessoas;
}

//função para pegar los dados de uma pessoa
function pegarPessoa(numero) {
    let nome=""; 
    let sobrenome=""; 
    let idade;
    
    //obtendo dados da pessoa
    do{
        nome=pedirDado(nome,"nome",numero);
        sobrenome=pedirDado(sobrenome,"sobrenome",numero);
        idade = parseInt(prompt("digite a idade da pessoa "+numero));
    }while(isNaN(idade));
    
    //construindo o objeto pessoa
    const pessoa = { 
        nome        : nome,
        sobrenome   : sobrenome,
        idade       : idade,
    }
    return pessoa;
}

//função para comparar a idade das pessoas, recebe uma "série" de pessoas
function compararIdadePessoas(pessoas){
    let mayor={nome : pessoas[1].nome+" "+pessoas[1].sobrenome, idade : pessoas[1].idade};
    let menor={nome : pessoas[1].nome+" "+pessoas[1].sobrenome, idade : pessoas[1].idade};

    for(i=1;i<=pessoas.length-1;i++){
       
        if(pessoas[i].idade > mayor.idade){
           mayor.nome=pessoas[i].nome+" "+pessoas[i].sobrenome;
           mayor.idade=pessoas[i].idade;
       }
       else if(pessoas[i].idade < menor.idade){
            menor.nome=pessoas[i].nome+" "+pessoas[i].sobrenome;
            menor.idade=pessoas[i].idade;
       }
    }
    let comparação={mayor,menor};    
    return comparação;
}

// função para mostrar alerta se o campo inserido contiver apenas letras
function mensagemInvalido(string){ 
    if(!pattern.test(string)){
        alert("el dado inserido esta vacio o contiene numeros o espacios");
    }
}

//função que da variável e seu nome pede ao usuário seu valor e o retorna
function pedirDado(variavel,nome,numero){
    while (variavel.length === 0 || !pattern.test(variavel)){
        mensagemInvalido(variavel = prompt(`digite o `+nome+` da pessoa `+ numero));  
    } 
    return variavel;
}
