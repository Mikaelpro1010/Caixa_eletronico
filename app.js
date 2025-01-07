let cedulas = [100, 50, 20, 10, 5, 2]

const saque = () => {
    let valor = parseInt(document.getElementById('valor').value);
    let resultado = '';
    let count;

    for (let i = 0; i < cedulas.length; i++) {
        count = 0; 
        while (valor >= cedulas[i]) {
            valor -= cedulas[i];
            count++;
        }
        if (count > 0) {
            resultado += `${count} Notas de  R$ ${cedulas[i]}<br>`;
        }
    }

    if (valor > 0) {
        resultado += `<p>Valor restante que não pode ser sacado: ${valor}</p>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}
