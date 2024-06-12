function calcular() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        if (inicio < fim) {
            // Contagem Crescente
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem Regressiva
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}