function calcular(operacao){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    let resultado
    switch (operacao) {
        case '+':resultado = somar(n1,n2);break;
        case '-':resultado = diminuir(n1,n2);break;
        case '*':resultado = multiplicar(n1,n2);break;
        case '/':resultado = dividir(n1,n2);break;   
        
    }

    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}
function somar(n1,n2){
    return Number(n1) + Number(n2)
}
function diminuir(n1,n2){
    return Number(n1) - Number(n2)

}
function multiplicar(n1,n2){
    return Number(n1) * Number(n2)
}
function dividir(n1,n2){
    if(n2 == 0){
        console.error('Não é possivel dividir por 0')
        return null
    }else{
        return Number(n1) / Number(n2)
    }
}
