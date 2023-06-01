function somar(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    var soma = Number(n1) + Number(n2);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "Resultado: " + soma;


}
function diminuir(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    var diminuir = n1 - n2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "Resultado: " + diminuir;
    
}
function multiplicar(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    var multiplicar = n1 * n2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "Resultado: " + multiplicar;
    
}
function dividir(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    var dividir = n1 / n2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "Resultado: " + dividir;
    
}
