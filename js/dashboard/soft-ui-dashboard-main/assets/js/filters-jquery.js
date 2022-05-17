$('#filter-all')
    .click(function(){
        
});

$('#filter-manager')
    .click(function(){
        $('body-tabla').each((i, tr) =>{
            tr.css('display','none')
        });

        $('td:contains(Manager)').parent().css('display', 'inline');
});

$('#filter input')
    .click(function(){
        $('#filter input').removeClass('selected');
        $(this).addClass('selected');
    });

