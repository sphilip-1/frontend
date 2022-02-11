
$(function() {
// CREATE/POST
   $('#register').on('submit', function(event) {
       event.preventDefault(); // to not follow the event, blocking post method of the submitting form
      
       // console.log('succ');

       // retrieve data from text inputs
       var firstname = $('#firstname'); 
       var lastname = $('#lastname');
       var email = $('#email');
       var password = $('#password');
      
       //ajax call
       $.ajax({
           url: 'https://backendminerva.herokuapp.com/account',
           method: 'POST',
           contentType: 'application/json',
           data: JSON.stringify({   fname: firstname.val(),   // values that need to be posted
                                    lname: lastname.val(),
                                    mail: email.val(),
                                    pass: password.val()
            }),
           success: function(response) {  // "response" is what we get from the back-end, it could be a JSON
           // alert("Register succeded!");
            
            
            
            
            
           }
       });
   });


   $('#signin').on('submit', function(event) {
      event.preventDefault(); // to not follow the event, blocking post method of the submitting form
     
      // console.log('succ');

      // retrieve data from text inputs
      
      var email = $('#email');
      var password = $('#password');
     
      //ajax call
      $.ajax({
          url: 'http://localhost:3000/login',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({   
                                   mail: email.val(), // values that need to be posted
                                   pass: password.val()
           }),
          success: function(response) {  // "response" is what we get from the back-end, it could be a JSON
          // alert("Register succeded!");
           
           var res = response.x;
           if(res != '0'){
               sessionStorage.setItem("SessionName",  response.x); // setting session variable into memory
               alert("login success");
              } 
           else
               alert("wrong email or password"); // printing the value for testing
           
           
          }
      });
  });
   
});
