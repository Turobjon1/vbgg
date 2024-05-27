let prices = document.querySelector(".prices");
let input = document.getElementById("name");
let btn = document.querySelector(".btn");
let body = document.querySelector('body')
let btn2 = document.getElementById('pricebtn')

let data = []

btn.addEventListener('click', () => {
  data.push(input.value)
  malumotchiqar()
  input.value = ''
})




function malumotchiqar() {
  let box = document.createElement("div");
  let p = document.createElement("p");
  let button = document.createElement("button");

  p.innerHTML = input.value;
  button.innerHTML = "delete";


  box.classList.add('price')

  box.appendChild(p);
  box.appendChild(button);

  prices.appendChild(box);

  input.value = ''
}



input.style.borderRadius = '50px'
btn.style.borderRadius = '50px'
btn.style.backgroundColor = 'red'







