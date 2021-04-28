$( document ).ready(function() {

    // Table checkbox

    jQuery(function($) {
        $('body').on('click', '#selectlog', function() {
            $('.singlelog').prop('checked', this.checked);
        });

        $('body').on('click', '.singlelog', function() {
            if($('.singlelog').length == $('.singlelog:checked').length) {
                $('#selectlog').prop('checked', true);
            } else {
                $("#selectlog").prop('checked', false);
            }

        });
    });

    jQuery(function($) {
        $('body').on('click', '#selectmeeting', function() {
            $('.singlemeeting').prop('checked', this.checked);
        });

        $('body').on('click', '.singlemeeting', function() {
            if($('.singlemeeting').length == $('.singlemeeting:checked').length) {
                $('#selectmeeting').prop('checked', true);
            } else {
                $("#selectmeeting").prop('checked', false);
            }

        });
    });

    // Availability popup

    $('.header .welcome').on('click', function () {
       $('.availability-popup').toggleClass('active');
       $(this).toggleClass('active');
    });

    // Rating

    var $star_rating = $('.star-rating .fa-star');

    $star_rating.mouseover(function() {
        var rate = parseInt($(this).data('rating'));
        $('input.rating-value').val(rate);
        $star_rating.each(function() {
            if (rate >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('checked').addClass('checked');
            } else {
                return $(this).removeClass('checked');
            }
        });
    });

    // Table call log more

    $('.table-call-log tr').on('click', function () {
       $('.table-call-log').hide();
       $('.more').show();
    });

    $('.back-table').on('click', function () {
        $('.table-call-log').show();
        $('.more').hide();
    });

    // Add tags



    $(".add-tag").click(function(){
        var getVal = $(".input-add-tag").val();
        $(".tags-list").append('<li class="tag-item">' + getVal + '<a class="remove-tag" href="#/"><img src="img/icon-tag-close.svg" alt="Icon" /></a></li>');
        $(".input-add-tag").val('');
    });

    $('.tag-item a').on('click', function () {
        console.log('sdf');
       $(this).parent('li').remove();
    });

    $(document).on('click','.tag-item a',function(e){
        e.preventDefault();
        $(this).parent('li').remove();
    });
});

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("team-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("team-search");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


