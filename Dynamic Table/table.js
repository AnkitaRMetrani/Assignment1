$(function(){
    var emptyrow="<tr><td class='text-center' colspan='4'>No Results</td></tr>"

    $('#tableresult tbody').append(emptyrow);
})

/*$('#submiting').click(function()
{
    var name=$('#name').val().trim();
    var subj=$('#subject').val().trim();
    var mks=$('#obt_marks').val().trim();

    if($('#tableresult tbody').children().children().length==1){
        $('#tableresult tbody').html("");
    }

    var tableadd=<tr><td>+name+</td><td>+subj+</td><td>+mks+</td><td></td></tr>
    $('#tableresult tbody').append.tableadd();
    $('#name').val('');
    $('#subject').val('');
    $('#obt_marks').val('');
})*/