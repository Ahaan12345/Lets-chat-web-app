var firebaseConfig = {
    apiKey: "AIzaSyCekRDo4BZRnY7ct36HWenU3qa_s2b0bH0",
    authDomain: "kwitter-web-app-990d5.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-990d5-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-990d5",
    storageBucket: "kwitter-web-app-990d5.appspot.com",
    messagingSenderId: "783564324073",
    appId: "1:783564324073:web:64bb443d7aa6cf63954478",
    measurementId: "G-SL6CMKHVDV"
  };
  
firebase.initializeApp(firebaseConfig)

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}

getData();


function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="page.html";
}