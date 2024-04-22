const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    
    if(pipePosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }

}, 10);

document.addEventListener('keydown', jump );






document.addEventListener('click', function() {
    var evento = new KeyboardEvent('keydown', {
      key: ' ',
      keyCode: 32,
      which: 32
    });
    document.dispatchEvent(evento);
  });