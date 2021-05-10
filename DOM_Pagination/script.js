const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.setAttribute('style','border:2px solid black;height:500px;width:500px;')
 const trow = document.createElement('tr');
 const th1 = document.createElement('th');
 const th2 = document.createElement('th');
 const th3 = document.createElement('th');
 th1.textContent= 'id';
 th2.textContent= 'Name';
 th3.textContent= 'E-mail';
 trow.append(th1,th2,th3);
 thead.append(trow);
document.body.append(table);

// const input = document.querySelector('#input');
// function sub(){const value=input.setAttribute('value','#input.innerText');
// console.log(value);}
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let  thRow = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th1.textContent = 'id';
th2.textContent = 'name';
th3.textContent = 'e-mail';
thRow.append(th1, th2, th3);

thead.appendChild(thRow);
table.appendChild(thead);
for(i=0; i<=10; i++){
    let btn=document.createElement('button')
    btn.innerHTML = i;
    arr.push(btn);
    document.body.appendChild(btn)
}
let tbRows = document.createElement('tr');
                let td1 = document.createElement('td');
                    td1.textContent = (data[i].id);//name,email