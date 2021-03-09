'use strict';
let infoDiv=document.getElementById('containerinfo');
let sForm=document.getElementById('Sform');
let tableEl = document.createElement('table');
infoDiv.appendChild(tableEl);
sForm.addEventListener('submit',addStudent);
let conter =0 ;
let tHeader =['id' , 'name' , 'email' , 'phone' , 'age' , 'tuition' ];
let localData=[];
let stuInfo=[];
let total =0;
let h2El=document.createElement('h2');
infoDiv.appendChild(h2El);

function Student(email , phone ,tuition){
  this.email=email;
  this.age=0;
  this.tuition=tuition;
  this.phone=phone;
  this.sName=' ';
  localData.push(this);
  this.genData();
  rander();
  setData();

}

function rander(){

  let tRowEl=document.createElement('tr');
  tableEl.appendChild(tRowEl);
  let tdEl = document.createElement('td');
  tdEl.textContent=conter;
  tRowEl.appendChild(tdEl);
  for(let i =0 ; i<stuInfo.length;i++){
    let tdEl2 = document.createElement('td');
    tdEl2.textContent=stuInfo[i];
    tRowEl.appendChild(tdEl2);
    total=total+parseInt(stuInfo[length]);
  }
  h2El.textContent=`Total ${total}`;
  stuInfo=[];
}

Student.prototype.genData=function(){
  conter++;
  let dataSplit =this.email.split('@');
  this.name=dataSplit[0];
  console.log();
  this.age=getRndAge();
  stuInfo.push(this.name);
  stuInfo.push(this.email);
  stuInfo.push(this.phone);
  stuInfo.push(this.age);
  stuInfo.push(this.tuition);

};


function headerTabel (){
  let headerRow=document.createElement('tr');
  tableEl.appendChild(headerRow);
  for (let i =0 ;i<tHeader.length ;i++){
    let thEl=document.createElement('th');
    thEl.textContent=tHeader[i];
    headerRow.appendChild(thEl);
  }
}



function getRndAge() {
  return Math.floor(Math.random() * (24 - 18 ) ) + 18 ;
}


function addStudent(event){
  event.preventDefault();
  let email =event.target.studentEmail.value;
  let phoneNum =event.target.studentNum.value;
  let stuTuition =parseInt(event.target.sTuition.value);
  console.log(` -------------${email} ${phoneNum} ${stuTuition} `);
  new Student(email , phoneNum ,stuTuition);


}

function getData(){
  let receveData=localStorage.getItem('Student');
  let list = JSON.parse(receveData);
  if (list){
    receveData=list ;
    console.log(receveData);

    for(let i =0 ; i<receveData.length ; i++){
      conter++;
      stuInfo.push(receveData[i].name);
      stuInfo.push(receveData[i].email);
      stuInfo.push(receveData[i].phone);
      stuInfo.push(receveData[i].age);
      stuInfo.push(receveData[i].tuition);
      rander();

    }
  }


}
function setData(){
  let dataToSave = JSON.stringify(localData);
  localStorage.setItem('Student', dataToSave);

}


headerTabel();
getData();

