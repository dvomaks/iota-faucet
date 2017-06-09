$(document).ready(function() {
    console.log("Document Ready");
    //Attach Eventlistener
    $( "#sendIotaBtn" ).click(function() {
        alert(getDataFromForm());
        console.log(getDataFromForm());
        //TODO Clean Input Data of unwanted Stuff?
        var address = getDataFromForm()


        //TODO Call The sendTransfer(address, value, messageTrytes)
        sendTransfer(getDataFromForm(), 1 , 1)

        //Add Response for Iota is Sending

    });

    //GetDataFromForm
    function getDataFromForm(){
        return $("#sendIotaInput").val();
    }




});
