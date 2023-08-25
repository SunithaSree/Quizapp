"use strict";
let userscore=0;
let totalscore=3;
let initial={
    ques:"Is JavaScript Case-sensitive?",
    op1:"Yes",
    op2:"No",
    op3:"Sometimes",
    ans:"Yes"
};
let DataTypes=[{
    ques:"What property is used to check whether a given property is valid or not?",
    op1:"in",
    op2:"exists",
    op3:"lies",
    ans:"in"
},
{
    ques:"When an operator's value is NULL,the typeof returned by unary operator is:",
    op1:"Object",
    op2:"Undefined",
    op3:"Integer",
    ans:"Object"
},
{
    ques:"What will be the output if you print typeof(NaN)?",
    op1:"Number",
    op2:"Object",
    ans:"Number"
}
];
let answers=["Yes","in","Object","Number"];
let current=-1;
function next(){
if(current<2){
   current++;
//console.log(current);
    document.querySelector("p").innerHTML=DataTypes[current].ques;    
    //document.querySelector("#opl1").innerHTML=DataTypes[current].op1;    
    //document.querySelector("#opl2").innerHTML=DataTypes[current].op2;    
    //document.querySelector("#opl3").innerHTML=DataTypes[current].op3;    
    document.querySelector(".options").innerHTML=`<input type="radio" id="op1" name="answer" value="${DataTypes[current].op1}" />
    <label for="op1" id="opl1">${DataTypes[current].op1}</label><br />
    <input type="radio" id="op2" name="answer" value="${DataTypes[current].op2}" />
    <label for="op2" id="opl2">${DataTypes[current].op2}</label><br />
    <input type="radio" id="op3" name="answer" value="${DataTypes[current].op3}" />
    <label for="op3" id="opl3">${DataTypes[current].op3}</label><br />`
    //let value=document.getElementById("op1");
    //let chosen=value.getAttribute("value");
    //console.log(chosen);
    //console.log(typeof chosen);

    //changing value attribute after each click
    /*let optv1=document.getElementById("op1");
    optv1.setAttribute(value,DataTypes[current].op1);
    let optv2=document.getElementById("op2");
    optv2.setAttribute(value,DataTypes[current].op2);
    let optv3=document.getElementById("op3");
    optv3.setAttribute(value,DataTypes[current].op3);
    document.getElementById('next').onclick = function() {
        let radio = document.querySelector('input[type=radio][name=answer]:checked');
        radio.checked = false;
    }*/
}
    if(current>=3){
        //document.querySelector("p").innerHTML=DataTypes[DataTypes.length-1].ques;    
        //document.querySelector("#opl1").innerHTML=DataTypes[DataTypes.length-1].op1;    
        //document.querySelector("#opl2").innerHTML=DataTypes[DataTypes.length-1].op2;    
        //document.querySelector("#opl3").innerHTML=DataTypes[DataTypes.length-1].op3;
        document.querySelector(".bts").innerHTML=`Thank you for attending`

    }
}  
//to disable next when it reaches last question
//if(current===DataTypes.length-1){
    //document.getElementById("next").disabled=true;
//}
function previous(){
    if(current!=-1)
    current--;
    console.log(current);
    //to display the intial question
    if(current==-1){
    document.querySelector("p").innerHTML=initial.ques;
    //document.querySelector("#opl1").innerHTML=initial.op1;    
    //document.querySelector("#opl2").innerHTML=initial.op2;    
    //document.querySelector("#opl3").innerHTML=initial.op3;
    document.querySelector(".options").innerHTML=`<input type="radio" id="op1" name="answer" value="${initial.op1}" />
    <label for="op1" id="opl1">${initial.op1}</label><br />
    <input type="radio" id="op2" name="answer" value="${initial.op2}" />
    <label for="op2" id="opl2">${initial.op2}</label><br />
    <input type="radio" id="op3" name="answer" value="${initial.op3}" />
    <label for="op3" id="opl3">${initial.op3}</label><br />` 
    //modifying the value attruibute
   /* let optv1=document.getElementById("op1");
    optv1.setAttribute(value,initial.op1);
    let optv2=document.getElementById("op2");
    optv2.setAttribute(value,initial.op2);
    let optv3=document.getElementById("op3");
    optv3.setAttribute(value,initial.op3); */    
    }
    else{
    document.querySelector("p").innerHTML=DataTypes[current].ques;
    document.querySelector(".options").innerHTML=`<input type="radio" id="op1" name="answer" value="${DataTypes[current].op1}" />
    <label for="op1" id="opl1">${DataTypes[current].op1}</label><br />
    <input type="radio" id="op2" name="answer" value="${DataTypes[current].op2}" />
    <label for="op2" id="opl2">${DataTypes[current].op2}</label><br />
    <input type="radio" id="op3" name="answer" value="${DataTypes[current].op3}" />
    <label for="op3" id="opl3">${DataTypes[current].op3}</label><br />`
   // document.querySelector("#opl1").innerHTML=DataTypes[current].op1;    
    //document.querySelector("#opl2").innerHTML=DataTypes[current].op2;    
    //document.querySelector("#opl3").innerHTML=DataTypes[current].op3;    
    //element. setAttribute(attributename, attributevalue);
    /*let optv1=document.getElementById("op1");
    optv1.setAttribute(value,DataTypes[current].op1);
    let optv2=document.getElementById("op2");
    optv2.setAttribute(value,DataTypes[current].op2);
    let optv3=document.getElementById("op3");
    optv3.setAttribute(value,DataTypes[current].op3);  
    }  
    let clear = document.getElementsByName("answer");
for(let i=0;i<DataTypes.length;i++)
    clear[i].checked = false;*/
   }
}
/*function highlight(){
   let op1check=document.getElementById("op1").checked;
   let op2check=document.getElementById("op1").checked;
   let op3check=document.getElementById("op1").checked;
   if(op1===true){
    document.querySelector("#op1").style.color="tomato";
   }
   if(op2===true){
    document.querySelector("#op2").style.color="tomato";
   }
   if(op3===true){
    document.querySelector("#op3").style.color="tomato";
   }
}*/
function confirm(){
   let radiobuttons=document.getElementsByName('answer');
   for(let radio of radiobuttons){
    if(radio.checked){
        let gender=document.querySelector('input[name=answer]:checked').value;
        let correct=0;
        for(let i=0;i<3;i++){
        if(gender==answers[i]){
            correct++;
        }
        }
        if(correct>0){
            userscore++;
            console.log(userscore);
        }
    }
   }
}
function reset(){
    if(userscore>=0)
    userscore--;
}
function submit(){
   // document.querySelector('.bts').innerHTML=`Thank you for attending you have scored ${userscore} marks`;
    if((userscore/totalscore)*100<50){
        document.querySelector('.bts').innerHTML=`<p>Thank you for attending you have scored ${userscore} marks</p>
        <p><monspaced>Keep Practicing</monospaced></p>`;
    }
    if((userscore/totalscore)*100<50){
        document.querySelector('.bts').innerHTML=`<p>Thank you for attending you have scored ${userscore} marks</p>
        <p><monspaced>KEEP PRACTICING</monospaced></p>`;
    }
    if((userscore/totalscore)*100>80){
        document.querySelector('.bts').innerHTML=`<p>Thank you for attending you have scored ${userscore} marks</p>
        <p><monspaced>EXCELLENT!</monospaced></p>`;
    }
    if((userscore/totalscore)*100>50&&(userscore/totalscore)*100<80){
        document.querySelector('.bts').innerHTML=`<p>Thank you for attending you have scored ${userscore} marks</p>
        <p><monspaced>GOOD JOB!</monospaced></p>`;
    }

}


