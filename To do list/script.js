const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("kuch to likho ");
    }
    else{
        let li=document.createElement("li");li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
}

listcontainer.addEventListener("click",function(e){if(e.target.tagName==="Li"){
  e.target.calssList.toggle(this.ariaChecked); 
} else if(e.target.tagName==="SPAN"){
    e.target.parentElemnt.remove();
}

},false);