function changeTextInParagraph(){
    x = document.getElementsByTagName("p");
    for(var i = 0; i < x.length; i++){
        x[i].innerText="Change TEXT";
    }

}

function changeTextInHeader(){
    x = document.getElementsByTagName("h3");
    for(var i = 0; i < x.length; i++){
        x[i].innerText="NEW Change TEXT";
    }

}

function changeTextInMainHeader(){
    x = document.getElementsByTagName("h1");
    for(var i = 0; i < x.length; i++){
        x[i].innerText="NEW header TEXT";
    }

}

//let changeHeader = document.getElementById("myTitle");
//changeHeader.innerText = "New text in header";

let changeContentDiv = changeTextInHeader("h");
let changeContent = changeTextInParagraph("p");
let mainHeader = changeTextInMainHeader("h1");

