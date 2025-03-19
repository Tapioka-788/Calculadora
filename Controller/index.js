document.addEventListener("DOMContentLoaded", function () {
    const valor1 = document.getElementById("valor1");
    const valor2 = document.getElementById("valor2");
    const botoes = document.querySelectorAll(".funcBtn");
    const botaoIgual = document.getElementById("igual");
    const botaoLimpar = document.getElementById("limpar"); // Botão de limpar
    let operador = null;

    // Capturar o operador selecionado
    botoes.forEach((botao) => {
        botao.addEventListener("click", function () {
            operador = this.textContent; // Pega o símbolo do botão clicado
        });
    });

    // Calcular o resultado quando clicar no botão "Igual"
    botaoIgual.addEventListener("click", function () {
        const num1 = parseFloat(valor1.value);
        const num2 = parseFloat(valor2.value);
        let resultado;

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, insira números válidos.");
            return;
        }

        switch (operador) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "/":
                resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
                break;
            case "*":
                resultado = num1 * num2;
                break;
            default:
                alert("Selecione uma operação.");
                return;
        }

        // Exibir o resultado na tela
        let resultadoElemento = document.getElementById("resultado");
        if (!resultadoElemento) {
            resultadoElemento = document.createElement("h2");
            resultadoElemento.id = "resultado";
            document.getElementById("calculadora").appendChild(resultadoElemento);
        }
        resultadoElemento.textContent = `Resultado: ${resultado}`;
    });

    // Limpar os campos e o resultado
    botaoLimpar.addEventListener("click", function () {
        valor1.value = "";
        valor2.value = "";
        operador = null;

        const resultadoElemento = document.getElementById("resultado");
        if (resultadoElemento) {
            resultadoElemento.textContent = "Resultado:";
        }
    });
});

