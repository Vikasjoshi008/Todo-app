let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


 btn.addEventListener("click", (addtask) => {
    let item=document.createElement("li");
    item.innerText=inp.value;

    function empty() {
        for(let i=0; i<inp.value; i++){
            inp.value=" ";
        }
        if(inp.value) {
            ul.appendChild(item);
        }else {
            ul.removeChild(item);
        }
    }
    empty();

    let delbtn=document.createElement("button");
    delbtn.style.color="red";
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
});

ul.addEventListener("click", function (event) {
    let lis=document.querySelectorAll("li")
    if(event.target.nodeName=="BUTTON") {
        let listitem=event.target.parentElement;
        listitem.remove();
        console.dir(listitem,"deleted");
    }
});