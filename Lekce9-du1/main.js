console.log('Všetko baví')

const img = document.querySelector('img')

const move = (event) => {

    console.log(event)
    if (event.code === 'ArrowRight') {
    img.classList.add('margin-left')
    }

    if (event.code === 'ArrowLeft') {
        img.classList.add('margin-zero')
        }
}

document.addEventListener('keydown', move)
