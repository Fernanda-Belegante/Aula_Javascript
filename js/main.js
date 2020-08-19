function clicou (){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
    //console.log (document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");
}
function redirecionar(){
   /* window.open("https://seligaaigalerinha.blogspot.com/");*/
    window.location.href="https://seligaaigalerinha.blogspot.com/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
//alert("trocar texto");

}
function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}

function load(){
alert("Página carregada");
}
function soma(n1, n2){
    return n1+n2;  
}

function functionChange(elemento){
    console.log(elemento.value)
}
/*
var validar=0;
function validaIdade(idade){
    if(idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}
var idade= prompt("Qual é a sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*var d= new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
/*var count;
for (count= 0; count <=5; count++) {
    alert(count);

};
*/
/*var count=0;
while (count<=5){
    console.log(count);
    alert(count);
    count++; 
    
};
*/
/*var idade= prompt("Qual é a sua idade?");
if (idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*var frutas= [{nome: "maçã" , cor: "vermelha"}, {nome:"uva" , cor:"roxa"}]
console.log (frutas);
alert(frutas[1].nome);
*/

/*var fruta= {nome: "maçã" , cor: " vermelha"}
console.log (fruta.nome);
alert(fruta.cor);
*/
//var lista=["maçã", "pêra" , "laranja" ];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log (lista.toString());
//console.log(lista.join(" | "));


//var nome=" Fernanda Belegante";
//var idade=18;
//var idade2= 10;
//var frase=" Japão é o melhor time do mundo";
//alert(nome + " tem" + idade +" anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão" , "Brasil"));