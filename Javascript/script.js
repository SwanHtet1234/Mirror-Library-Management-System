
function membermenu(event){
    const memberactionbtn = event.target;
    const memberactionbox = memberactionbtn.nextElementSibling;
    memberactionbox.classList.toggle("showaction");
}

function searchboxeffecton(){
    const searchbox = document.getElementById("searchbox");
    const on = searchbox.classList.contains("searchboxeffecton");
    const off = searchbox.classList.contains("searchboxeffectoff");
    if (!on){
        searchbox.classList.add("searchboxeffecton");
    }
    if (off){
        searchbox.classList.remove("searchboxeffectoff");
    }
    
    
}

function searchboxeffectoff(){
    const searchbox = document.getElementById("searchbox");
    const on = searchbox.classList.contains("searchboxeffecton");
    const off = searchbox.classList.contains("searchboxeffectoff");
    if (on){
        searchbox.classList.remove("searchboxeffecton");
    }
    if (!off){
        searchbox.classList.add("searchboxeffectoff");
    }
    
    
}

function showhidemultiplechoosebox(){
    const box = document.getElementById("multiplechoosebigform");
    const yes = box.classList.contains("showmultiplechoosebigform");
    if(yes){
        box.classList.remove("showmultiplechoosebigform");
        box.classList.add('hidemultiplechoosebigform');
    } else{
        box.classList.add("showmultiplechoosebigform");
        box.classList.remove('hidemultiplechoosebigform');
    }
    
}

function showhidemultiplechoosebox1(){
    const box = document.getElementById("multiplechoosebigform1");
    const yes = box.classList.contains("showmultiplechoosebigform");
    if(yes){
        box.classList.remove("showmultiplechoosebigform");
        box.classList.add('hidemultiplechoosebigform');
    } else{
        box.classList.add("showmultiplechoosebigform");
        box.classList.remove('hidemultiplechoosebigform');
    }
    
}

function showhidedeletebox(){
    const box = document.getElementById("deletebigbox");
    const yes = box.classList.contains("showmultiplechoosebigform");
    if(yes){
        box.classList.remove("showmultiplechoosebigform");
        box.classList.add('hidemultiplechoosebigform');
    } else{
        box.classList.add("showmultiplechoosebigform");
        box.classList.remove('hidemultiplechoosebigform');
    }
    
}

function showhideborrowbox(){
    const box = document.getElementById("borrowbigbox");
    const yes = box.classList.contains("showmultiplechoosebigform");
    if(yes){
        box.classList.remove("showmultiplechoosebigform");
        box.classList.add('hidemultiplechoosebigform');
    } else{
        box.classList.add("showmultiplechoosebigform");
        box.classList.remove('hidemultiplechoosebigform');
    }
    
}

function addauthor(){
    const valuetaker = document.querySelector(".multiplechooseform select").value;
    const genreboxchildren = document.querySelector(".authorshowbox").children;
    function checkchild(checktext){
        for (let i = 0; i < genreboxchildren.length; i++){
            if(checktext == genreboxchildren[i].textContent.trim()){
                return true;
            }
        }
        return false;
    }
    function addgenrechild(genre){
        if(checkchild(genre)){
            return;
        }else {
            const textnode = document.createTextNode(genre + ' ');
            node.appendChild(textnode);
            icon.setAttribute("onclick", "removeauthor(event)");
            node.appendChild(icon);
            genrebox.appendChild(node);
            document.getElementById("multiplechoosebigform").classList.remove("showmultiplechoosebigform");
            document.getElementById("multiplechoosebigform").classList.add("hidemultiplechoosebigform");
        }
    }
    const genrelist = document.querySelector(".multiplechooseform select").children;
    const genrebox = document.querySelector(".authorshowbox");
    const node = document.createElement("li");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
    if (valuetaker == 0){
        alert("You must choose valid author!");
    } else{
        let genreelement = genrelist[valuetaker].textContent;
        addgenrechild(genreelement);
        
    } 

}

function addgenre(){
    const valuetaker = document.querySelector(".multiplechooseform1 select").value;
    const genreboxchildren = document.querySelector(".authorshowbox1").children;
    function checkchild(checktext){
        for (let i = 0; i < genreboxchildren.length; i++){
            if(checktext == genreboxchildren[i].textContent.trim()){
                return true;
            }
        }
        return false;
    }
    function addgenrechild(genre){
        if(checkchild(genre)){
            return;
        }else {
            const textnode = document.createTextNode(genre + ' ');
            node.appendChild(textnode);
            icon.setAttribute("onclick", "removegenre(event)");
            node.appendChild(icon);
            genrebox.appendChild(node);
            document.getElementById("multiplechoosebigform1").classList.remove("showmultiplechoosebigform");
            document.getElementById("multiplechoosebigform1").classList.add("hidemultiplechoosebigform");
        }
    }
    const genrelist = document.querySelector(".multiplechooseform1 select").children;
    const genrebox = document.querySelector(".authorshowbox1");
    const node = document.createElement("li");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
    if (valuetaker == 0){
        alert("You must choose valid genre!");
    } else{
        let genreelement = genrelist[valuetaker].textContent;
        addgenrechild(genreelement);
        
    } 

}

function removeauthor(event){
    const currentelement = event.target.parentNode;
    currentelement.remove();
}

function removegenre(event){
    const currentelement = event.target.parentNode;
    currentelement.remove();
}

function hello(event){
    const titlevalue = document.getElementById("titlevalue").value;
    const authorvalue = document.getElementById("authorvalue").value;
    const genrevalue = document.getElementById("genrevalue").value;
    const statusvalue = document.getElementById("statusvalue").value;
    if(event.key == "Enter"){
        alert(titlevalue + authorvalue + genrevalue + statusvalue);
    }
}