var config = {
  apiKey: "AIzaSyCJZTFC8-0nwuM3JDX60_yMECWoH1scOSk",
  authDomain: "rps-multiplayer-50eff.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-50eff.firebaseio.com",
  projectId: "rps-multiplayer-50eff",
  storageBucket: "",
  messagingSenderId: "668475065594"
};
  firebase.initializeApp(config);
  var database=firebase.database() 
  choice = ""
  $("#register").on("click", function(){
    event.preventDefault()

    firebase.auth().signInAnonymously()
  
  })
  var name = $("#signin-input").val()
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var isAnonymous = user.isAnonymous; 
      var uid = user.uid;
      console.log("user signed in")
      console.log(user)
      // var name = $("#signin-input").val
      // database.ref().push({
      //   name: name,
      //   id: uid
      
    }else{
      console.log("user is not signed on")
    }
  }) 

  $("button").on("click", function() {
    $(".user-choice").hide()
   
   choice = $(this).val()
    console.log(choice)
    database.ref().push({
         choice: choice, 
         dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
 })

  $("#signout").on("click", function(){
    firebase.auth().signOut().then(function(){
      console.log("signed out")
    }, function(error)  {
      console.error("sign out error', error")
    }
  )
  })

  // var user = firebase.auth().currentUser;
  // console.log(user)
  // var name = $("#signin-input").val() 
   




database.ref().orderByChild("dateAdded").limitToFirst(2).on("child_added", function(snapshot) {
  var sv = snapshot.val()
  $("#choice").append(sv.choice)
}, function(errorObject) {

    console.log("Errors handled: " + errorObject.code);

  });
 
  


//Could not get the user to sign on and add data to each. 