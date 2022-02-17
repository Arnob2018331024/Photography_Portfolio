let attachPics=()=>{
    const body=document.querySelector('#photos');
    var i=1;
    while(i<=26){
        body.innerHTML+=`<img src=${i}.jpg class="column">`;
        i++;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {attachPics();});
