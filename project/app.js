const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === 'space') {
        setRandomColors()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if (type === 'lock') {
        console.log('perform lock');
    }
})

function generateRandomColor() {
    // RGB
    // #FF0000
    //#00FF00
    //0000FF

    const hexCods = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCods[Math.floor(Math.random() * hexCods.length)]
    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()

        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()