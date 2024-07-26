function countdown() {
    const lancamento = new Date("December 09, 2024 23:59:59").getTime();
    const agora = new Date().getTime();
    const diferenca = lancamento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias < 10 ? `0${dias}` : dias;
    document.getElementById("horas").innerText = horas < 10 ? `0${horas}` : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? `0${minutos}` : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? `0${segundos}` : segundos;

    if (diferenca < 0) {
        clearInterval(intervalo);
        document.querySelector(".countdown").innerText = "Tempo esgotado!";
    }
}

const intervalo = setInterval(countdown, 1000);