$('button').click( function() {
                   var counter = $('#cart').val();
                   counter++ ;
                   console.log(counter);
                   $('#cart').val(counter);
               });
