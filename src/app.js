let startButton = document.querySelector('.start');
let ring = document.querySelector('.ring');
let screenMessage = document.querySelector('.message')

let settingsButton = document.querySelector('.settings');
let image = settingsButton.querySelector('img')

let minutesBlock = document.querySelector('.minutes');
let minutesValue = minutesBlock.querySelector('input');

let secondsBlock = document.querySelector('.seconds');
let secondsValue = secondsBlock.querySelector('input');
let timer;

startButton.addEventListener('click', () => {
    if (startButton.innerText === 'START') {
        startButton.innerText = 'STOP';
        countDown()
        return
    }

    if (startButton.innerText === 'STOP') {
        startButton.innerText = 'START';
        clearTimeout(timer)
        return 
    }
})

settingsButton.addEventListener('click', () => {
    if (image.getAttribute('src') === '/gear.c4220474.svg') {
        image.src = "/check.c59f94c9.svg"
        minutesValue.disabled = false
        secondsValue.disabled = false
        startButton.disabled = true
        minutesValue.setAttribute('maxlength', 2)
        secondsValue.setAttribute('maxlength', 2)
        ring.classList.remove('ending')
        startButton.innerText = 'START'
        screenMessage.innerText = ''
        clearTimeout(timer)

    } else {
        image.src = "/gear.c4220474.svg"
        minutesValue.disabled = true
        secondsValue.disabled = true
        startButton.disabled = false
    }    
})

function countDown() {
    secondsValue.value--
    if (secondsValue.value <= '0' && minutesValue.value != '0') {
        secondsValue.value = '60'
        minutesValue.value--
        countDown()
    } else {
        timer = setTimeout(countDown, 1000)
    }

    if (minutesValue.value === '0' && secondsValue.value <= '0') {
        let message = 'Wake the f*** Up Samurai! We have a city to burn.'
        screenMessage.append(message)
        clearTimeout(timer)
        ring.classList.add('ending')
        startButton.innerText = 'START'
        startButton.disabled = true
    }
}