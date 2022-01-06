jQuery(".hide-design-image").click(function(){
    jQuery(".design-icon").toggle();
    jQuery(".hide-design").toggle();
})

    jQuery(".hide-development-image").click(function(){
    jQuery(".dev-icon").toggle();
    jQuery(".hide2").toggle();
})


    jQuery("#product-section").click(function(){
    jQuery("#show-product").toggle();
    jQuery(".hide-product-image").toggle();
});
function formvalidation(){
    let myName = document.myForm.inputmyName.value;
    let myEmail = document.myForm.inputmyEmail.value;
    let myMessage = document.myForm.inputmyMessage.value;

    if( myName == null || myName == ""){
        alert("Please enter your Name");
        return false;
    }else if(myEmail == null || myEmail == ""){
        alert("Please a valid email address");
        return false;
    }else if(myMessage == null || myMessage == ""){
        alert("Please enter a Message");
        return false;
    }else{
        alert("Welcome " + myName + " your message has been received and we will respond ASAP");
    }
}

    