const firebaseConfig = {
  apiKey: "AIzaSyDhmi12NS4zXbZW7lSFlJMH5ya75g10HV8",
  authDomain: "eclass-attendance-system.firebaseapp.com",
  databaseURL: "https://eclass-attendance-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eclass-attendance-system",
  storageBucket: "eclass-attendance-system.firebasestorage.app",
  messagingSenderId: "325877487438",
  appId: "1:325877487438:web:ed96220b74a344128af01f",
  measurementId: "G-7TWGMJ0NK9"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
console.log ('connected to firebase')
function logout(){
  //body...
  firebase.auth().signOut().then(function(){
    window.location.href ="index.html"
  }).catch ((error)=>{
    alert("Error While you try to Logout")
  })
}
