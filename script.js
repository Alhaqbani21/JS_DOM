// const ptag = document.getElementById('ptag');

// // ptag.innerHTML = 'Hi';
// console.dir(ptag);

// // let list = document.getElementsByClassName('list')[0].children;
// // console.log(list);

// ptag.insertAdjacentHTML('afterend', '<h1>hello</h1>');

// Q1

let headerTag = document.getElementsByClassName('header')[0];
console.dir(headerTag);

headerTag.style.color = 'purple';
headerTag.style.backgroundColor = 'blue';

// Q2

let paragraph = document.getElementById('paragraph');

paragraph.style.fontWeight = 'bold';

paragraph.setAttribute('class', 'paragraphStyle');

// Q3

let imgTag = document.getElementsByTagName('img');
imgTag[0].src =
  'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTK3VxkYi7fmb5YQyMqIDiGvuG1angXfgUhabet1v3tT2MDPsm3ho8FppZkdmZPCnMN1Bgdohi1b6sFi6WT7Vw';

//   Q4
let ulTag = document.querySelector('ul');
console.log(ulTag);

ulTag.innerHTML =
  '<li class= listStyle>Hello</li><li class= listStyle> All </li><li class= listStyle> of you</li>';
console.log(document.body);

// Q5
document.body.innerHTML += `<table class="tableStyle"></table>`;

let tableTag = document.querySelector('table');

for (let i = 0; i < 2; i++) {
  let trTag = document.createElement('tr');
  let tdTag1 = document.createElement('td');
  let tdTag2 = document.createElement('td');
  let tdTag3 = document.createElement('td');
  tdTag1.innerHTML = '1';
  tdTag2.innerHTML = '2';
  tdTag3.innerHTML = '3';
  trTag.appendChild(tdTag1);
  trTag.appendChild(tdTag2);
  trTag.appendChild(tdTag3);
  tableTag.appendChild(trTag);
}

// lab 2
