let btnaddstudent= document.getElementById('btnaddstudent')

btnaddstudent.addEventListener('click', () =>{
 let txtfname = document.getElementById("txtfname").value
 let txtlname = document.getElementById("txtlname").value
 let txtemail = document.getElementById("txtemail").value
 

  if(txtfname == "" || txtemail == "" ){
  	alert("Name and email be filled")
  }else{
  	
  		let emailid = txtemail.replace(/\./g, "_dot_").replace(/@/g, "_at_")
  		let status = "inactive"
  		let timenow = Date.now(); 
  		let role = "Student"
        let autopassword ="12345678"
        let user = firebase.auth().currentUser;
        let createdby  = user.email
  		firebase.auth().createUserWithEmailAndPassword(txtemail,autopassword)
  		.then((userCredential) =>{
  			firebase.database().ref('userDetails/' + emailid).set({
  				FirstName:txtfname,
  				LastName:txtlname,
  				Email: txtemail,
  				Status: status,
  				CreatedBy: createdby,
  				Role: role,
  				CreatedOn: timenow
  			})
  			alert("Account Created ")
  		})
  		.catch((error) => {
  			console.log(error)
  			alert(error.message)
  		})
  	
  }

}) 
function loaddata(){
    let tablebody = document.getElementById('tablebody')

    firebase.database().ref("userDetails").on("value",(snapshot)=> {
        tablebody.innerHTML =""

        snapshot.forEach((childSnapshot)=>{
            let data = childSnapshot.val()
            let key = childSnapshot.key

            if (data.Status=="active" && data.Role=="Student"){
                tablebody.innerHTML += `
                <td>${data.Email}</td>
                <td>${data.FirstName}</td>
                 <td>${data.LastName}</td>
                 <td>
                 <button class="btn btnred">SUSPEND STUDENT</button>
                </td>
              </tr>
                ` 
            }
        })
    })
}

loaddata();