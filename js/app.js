$(function() {

    var work = $("[data-category]")
    var article = $(".articles-col")
    var j = 1;

    // Set number to works 
    work.each(function() {
        $(this).attr("number", j);
        j++
    });

    j = 1;
    article.each(function() {
        $(this).attr("number", j);
        j++
    });
    

    /* Burger Menu*/
    let i = 0;
    const burger = $(".burger")

    burger.on("click", function() {
        if (i % 2 == 0) {        
            $(".burger_close").removeClass('hide')
            $(".burger_open").addClass('hide')
            $(".navigation").css("display", "flex")

        } else {
            $(".burger_open").removeClass('hide')
            $(".burger_close").addClass('hide')
            $(".navigation").css("display", "none")
        }
        i++;
    });


    /* Filter */
   let filter = $("[data-filter]")
    filter.on("click", function(event) {
        event.preventDefault();
        let category = $(this).data('filter')

        if (category == 'all') {
            $("[data-category]").removeClass('hide');
            element.textContent = 'SHOW LESS ITEMS'
        } 
        else {
            element.textContent = 'SHOW ALL ITEMS'
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

    /* LoadMoreWork */
    const load = $("#load")
    const element = document.getElementById('load')

    load.on("click", function() {
        if (element.textContent == 'SHOW ALL ITEMS') {
            AllShow();
            element.textContent = 'SHOW LESS ITEMS'
        }
        else if (element.textContent == 'LOAD MORE ITEMS') {
            /* WorkShow(); */
            AllShow();
            element.textContent = 'SHOW LESS ITEMS'
        }
        else {
            WorkHide();
            element.textContent = 'LOAD MORE ITEMS'
        }
    });


    /* LoadMorePost */
    const news = $("[data-news]")
    const see_more = $("#see-more")
    const see = document.getElementById('see-more')

    see_more.on("click", function() {
        if (see.textContent == 'See more posts') {
            ShowNews();
            see.textContent = 'See less posts'
        } else {
            HideNews();
            see.textContent = 'See more posts'
        }
    })


    /* Modal */
    const modal = $("[data-modal]")
    const close = $("[data-close]")
    let modalId, workId;

    modal.on("click", function(event) {
       
        console.log("click to modal")
        event.preventDefault();
        event.stopPropagation()
    
        modalId = $(this).data('modal') 
        workId = $(this).attr('number')

        console.log(modalId)
        console.log($(this).attr('number'))

        $(modalId).addClass('show')
        $("body").addClass('no-scroll')

//----------------SLIDER---------------------
        const left = $(".modal-work_btn--left")
        const right = $(".modal-work_btn--right")
        let counter = 0

        left.off().on("click", function(){
            workId--
            ShowNextModalWork()
            
        })

        right.off().on("click", function(){
            workId++
            ShowNextModalWork()
        })
//----------------SLIDER---------------------

        const hire = $('#hire-me')
        hire.on("click", function(){
            $("body").addClass('no-scroll')
            $("#modal_hireme").addClass('show')
        })
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


    function ShowNextModalWork() {
        if (workId <= 0) {
            workId = work.length
        }
        else if (workId > work.length) {
            workId = 1
        }
        
        let nextModal = $("[number='"+ workId +"']").data('modal')
        
        console.log("showed:" + nextModal + "workID "+ workId) 
        $(nextModal).addClass('show')
        counter = 0

        if (nextModal != modalId)
            $(modalId).removeClass('show')
        modalId = nextModal
    }
    
    function WorkHide() {
        modal.each(function() {
            var modal = $(this).data('modal');
            if (modal != '#modal_project-fpv' &&  modal != '#modal_project-power' && modal != '#modal_project-mavic') {
                $(this).addClass('hide')
            }
        });
    }

    function AllShow() {
        modal.removeClass('hide')
    }

    function HideNews() {
        news.each(function() {
            if ($(this).data('news') == '#news_project') {
                $(this).addClass('hide')
            }
        })
    }

    function ShowNews() {
        news.removeClass('hide')
    }
});