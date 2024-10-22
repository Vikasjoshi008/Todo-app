let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function () {
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");

    item.appendChild(delbtn);
});

ul.addEventListener("click", function (event) {
    let lis=document.querySelectorAll("li")
    if(event.target.nodeName=="BUTTON") {
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log(listitem,"deleted");
    }
});