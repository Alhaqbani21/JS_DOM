let tringle = document.getElementsByClassName('tringle')[0];
console.log(tringle);

colors = ['red', 'black', 'blue', 'yellow', 'green', 'purple', 'pink'];

setInterval(() => {
  let positionx = Math.random() * 100;
  let positiony = Math.random() * 100;
  tringle.style.left = `${positionx}px`;
  tringle.style.bottom = `${positiony}px`;
  tringle.style.right = `${positionx}px`;
  tringle.style.top = `${positiony}px`;
  tringle.style.backgroundColor =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
  tringle.style.width = `${Math.random() * 200}px`;
  tringle.style.height = `${Math.random() * 200}px`;
  tringle.style.opacity = Math.random();
}, 2000);
