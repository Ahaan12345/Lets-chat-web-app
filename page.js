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
room_name=localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
}