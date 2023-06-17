var sinal;
var numero = 0;
var calculo;
function inserir(produto){
    let valor = document.getElementById(produto).value;
    switch(valor){
        case '1': document.getElementById('display').value += produto;break;
        case '2': document.getElementById('display').value += produto;break;
        case '3': document.getElementById('display').value += produto;break;
        case '4': document.getElementById('display').value += produto;break;
        case '5': document.getElementById('display').value += produto;break;
        case '6': document.getElementById('display').value += produto;break;
        case '7': document.getElementById('display').value += produto;break;
        case '8': document.getElementById('display').value += produto;break;
        case '9': document.getElementById('display').value += produto;break;
        case '0': document.getElementById('display').value += produto;break;
        case 'C': document.getElementById('display').value = '';break;
        case '+': armazenar('+');break;
        case '-': armazenar('-');break;
        case '/': armazenar('/');break;
        case '*': armazenar('*');break;
        case '=': calcular(sinal);break;

        
    }   

}
function armazenar(acao){
    if (acao == '+'){
        numero = Number(document.getElementById('display').value) ;
        sinal = '+';
    }else if(acao == '-'){
        numero = Number(document.getElementById('display').value) ;
        sinal = '-';
    }else if(acao == '*'){
        numero = Number(document.getElementById('display').value) ;
        sinal = '*';
    }
    else if(acao == '/'){
        numero = Number(document.getElementById('display').value) ;
        sinal = '/';
    }
       console.log(numero,sinal)
       return document.getElementById('display').value = '';

}
function calcular(sinal){
    if(sinal == '+'){
        let numero2 = Number(document.getElementById('display').value);
        calculo = numero + numero2;
        return document.getElementById('display').value = calculo;
    }else  if(sinal == '-'){
        let numero2 = Number(document.getElementById('display').value);
        calculo = numero - numero2;
        return document.getElementById('display').value = calculo;
    }else  if(sinal == '/'){
        let numero2 = Number(document.getElementById('display').value);
        calculo = numero / numero2;
        return document.getElementById('display').value = calculo;
    }else  if(sinal == '*'){
        let numero2 = Number(document.getElementById('display').value);
        calculo = numero * numero2;
        return document.getElementById('display').value = calculo;
    }

}