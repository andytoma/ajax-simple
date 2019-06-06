function loadPage(n){
    // obiectul prin care comunicam
    var xhr = new XMLHttpRequest();
    // setam o adresa
    xhr.open("GET", `pages/${n}.html`);
    // incepe, shimbul de date
    xhr.send();

    //cind apare evenimentul "datele s-au incarcat"
    xhr.onload = function(){
        // raspunsul in partea serverului
        var content = document.getElementById('content');
            content.innerHTML = xhr.responseText
    }
    
}