window.addEventListener("DOMContentLoaded",()=>{
    let casillaTd = document.querySelectorAll('td');

    casillaTd.forEach(element => {
        element.style.backgroundColor = "gray"
        element.addEventListener("click", ()=>{

           if (element.style.backgroundColor == "gray") {
            element.style.backgroundColor = "red"
            console.log("gray")
           } else if (element.style.backgroundColor == "red") {
            element.style.backgroundColor = "gray"
            
           }
        })
    });


})