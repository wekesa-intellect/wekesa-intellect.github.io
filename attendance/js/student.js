let btnaddstudent= document.getElementById('btnaddstudent')

btnaddstudent.addEventListener('click', () =>{
 let txtfname = document.getElementById("txtfname").value
 let txtlnametxtlname = document.getElementById("txtlname").value
 let txtemail = document.getElementById("txtemail").value
 let txtpass = document.getElementById("txtpass").value

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
  		firebase.auth().createUserWithEmailAndPassword(txtemail,txtautopassword)
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