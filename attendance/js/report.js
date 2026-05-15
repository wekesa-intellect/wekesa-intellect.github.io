
let totaladmins = 0
let totalstudents = 0
firebase.database().ref("userDetails").once("value",function(snapshot){

    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
      if (data.Role =="Admin"){
    totaladmins++
    
      } else {
        totalstudents++
       
      }

    })
    //console.log (totalstudents)
    //console.log (totaladmins)

    //display total count
    drawbargraph()

})
function drawbargraph(){
    const canvasforbargraph = document.getElementById('mybargraph')
    new Chart(canvasforbargraph, {
        type : 'bar',
        data :{
            labels : ['Admins','Students'],
            datasets : [{
                label : "System users",
                data: [totaladmins, totalstudents],
                borderWidth:1
            }]
        },
        options:{
            responsive: true,
            scale:{
                y:{
                    beginAtZero:true
                }
            }
        }

    })
}
let activeCourses = 0
let inactiveCourses = 0
//course pie 
firebase.database().ref('Courses').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status == "active") {
            activeCourses ++
        }
        if (data.Status == "inactive") {
            inactiveCourses ++
        }
    })
    drawCourseBarGraph()
})


function drawCourseBarGraph() {
    const canvasbarGraph = document.getElementById('mypiechart');
        new Chart(canvasbarGraph, {
            type: 'pie',
            data: {
                labels: ['Active Courses', 'Inactive Courses'],
                datasets: [{
                    label: 'Courses',
                    data: [activeCourses, inactiveCourses],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
}
//lec doughnut

let activeLecturers = 0
let inactiveLecturers = 0

firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
      if (data.Role == "Admin" && data.Status == "active"){
        activeLecturers++
      }
      else if (data.Role == "Admin" && data.Status == "inactive"){
        inactiveLecturers++
      }
    })
    drawLecturersDoughnut()
})



function drawLecturersDoughnut() {
    const canvasbarGraph = document.getElementById('mydoughnut');
        new Chart(canvasbarGraph, {
            type: 'doughnut',
            data: {
                labels: ['Active Lecturers', 'Inactive Lecturers'],
                datasets: [{
                    label: 'Courses',
                    data: [activeLecturers, inactiveLecturers],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
}
//students count with bubble chart
let activeStudents = 0
let inactiveStudents = 0

firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if (data.Role =="Student" && data.Status =="active"){
            activeStudents++
        }else if (data.Role =="Student" && data.Status =="inactive"){
            inactiveStudents++
        }
    })
    drawStudentsChart()
})


function drawStudentsChart() {
    const canvasbarGraph = document.getElementById('mybubblechart');
        new Chart(canvasbarGraph, {
            type: 'radar',
            data: {
                labels: ['Active Students', 'Inactive Students'],
                datasets: [{
                    label: 'Courses',
                    data: [activeStudents, inactiveStudents],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
}