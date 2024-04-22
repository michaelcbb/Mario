const mario = document.querySelector('.mario');

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

document.addEventListener('keydown', jump );

document.getElementById('botaoEspaco').addEventListener('click', function() {
    var evento = new KeyboardEvent('keydown', {
      key: ' ',
      keyCode: 32,
      which: 32
    });
    document.dispatchEvent(evento);
  });