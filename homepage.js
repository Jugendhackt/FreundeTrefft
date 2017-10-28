// Initialize Firebase

var config = {
    apiKey: "AIzaSyAHzCjUX8llu37wg-OTb5VDvH2YfNWYUKc",
    authDomain: "jagenhackt17tokio.firebaseapp.com",
    databaseURL: "https://jagenhackt17tokio.firebaseio.com",
    projectId: "jagenhackt17tokio",
    storageBucket: "jagenhackt17tokio.appspot.com",
    messagingSenderId: "233771707999"
};
firebase.initializeApp(config);
var myFirebase = firebase.database().ref();
var questions = firebase.database().ref("questions");

var users = myFirebase.child("users");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.

var submitUser = function () {
    var Mail = $("#user_email").val();
    var Name = $("#user_name").val();
    var PW = $("#user_pw").val();

    users.push({
        "Email": Mail,
        "User Name": Name,
        "PW":PW,
    });
}

$(window).load(function () {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $("#JustinForm").submit(submitUser);
});


// Get the single most recent recommendation from the database and
// update the table with its values. This is called every time the child_added
// event is triggered on the questions Firebase reference, which means
// that this will update EVEN IF you don't refresh the page. Magic.

questions.limitToLast(1).on('child_added', function(childSnapshot) {
    // Get the recommendation data from the most recent snapshot of data
    // added to the questions list in Firebase
    question = childSnapshot.val();

});