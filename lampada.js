const ascender = document.getElementById('btnAscender')
const apagar = document.getElementById('btnApagar')

const img = document.getElementById('imgLampada')

var menssagem = document.getElementById('menssagem')
menssagem.textContent = 'Double Click na lampada para quebra-la!'


var quebrada = false

function ligarLampada() {
    if (quebrada === false) {
        img.setAttribute('src', './img/lampadaAcesa.png')
    }
}

function desligarLampada() {
    if (quebrada === false) {
        img.setAttribute('src', './img/lampadaApagada.png')
    }
}

function quebrarLampada() {
    img.setAttribute('src', './img/lampadaQuebrada.png');
    quebrada = true
    menssagem.textContent = 'A lampada esta quebrada, recarregue a pagina para concertar!'
    ascender.setAttribute('disabled', 'true')
    apagar.setAttribute('disabled', 'true')
}

ascender.addEventListener('click', ligarLampada)
apagar.addEventListener('click', desligarLampada)

img.addEventListener('mouseover', ligarLampada)
img.addEventListener('mouseleave', desligarLampada)

img.addEventListener('dblclick', quebrarLampada)