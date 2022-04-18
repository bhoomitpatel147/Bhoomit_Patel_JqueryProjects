$(function () {
   
      //  var form = $('form');  // The form
        var username = document.getElementById('username');     // Password input
        var submit = document.getElementById('submit');  // Submit button
        var password = document.getElementById('pwd');
        var countryCode = document.querySelector('select');
        var passwordConfirm = document.getElementById('conf-password');
        
      
        var submitted = false;                            // Has form been submitted?
        submit.disabled = true;                           // Disable submit button
        submit.className = 'disabled';                    // Style submit button
       
         addEvent(username, 'input', function (e) {         // On input of password
          var target = e.target || e.srcElement;          // Target of event
          submit.disabled = submitted || !target.value;   // Set disabled property
          // If form has been submitted or pwd has no value set CSS to disabled
          submit.className = (submit.disabled) ? 'disabled' : 'enabled';
        
          // return submit.className;
          //console.log(submit.className);
        });
         

           

              addEvent(form, 'submit', function (e) {             // When user submits form
                  e.preventDefault();                              // Stop it being sent
                  var elements = this.elements;                    // Get all form elements
                  var username = elements.username.value;          // Select username entered
                  var msg = `Welcome ${username}! The country code you selected is ${countryCode.value}`;            // Create welcome message
                  document.getElementById('main').textContent = msg; // Write welcome message
              });
           
              
            //  form.change(function(){
                                            
                  
            //       if( username.val().length > 0 && checkBox.is(":checked") && country.val() != "none")
            //       {
            //         submitBtn.removeAttr('disabled');
            //         submitBtn.attr('disabled',false);
            //       }
            //       else{
            //         submitBtn.attr('disabled',true);
            //         submitBtn.addClass('disabled');   
            //       }
            //   }); 
    


  });