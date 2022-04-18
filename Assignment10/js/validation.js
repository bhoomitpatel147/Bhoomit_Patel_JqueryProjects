$(function(){
    let form = $('form');
    let username = $("#username");
    let password = $('#pwd');
    let confPassword = $('#conf-password')
    let submit = $('submit');
    var submitted = false;                            // Has form been submitted?
        submit.disabled = true;                           // Disable submit button
        submit.className = 'disabled'; 


    form.change(function(e){
        //messageDisplay.hide();                                    
          
        if(username.val().length > 3){
            var target = e.target || e.srcElement;          // Target of event
            submit.disabled = submitted || !target.value;
            submit.className = (submit.disabled) ? 'disabled' : 'enabled';
    
        }
        else{
       submit.className = 'disabled'; 

        }
     
      });
});