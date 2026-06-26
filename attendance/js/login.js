let btnlogin = document.getElementById('btnlogin')
btnlogin.addEventListener("click",()=>{
    let txtusername =document.getElementById('txtusername').value
    let txtpass =document.getElementById('txtpass').value
    btnlogin.innerHTML="please wait..."
    if (txtusername=="" || txtpass=="" ){
        alert("please fill all details.")
    }
    else {
       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
       .then(() =>{
        return firebase.auth().signInWithEmailAndPassword(txtusername,txtpass)
       })
       .then((userCredential) =>{
        let emailid = txtusername.replace(/\./g, "_dot_").replace(/@/g, "_at_")
        return firebase.database().ref("userDetails/" + emailid).once("value")
       })
       .then((snapshot) =>{
        const userDetails = snapshot.val()
        const role = userDetails.Role.trim()
        const status =userDetails.Status
        
        if (status=="active"){
            if(role === "Admin"){
                //admin
                window.location.href ="dashboard.html"
            }
            //student
            else if (role === "Student"){
               window.location.href = "student portal.html"
               //lecturer
            }else if (role === "Lecturer"){
                window.location.href = "lec dashboard.html"
            }else{
                //active users with no roles 
                alert("No Role Added,Connect With Admin")
            }

        }else{
            //inactive account
            alert("Account Blocked ,Connect With Admin")
        }
       })
       .catch((error)=>{
        alert("Wrong Details")
        btnlogin.innerHTML="Log in"
       })
    }
})


