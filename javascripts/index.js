document. addEventListener('DOMContentLoaded', function() {
    attachClickEventToButton();
})

function attachClickEventToButton(){
    //first we have to find the button that we want to attach the event to
 //   const button = document.getElementById('color-button');
//    const button = document.querySelector('button')
    GamepadButton.addEventListener('click', changeToBlue);
}

function changeToBlue(event) {
    console.log(event);
}