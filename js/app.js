$(function() {
    /* Filter */
   let filter = $("[data-filter]")
    
    filter.on("click", function(event) {
        event.preventDefault();
        let category = $(this).data('filter')

        if (category == 'all') {
            $("[data-category]").removeClass('hide');
        } 
        else {
            $("[data-category]").each(function() {
                let temp = $(this).data('category')

                if (category != temp) {
                    $(this).addClass('hide')
                } else {
                    $(this).removeClass('hide')
                }
            });
        }
    });

    /* Modal */
    const modal = $("[data-modal]")
    const close = $("[data-close]")

    modal.on("click", function(event) {
        event.preventDefault();
        let modalId = $(this).data('modal')

        $(modalId).addClass('show')
        $("body").addClass('no-scroll')
    });

    close.on("click", function(event) {
        event.preventDefault();
        
        let modalParent = $(this).parents('.modal')
        modalParent.removeClass('show')
        $("body").removeClass('no-scroll')
    });
 

    $(".modal").on("click", function(event) {
   
        $(this).removeClass('show')
        $("body").removeClass('no-scroll')
    });

    $(".modal_dialog").on("click", function(event) {
        event.stopPropagation();
    });


});