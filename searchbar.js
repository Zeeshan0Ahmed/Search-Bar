function searchBar(){
    const input = document.querySelector(".input").value.toUpperCase();
    let list = document.querySelectorAll("li");
    list = Array.from(list);
    for(let li of list){
        if(li.innerHTML.toUpperCase().includes(input)){
            li.style.display = "list-item"
        }else{
            li.style.display = "none"
        }
    }
}