$(function () {
    $('#photo-viewer').show().on('click', '.photo-box', function (e) {
        e.preventDefault();
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
    
        //modal code goes here
  
      
           //call the tabbed, or the accordion, or the modal
    (function (someParameter) {
        console.log(someParameter);
        // Remove modal content from page and store in $content
         var $content_ = $content.detach();
        var modal = new Modal();
        // Click handler calls open() method of modal object
      if($('.photo-box').attr('href') !== "#"){
            modal.open({
                content: $content_,
                width: 800,
                height: 450
            });
        }
    })("ValuePassedIn");
        
    });
});
