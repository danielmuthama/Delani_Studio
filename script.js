$(document).ready(function () {
    $("#design-cont").click(function () {
        $("#design-img").toggle();
        $(".design").toggle();
    });
    $("#develop-cont").click(function () {
        $("#develop-img").toggle();
        $(".develop").toggle();
    });
    $("#product-cont").click(function () {
        $("#product-img").toggle();
        $(".product").toggle();
    });

    $("#project-a, #project-b, #project-c, #project-d, #project-e, #project-f, #project-g, #project-h").hover(function () {
        $(this).find(".project").fadeToggle("10");
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
}
