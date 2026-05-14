let btnreset = document.getElementById ('btnreset')
btnreset.addEventListener("click", () =>{
    let txtemail =document.getElementById('txtemail').value
    auth.sendPasswordResetEmail(txtemail)
    .then(() =>{
        alert("reset link has been send (If Your School Email Exist In Our Database)")
            txtemail.value =""
    })
    .catch((error)=>{
        alert("Error Message")
        console.log(error)
        txtemail.value = ""
    })
})