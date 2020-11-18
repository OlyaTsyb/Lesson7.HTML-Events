// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


/*
let btn = document.createElement("button")
let div = document.createElement('div');
div.innerText = "Lorem jjhgfdsfghknkvhjvkjb"
btn.innerText = "BUTTON"
document.body.appendChild(div)
document.body.appendChild(btn)
div.style.display ="block"
btn.onclick = () => {
  if(div.style.display ==="block"){
    div.style.display ="none"
    
  }else{div.style.display ="block"}
}
*/


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


/*
let btn = document.createElement("button");
btn.style.backgroundColor = "purple";
btn.style.width = "100px";
btn.style.height = "50px";
btn.innerText = "BUTTON";
btn.style.color = "white";
document.body.appendChild(btn);
btn.onclick = () => {
    btn.style.display = "none";
}
*/

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement("input");
input.style.height = "45px";
input.style.width = "200px"
document.body.appendChild(input)


let btn = document.createElement("button");
btn.style.backgroundColor = "purple";
btn.style.width = "100px";
btn.style.height = "50px";
btn.innerText = "BUTTON";
btn.style.color = "white";
document.body.appendChild(btn);


btn.onclick = () => {
    console.log(input.value)
    if(input.value >= 18){
        alert("Welcome")
    }else {
      alert("Your age more less 18 years old")
    }
}



//- Создайте меню, которое раскрывается/сворачивается при клике
/*
let wrap = document.createElement("ul");
let liWrap = document.createElement("li")
liWrap.innerHTML = "<a href='#'>Menu</a>"
let ul = document.createElement("ul");
ul.setAttribute("id", "menuList")
let li1 = document.createElement("li");
li1.innerHTML =  "<a href>One</a>"
let li2 = document.createElement("li");
li2.innerHTML =  "<a href>Two</a>"
let li3 = document.createElement("li");
li3.innerHTML =  "<a href>Three</a>"


liWrap.onclick = () =>{
  if(ul.style.display === "block"){
      menuList.style.display = "none"
  } else{
    ul.style.display = "block"
  }
 }
document.body.appendChild(wrap);
wrap.appendChild(liWrap);
liWrap.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
*/



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

/*
let array = [
  {title : 'ONE', body:'lorem ipsum dolo sit ameti'},
  {title : 'TWO', body:'lorem ipsum dolo sit ameti'},
  {title : 'THREE', body:'lorem ipsum dolo sit ameti'},
  {title : 'FOUR', body:'lorem ipsum dolo sit ameti'},
  {title : 'FIVE', body:'lorem ipsum dolo sit ameti'},
  {title : 'SIX', body:'lorem ipsum dolo sit ameti'},
]
let wrap = document.createElement("div")

array.forEach(item => {
let div = document.createElement("div");
let h3 = document.createElement("h3");
let p = document.createElement("p");
let btn = document.createElement("button");
h3.innerText = item.title;
p.innerText = item.body;
btn.innerText = "BUTTON"
btn.onclick = ()=> {
  if(p.hidden){
    p.hidden = false
  }else{
    p.hidden = true
  }

}

  document.body.appendChild(wrap);
  wrap.appendChild(div)
  div.appendChild(h3);
  div.appendChild(p)
  div.appendChild(btn)


})
*/



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/*
let firstForm = document.forms.firstForm
let secondForms = document.forms.secondForm
let button = document.createElement("button")
button.innerText = "Button"

document.body.appendChild(button)

button.onclick = () => {
  console.log(firstForm.inputFirstForm.value,"\n",
              firstForm.inputSecondtForm.value,"\n",
              secondForm.inputForm1.value,"\n",
              secondForm.inputForm2.value)
}
*/
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати

/*
let content = document.getElementById("content");

 function createTable(rows,columns,par){
    let table = document.createElement("table");
    for(let i = 0;i < rows;i++){
        let tr = document.createElement("tr");
        for(let j = 0;j < columns;j++){
          let td = document.createElement("td");
          td.innerHTML = i.toString() + j.toString();
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    par.appendChild(table)
  }
createTable(5,6,content)
*/


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
/*
let input1 = document.getElementById("first")
let input2 = document.getElementById("second")
let input3 = document.getElementById("third")
let content = document.getElementById("content");
let button = document.createElement("button")
button.innerText = "button"
button.onclick = () => {
   let table = document.createElement("table");
   for(let i = 0;i < input1.value;i++){
    let tr = document.createElement("tr");
    for(let j = 0;j < input2.value;j++){
      let td = document.createElement("td");
      td.innerHTML = input3.value;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  content.appendChild(table)
}
document.body.appendChild(button)
*/
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

/*
let imgArr =[
  {
    id:1,
    img_url:"images/fon.jpg"
  },
  {
    id:1,
    img_url:"images/firstStep.jpg"
  },
  {
    id:1,
    img_url:"images/fifthStep.jpg"
  },
  {
    id:1,
    img_url:"images/secondStep.jpg"
  },

]

let content = document.getElementById("content");
let img = document.createElement("img");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");

btn1.innerText = "left";
btn2.innerText = "right";

let index = 0 ;
img.width = 250;

img.src = imgArr[index].img_url
content.appendChild(img)
content.appendChild(btn1)
content.appendChild(btn2)
btn1.onclick = () => {
  index-1 < 0 
    ?index = imgArr.length-1
    :index = index-1
  
  img.src = imgArr[index].img_url
}

btn2.onclick = () => {
  index +1 > imgArr.length-1
    ?index = 0
    :index = index +1
  
  img.src = imgArr[index].img_url
}
*/

// - Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві нецензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
/*
let arr = ["tit","snatch", "oh fuck off", " damn", "bloody", "arse"]
let button = document.createElement("button")
button.innerText = 'button'
button.style.backgroundColor = "pink"
let input = document.createElement("input")
input.setAttribute("type","text")
button.onclick = () => {
  for(let i = 0;i < arr.length;i++){
    let item = arr[i]
    if(item === input.value){
        alert("You use obscene words!!")
      }
    }
}

document.body.appendChild(input)
document.body.appendChild(button)
*/

// - Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

/*
let arr = ["tit","snatch", "oh fuck off", " damn", "bloody", "arse"]
let button = document.createElement("button")
button.innerText = 'button'
button.style.backgroundColor = "pink"
let input = document.createElement("input")
input.setAttribute("type","text")
button.onclick = () => {
  for(let i = 0;i < arr.length;i++){
    let item = arr[i]
    if(input.value.includes(item)){
        alert("You use obscene words!!")
      }
    }
}

document.body.appendChild(input)
document.body.appendChild(button)
*/

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
/*
let arrh2 = document.getElementsByTagName("h2");
let content = document.getElementById("content");
let wrap = document.getElementById("wrap");
let ul = document.createElement("ul");
for (let i = 0; i < arrh2.length; i++){
  let li = document.createElement("li");
  let a = document.createElement("a");
  let d = "d" + i ;
  a.href = "#" + d
  arrh2[i].setAttribute("id",d);
  a.innerText = arrh2[i].innerText;
  li.appendChild(a);
  ul.appendChild(li)
}

content.appendChild(ul)
content.style.width = "30%";
wrap.style.width = "70%";
content.style.float = "left"
wrap.style.float = "left"
*/

// -- взять массив пользователей

let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

/*
let chek1 = document.createElement("input")
chek1.setAttribute("type", "checkbox")
let chek2 = document.createElement("input")
chek2.setAttribute("type", "checkbox")
let chek3 = document.createElement("input")
chek3.setAttribute("type", "checkbox")
let btn = document.createElement("button")
btn.innerText = "BUTTON"


btn.onclick = () => {
  let div = document.createElement("div")
  
   let newArray = JSON.parse(JSON.stringify(usersWithAddress ))
  if(chek1.checked){
    newArray = newArray.filter(value => !value.status);
  }
  if(chek2.checked) {
    newArray = newArray.filter(value => value.age >= 29);
  }
  if(chek3.checked){
    newArray = newArray.filter(value => value.address.city === "Kyiv");
  }
  div.innerText = JSON.stringify(newArray)
  console.log(newArray)
  document.body.appendChild(div)
}


document.body.appendChild(chek1);
document.body.appendChild(chek2);
document.body.appendChild(chek3);
document.body.appendChild(btn)
*/




























