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

function mediaNotas(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    let mediaNotas = document.getElementById("mediaNotas");
    let mediaResultado = document.getElementById("mediaResultado");
    if( isNaN(nota1) || isNaN(nota2) || isNaN (nota3))
    {
        mediaNotas.innerText = "Preencha todas as notas para que seja possivel calcular a média."
        mediaNotas.style.color = "yellow";
        mediaResultado.innerText = "";
    }
    else
    {
        let media = (nota1 + nota2 + nota3) / 3;

        mediaNotas.innerText = media.toFixed(2);
        if (media > 5.9)
        {
            mediaResultado.innerText = "Aluno: APROVADO";
            mediaResultado.style.color = "green";
        }
        else
        {
            mediaResultado.innerText = "Aluno: REPROVADO";
            mediaResultado.style.color = "red";
        }
    }
}

function numerosPares(){
    let localNumeros = document.getElementById("numeros");
    for (let index = 1; index <= 100; index++) 
    {
        if (index % 2 == 0)
        {
            localNumeros.innerText  = localNumeros.innerText + ", " + index;
        }
        
    }
}

function maiorNumero(){
    let numeroUm = parseFloat(document.getElementById("valorMaior1").value);
    let numeroDois = parseFloat(document.getElementById("valorMaior2").value);
    let maior = document.getElementById("maior");

    if( isNaN(numeroUm) || isNaN(numeroDois) )
    {
        maior.innerText = "Preencha os dois campos para que seja possivel a comparação."
    }
    else
    {
        if (numeroUm == numeroDois)
        {
            maior.innerText = "Números iguais";
        }
        else if (numeroUm > numeroDois)
        {
            maior.innerText = numeroUm
        }
        else
        {
            maior.innerText = numeroDois
        }
    }
}

function menorNumero(){
    let numeroUm = parseFloat(document.getElementById("valorMenor1").value);
    let numeroDois = parseFloat(document.getElementById("valorMenor2").value);
    let menor = document.getElementById("menor");
    
    if( isNaN(numeroUm) || isNaN(numeroDois) )
    {
        menor.innerText = "Preencha os dois campos para que seja possivel a comparação."
    }
    else
    {
        if (numeroUm == numeroDois)
        {
            menor.innerText = "Números iguais";
        }
        else if (numeroUm > numeroDois)
        {
            menor.innerText = numeroDois
        }
        else
        {
            menor.innerText = numeroUm
        }
    }
}