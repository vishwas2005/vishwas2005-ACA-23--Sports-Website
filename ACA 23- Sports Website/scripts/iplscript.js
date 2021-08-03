var firebaseConfig = {
  apiKey: "AIzaSyDVYYm7wMQSzeRK_A8FhilVsn_dVMsbx5E",
  authDomain: "my-project-5aec1.firebaseapp.com",
  projectId: "my-project-5aec1",
  storageBucket: "my-project-5aec1.appspot.com",
  messagingSenderId: "720199751384",
  appId: "1:720199751384:web:19bc0efff1fbb0efeca9ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('datavalue').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
}
    function getInputVal(id){
    return document.getElementById(id).value;
}

function readResults(year){
    
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     var finalranks=ranks.toString().split(',');
     document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[0];
     document.getElementById("result2").innerHTML ="<br > 2. " +finalranks[1];
     document.getElementById("result3").innerHTML ="<br > 3. " +finalranks[2];
     document.getElementById("result4").innerHTML ="<br > 4. " +finalranks[3];
     document.getElementById("result5").innerHTML ="<br > 5. " +finalranks[4];
     document.getElementById("result6").innerHTML ="<br > 6. " +finalranks[5];
     document.getElementById("result7").innerHTML ="<br > 7. " +finalranks[6];
     document.getElementById("result8").innerHTML ="<br > 8. " +finalranks[7];

    
})
}
  
 
 