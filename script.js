
$(document).ready(function() {
$(".design-icon").click(function() {
    $('.design-icon').hide();
    $('.design-p').show();
});​

$(".design-p").click(function() {
    $('.design-p').hide();
    $('.design-icon').show();
});​

$(".dev-icon").click(function() {
    $('.dev-icon').hide();
    $('.dev-p').show();
});
$(".dev-p").click(function() {
    $('.dev-p').hide();
    $('.dev-icon').show();
});​

$(".product-icon").click(function() {
    $('.product-icon').hide();
    $('.product-p').show();
});​

$(".product-p").click(function() {
    $('.product-icon').hide();
    $('.product-p').show();
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
