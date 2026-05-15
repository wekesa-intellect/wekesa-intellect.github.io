//total users count
let lbTotalStudents =document.getElementById('lbTotalStudents')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        total++
    })
    lbTotalStudents.innerHTML=total
})

//total course count
let lbTotalCourses =document.getElementById('lbTotalCourses')
firebase.database().ref("Courses").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        total++
    })
    lbTotalCourses.innerHTML=total
})

//total approvals
let lbTotalApprovals =document.getElementById('lbTotalApprovals')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if (data.Status == "inactive" && data.Role =="Lecturer"){
    total++
      }
    })
    lbTotalApprovals.innerHTML=total
})

//lecturer count
let lbTotalLecturers =document.getElementById('lbTotalLecturers')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
      if (data.Role == "Admin"){
    total++
      }
    })
    lbTotalLecturers.innerHTML=total
})
//count total number of students
let lbstudents =document.getElementById('lbstudents')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
      if (data.Role =="Student" && data.Status =="active"){
    total++
      }
    })
    lbstudents.innerHTML=total
})
//suspended students
let lbsuspendedstudents =document.getElementById('lbsuspendedstudents')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if (data.Status == "inactive" && data.Role =="Student"){
    total++
      }
    })
    lbsuspendedstudents.innerHTML=total
})
