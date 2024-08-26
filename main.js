function verify () {
    const password = document.querySelector('input[name=password]');
    const confirm_pass = document.querySelector('input[name=confirm_pass]');
    
    const message = document.querySelector('#message');
    
    if (confirm_pass.value === password.value) {
        password.style.borderColor = '#dfdfdf';
        confirm_pass.style.borderColor = '#dfdfdf';
        message.textContent = '';
    }  
    else {
        password.style.borderColor = '#ff0000';
        confirm_pass.style.borderColor = '#ff0000';
        message.textContent = '*Password do not match';
    }
}


const image = document.querySelector(".side-image");

image.style.backgroundImage = "url(/images/warion-taipei-8QIAj5tHDdc-unsplash.jpg)";
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundSize = "cover";
// image.style.objectFit = "cover";
// image.style.width = "45%";


const formInfo = document.querySelector("#form-info");

if (formInfo.addEventListener) {
    formInfo.addEventListener("submit", function(event) {
        event.preventDefault();
        window.history.back();
    }, true);
}
else {
    formInfo.attachEvent("onsubmit", function(event){
        event.preventDefault();
        window.history.back();
    });
}
