
let a
let p

document.getElementById("btn").addEventListener("click", Calcula_imc);

function Calcula_imc(){
   let imc = p/(a*a);

   p = Number(document.getElementById("peso").value);
   a = Number(document.getElementById("altura").value);

   if (imc<=16.9){
        document.getElementById("resposta").innerText = "Muito abaixo do peso"
   }if (imc>=17 && imc <= 18.4){
        document.getElementById("resposta").innerText = "Abaixo do peso"
   }if (imc>=18.5 && imc <= 24.9){
        document.getElementById("resposta").innerText = "Peso normal"
   }if (imc>=25 && imc <= 29.9){
        document.getElementById("resposta").innerText = "Acima do peso"
    }if (imc>=30 && imc <= 34.9){
        document.getElementById("resposta").innerText = "Obesidade grau I"
    }if (imc>=35 && imc < 40){
        document.getElementById("resposta").innerText = "Obesidade grau II"
    }if (imc>40){
        document.getElementById("resposta").innerText = "Obesidade grau III"
    }

   console.log(imc)

}
