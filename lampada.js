const acao = document.getElementById('btnAcao')

const img = document.getElementById('imgLampada')

var menssagem = document.getElementById('menssagem')
menssagem.textContent = 'Double Click na lampada para quebra-la!'


var quebrada = false
var ligada = true

function executaAcao() {
    if (ligada) {
        desligarLampada()
    } else {
        ligarLampada()
    }
}

function ligarLampada() {
    if (quebrada === false) {
        img.setAttribute('src', './img/lampadaAcesa.png')
    }
    ligada = true
    acao.value = 'Apagar'

}

function desligarLampada() {
    if (quebrada === false) {
        img.setAttribute('src', './img/lampadaApagada.png')
    }
    ligada = false
    acao.value = 'Acender'
}

function quebrarLampada() {
    img.setAttribute('src', './img/lampadaQuebrada.png');
    quebrada = true
    menssagem.textContent = 'A lampada esta quebrada, recarregue a pagina para concertar!'
    acao.setAttribute('disabled', 'true')
    ligada = false
}

acao.addEventListener('click', executaAcao)

img.addEventListener('mouseover', ligarLampada)
img.addEventListener('mouseleave', desligarLampada)

img.addEventListener('dblclick', quebrarLampada)