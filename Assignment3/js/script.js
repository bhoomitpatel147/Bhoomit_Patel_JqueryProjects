
  $(function () {
    ajaxMethod;
  });


// let getJsonObject = $.getJSON("team.json", function(data){

//     $.each(data.members, function(key, val){

//         $('div#team').append(`<div id="members">
//                               <h2 class="name">${val.name}</h2>
//                               <h5 class="position">${val.position}</h5>
//                               <p class="bio">${val.bio}</p>
//                               </div>`);
//     });

// });

let delay = 3000;

let ajaxMethod = $.ajax({
    method: "GET",
    url: "team.json",
    dataType: "json",
    data: "members",
    beforeSend: function(){
        $('div#team').append("Loading...");
    },
    success: function(data){
        setTimeout(function(){
            
            $('div#team').empty();
            $.each(data.members, function(key, val){

                $('div#team').append(`<div id="members">
                                    <h2 class="name">${val.name}</h2>
                                    <h5 class="position">${val.position}</h5>
                                    <p class="bio">${val.bio}</p>
                                    </div>`);
            });
            },delay)
    },
    error: function (request, status, error) {
       setTimeout(function(){
        $('div#team').empty();
        $('div#team').append('Error: ' + error);
    },delay);
    }
  });



