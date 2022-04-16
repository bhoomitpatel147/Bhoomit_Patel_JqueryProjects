class Modal {
    // $window: Object;
    // $modal;
    constructor() {
        this.$window = $(window);
        this.$modal = $(`<div class="modal"/> <h1 style="text-align: center; background-color: brown;  margin: 0%;">Bhoomit Kiritbhai Patel</h1>`);
        this.$content = $('<div class="modal-content"/>');
        this.$close = $(`<button role="button" style="text-align: center; margin: 0 auto; cursor: pointer; display: block; padding: 10px; font-size:1.5em;" class="modal-close">Close</button></modal>`);
        this.$modal.append(this.$content, this.$close);
        /*
        <div class="modal">
            <div class="modal-content">
            </div>
            <button class="modal-close">close</button>
        </div>
        */
        this.$close.on('click', (e) => {
            e.preventDefault();
            this.close();
        });
    }

    center() { // function center ()
        // Distance from top and left to center of modal
       
        var top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
        var left = Math.max(this.$window.width() - this.$modal.outerWidth(), 0) / 2;
        // Set CSS for the modal
     
        this.$modal.css({
            top: top + this.$window.scrollTop(),
            left: left + this.$window.scrollLeft()
        });
    }

    open(settings) {
        this.$content.empty().append(settings.content);
        this.$modal.css({ // Dimensions
            width: settings.width || 'auto', // Set width
            height: settings.height || 'auto' // Set height
        }).appendTo('body'); // Add to page
        this.center(); // Call center() again
        this.$window.on('resize', this.center); // On window resize
    }

    close() {
        // Remove content from the modal window
        this.$content.empty();
        // Remove modal window from the page
        this.$modal.detach();
        // Remove event handler
        this.$window.off('resize', () => this.center());
    }
}


