const form = document.getElementById('form-calcular');
const valorA = document.getElementById('numberA');
const valorB = document.getElementById('numberB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemCorreta = document.getElementById("success-message");
    const mensagemErrada = document.getElementById("error-message");
    const mensagemIgual = document.getElementById("iguais-message");

    const mensagemA = `<b>${valorA.value}</b> é maior que <b>${valorB.value}</b>, logo A é maior que B`;
    const mensagemB = `<b>${valorB.value}</b> é maior que <b>${valorA.value}</b>, logo B é maior que A`;
    const mensagemC = `<b>${valorA.value}</b> é igual a <b>${valorB.value}</b>, logo A e B são iguais`;

    mensagemCorreta.style.display = "none";
    mensagemErrada.style.display = "none";
    mensagemIgual.style.display = "none";

    if (valorA.value > valorB.value) {
        mensagemCorreta.innerHTML = mensagemA;
        mensagemCorreta.style.display = "block";
    } else if (valorA.value < valorB.value) {
        mensagemErrada.innerHTML = mensagemB;
        mensagemErrada.style.display = "block";
    } else if (valorA.value == valorB.value) {
        mensagemIgual.innerHTML = mensagemC;
        mensagemIgual.style.display = "block";
    }
});


