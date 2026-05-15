//total users count
let lbTotalStudents =document.getElementById('lbTotalStudents')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total++
    })
    lbTotalStudents.innerHTML=total
})

//total course count
let lbTotalCourses =document.getElementById('lbTotalCourses')
firebase.database().ref("Courses").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total++
    })
    lbTotalCourses.innerHTML=total
})

//total approvals
let lbTotalApprovals =document.getElementById('lbTotalApprovals')
firebase.database().ref("Status").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total++
    })
    lbTotalApprovals.innerHTML=total
})

//lecturer count
let lbTotalApprovals =document.getElementById('lbTotalApprovals')
firebase.database().ref("Status").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total++
    })
    lbTotalApprovals.innerHTML=total
})
