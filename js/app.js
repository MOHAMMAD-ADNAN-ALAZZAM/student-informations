'use strict';
let form =document.getElementById('form');
let email =document.getElementById('email');
let Mobile =document.getElementById('Mobile');
let Tuition =document.getElementById('Tuition');
// let button =document.getElementById('button');
// let js =document.getElementById('js');

let information = [];
// let age =[];
function StudentInformation (id ,name,email,Mobile,age,Tuition){
    this.id=id;
    this.name=name;
    this.email=email;
    this.Mobile=Mobile;
    this.Tuition=Tuition;
   
    this.age=age;
    information.push(this);
    saveData ()
}
console.log(information);

let button=document.getElementById('button');
button.addEventListener('click',addInformation);

function addInformation(event){
    event.preventDefault();
    new StudentInformation(id.value,name.value,email.value,Mobile.value,age.value,Tuition.value);
    id++;
}

function age() {
    let x = Math.floor((Math.random() * 24) + 18);
    document.getElementById("js").innerHTML = x;
  }
  age();
  



let table =document.getElementById('js');
// let table =document.getElementById('table');
let tableElement=document.createElement('table');
table.appendChild(tableElement);

let firstTablerow =['id' ,'name','email','Mobile','age','Tuition'];

function addFirstRow(){
    let tabelRow =document.createElement('tr');
    tableElement.appendChild(tabelRow);
    for(let x=0;x<firstTablerow.length;x++){
        let tabelData=document.createElement('th');
        tabelData.appendChild(tabelData);
        tabelData.textContent=firstTablerow[x];

    }

}
// addFirstRow();

function saveData (){
    let data = JSON.stringify(information);
    localStorage.setItem('data',data);
}


function getData(){
    let data = JSON.parse(localStorage.getItem('data'));
    if(data){
        information=data;

    }else{
        information=[];

    }
}
