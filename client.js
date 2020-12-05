function getCounter(){
    $.ajax({
        url : "http://localhost:3000/getCounter",
        type: 'GET',
        success: function(result) {
            // Show value on html
            document.getElementById("counterValue").innerHTML = result.data
        },
        error: function(err){
        console.log("error")       
        }
    })
}

function postCounter(){
    //Call WEB SREVICE
    $.ajax({
        url : "http://localhost:3000/postCounter",
        type: 'POST',
        success: function(result) {
        },
        error: function(err){
        console.log("error")       
        }
    })
}