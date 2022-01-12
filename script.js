$(document).ready(function () {
    $("#design-container").click(function () {
        $("#design-icon").toggle();
        $(".design").toggle();
    });
    $("#develop-container").click(function () {
        $("#develop-icon").toggle();
        $(".develop").toggle();
    });
    $("#product-container").click(function () {
        $("#product-icon").toggle();
        $(".product").toggle();
    });

});

function formvalidation(){
    let myName = document.myForm.inputmyName.value;
    let myEmail = document.myForm.inputmyEmail.value;
    let myMessage = document.myForm.inputmyMessage.value;

    if( myName == null || myName == ""){
        alert("Please enter your Name");
        return false;
    }else if(myEmail == null || myEmail == ""){
        alert("Please enter a valid email address");
        return false;
    }else if(myMessage == null || myMessage == ""){
        alert("Please enter a Message");
        return false;
    }else{
        alert("Welcome " + myName + " your message has been received and we will respond ASAP");
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> main
