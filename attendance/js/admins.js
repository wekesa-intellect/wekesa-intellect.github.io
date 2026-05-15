let btnaddstudent= document.getElementById('btnaddstudent')

btnaddadmin.addEventListener('click', () =>{
 let txtfname = document.getElementById("txtfname").value
 let txtlname = document.getElementById("txtlname").value
 let txtemail = document.getElementById("txtemail").value
 

  if(txtfname == "" || txtemail == "" ){
  	alert("Name and email be filled")
  }else{
  	
  		let emailid = txtemail.replace(/\./g, "_dot_").replace(/@/g, "_at_")
  		let status = "inactive"
  		let timenow = Date.now(); 
  		let role = "Admin"
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

            if (data.Status=="active" && data.Role=="Admin"){
                tablebody.innerHTML += `
                <td>${data.Email}</td>
                <td>${data.FirstName}</td>
                 <td>${data.LastName}</td>
                 <td>
                 <button class="btn btnred" onclick="suspendadmin('${key}')">SUSPEND ADMIN</button>
                </td>
              </tr>
                ` 
            }
        })
    })
}

loaddata();

function suspendadmin(adminid){
    let confirmSuspend = confirm("Are You Sure You Want To Suspend This Admin ?")
    if(!confirmSuspend) return;
    firebase.database().ref("userDetails" + adminid).update({
        Status: "inactive"
    })
    .then(()=>{
        alert("Admin Suspended")
    })
    .then((error)=>{
        alert("Error While Suspending")
    })

}

// activation 


function loaddatainactive(){
    let tablebody = document.getElementById('tablebodyinactive')

    firebase.database().ref("userDetails").on("value",(snapshot) =>{
        tablebody.innerHTML = "" 

        snapshot.forEach((childSnapshot) =>{
            let data = childSnapshot.val()
            let key = childSnapshot.key

            if(data.Status == "inactive" && data.Role == "Admin"){
                tablebody.innerHTML += `
                    <tr>
                     <td>${data.Email}</td>
                     <td>${data.FirstName}</td>
                     <td>${data.LastName}</td>
                     <td>
                      <button class="btn btngreen" onclick="activateadmin('${key}')" > Activate</button>
                      </td>
                    </tr>
                `
            }
        })

    })
}

loaddatainactive();


function activateadmin(adminid){
    let confirmSuspend = confirm("Are you sure you want to activate this Admin ?")
    if(!confirmSuspend) return;
    firebase.database().ref("userDetails/" + adminid).update({
        Status:"active"
    })
    .then(() =>{
        alert("Admin activated")
    })
    .catch((error) =>{
        alert("Error while activating")
    })

}
