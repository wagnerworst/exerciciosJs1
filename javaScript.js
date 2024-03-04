function somarTresValores(){
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const valor3 = parseFloat(document.getElementById("valor3").value);
    const soma = valor1+valor2+valor3;
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;
}

function somarMudanca(){
    const valor1 = parseFloat(document.getElementById("valorMuda1").value);
    const valor2 = parseFloat(document.getElementById("valorMuda2").value);
    const valor3 = parseFloat(document.getElementById("valorMuda3").value);
    const soma = valor1+valor2+valor3;
    if( isNaN(soma) )
    {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos";
    }
    else
    {
        document.getElementById("resultado").innerHTML = "Resultado: " + soma;
    }
}