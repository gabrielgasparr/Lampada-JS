const turnOn = document.getElementById ('turnOn');
const turnOFF = document.getElementById ('turnOFF');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('lampadaquebrada') > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './imagens/lampadaligada.jpg';
    }
}
function lampOFF () {
    if ( !isLampBroken () ) {
    lamp.src = './imagens/lampadadesligada.jpg';
    }
}
function lampBroken () {
    lamp.src = './imagens/lampadaquebrada.jpg';
}


turnOn.addEventListener ('click', lampOn);
turnOFF.addEventListener ('click', lampOFF);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOFF);
lamp.addEventListener ('dblclick', lampBroken);
