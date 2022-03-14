$(function () {

  $('ul#1 .accordion-control').on('click', function (e) {
    e.preventDefault();

    $(this).next('.accordion-panel').not(':animated').slideToggle();
    if ($("ul#1 .accordion-panel").is(":visible")) {
      // toggled down
      $('ul#1 .accordion-panel').not(':animated').slideUp("slow");
    }


  });

  $('ul#2 .accordion-control').on('click', function (e) {
    e.preventDefault();

    $(this).next('.accordion-panel').not(':animated').slideToggle();
    if ($("ul#2 .accordion-panel").is(":visible")) {
      // toggled down
      $('ul#2 .accordion-panel').not(':animated').slideUp("slow");
    }


  });

  $(".tab-list").each(function () {
    // Find lists of tabs
    var $this = $(this); // Store this list
    var $tab = $this.find("li.active"); // Get the active li
    var $link = $tab.find("a"); // Get its link
    var $panel = $($link.attr("href")); // Get active panel
    $this.on("click", ".tab-control", function (e) {
      // Click tab
      e.preventDefault(); // Prevent link
      var $link = $(this); // Store current link
      var id = this.hash; // Get clicked tab
      if (id && !$link.parent().is(".active")) {
        // If not active
        $panel.removeClass("active"); // Make panel and
        $tab.removeClass("active"); // tab inactive
        $panel = $(id).addClass("active"); // Make new panel and
        $tab = $link.parent().addClass("active"); // tab active
      }
    });
  });


});