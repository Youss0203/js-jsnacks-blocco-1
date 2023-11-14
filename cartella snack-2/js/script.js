const containerElement = document.querySelector("div.container");


for(let i=0; i <= 6; i++){
    const myNewElement = document.createElement("div");
    myNewElement .classname=("card");

    const even = document.createElement('h2');
    even.innerHTML = i;

    myNewElement.appendChild(even);
    containerElement.appendChild(myNewElement);

    if(i / 2){
        even.style.color="green";
    }else if(!i / 2){
        even.style.color="yellow"
    }


}