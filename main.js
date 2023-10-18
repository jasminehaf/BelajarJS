// console.log("Hello World")
// alert("Notifikasi")
// prompt("Pinjam dulu seratus, boleh?")

// var Promnet = "Coding is Ez"
// console.log(Promnet)
// var Promnet = "Coding not ez"
// console.log(Promnet)

// let Promnet = "Coding is Ez"
// console.log(Promnet)
// let Promnet23 = "Coding not Ez"
// console.log(Promnet23)

// const Promnet = "Coding is Ez"
// console.log(Promnet)
// Promnet = "Coding not Ez"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan poin Anda")
//     if(totalPoin > 100){
//         document.write("<h1>Congratulation</h1>");
//     } 
//     else {
//         document.write("<h1>Thank you</h1>");
//     }

// let x = 6;
// let y = 3;

// console.log((x<10 && y>1))
// console.log((x<10 && y<1))
// console.log((x==5 || y==5)) 
// console.log((x==6 || y==5)) 
// console.log(!(x == y))

// if (x<10 && y>1) {
//     console.log("a: true");
// } 
// else {
//     console.log("a: false");
// }

// if(x<10 && y<1) {
//     console.log("b: true");
// } 
// else {
//     console.log("b: false");
// } 

// if(x==5 || y==5) {
//     console.log("c: true");
// } 
// else {
//     console.log("c: false");
// }

// if(x==6 || y==5) {
//     console.log("d: true");
// } 
// else {
//     console.log("d: false");
// }
  
// if(!(x == y)) {
//     console.log("e: true");
// } 
// else {
//     console.log("e: false");
// }

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const newTodo = document.getElementById('new-todo');
const addTodo = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodo.addEventListener('click', () => {
    const todoText = newTodo.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';

        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                textSpan.classList.add('completed');
            } else {
                textSpan.classList.remove('completed');
            }
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(textSpan);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
        newTodo.value = '';
    }
});
