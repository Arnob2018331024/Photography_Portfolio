window.addEventListener('DOMContentLoaded',()=>{
    let i=1;
    let setPic=()=>{
    let photoDiv=document.querySelector("#photo");
    photoDiv.innerHTML=`<img id="image" src="${i}.jpg">`;
    }
    setPic();
    let upper=()=>{
    i=i%26+1;
    setPic();
    };

    let lower=()=>{
        i--;
        if(i==0)
            i=26;
        setPic();
    };
    document.querySelector("#upper_button").addEventListener('click',()=>{
        upper();
    })

    document.querySelector("#lower_button").addEventListener('click',()=>{
        lower();
    })
})