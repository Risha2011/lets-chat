// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCbq2Ev0y-acC-pDXYtFaY3Q_waJnU-FSk",
  authDomain: "lets-chat-c9592.firebaseapp.com",
  projectId: "lets-chat-c9592",
  storageBucket: "lets-chat-c9592.appspot.com",
  messagingSenderId: "230996788602",
  appId: "1:230996788602:web:e4749e634d258a2fce42c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}