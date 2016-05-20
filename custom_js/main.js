

/*For opening search-box*/
$('#click').click(function()
{   
    $("#search-box").toggle();     
});

$('table tr td .button').on('click',function(e)
{   
    showDiv();   
});   
  
/* For opening the form*/
function showDiv() {
  // template
  var f = $('#booking-form').clone();
  
  // add to list
  $('#others').append(f.fadeIn());
}

   
	$('.button').click(function() { 
    		this.style.backgroundColor = this.style.backgroundColor !== "pink"
                ? "pink"
                : "gold";
        });
   
$('.button').click(function(){
    $('#search-box').css({ 'min-height' : '+=20px' });
});


(function() {
    $('form > input').keyup(function() {

        var empty = false;
        
        
        $('input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#booking-form').attr('disabled', 'disabled');
        } else {
            $('#booking-form').removeAttr('disabled');
        }
    });
})()






   
	
/*For opening search*/
$('#press').click(function()
{   
    $("#search").toggle();     
});

$('table tr td .buttons').on('click',function(e)
{   
    show();   
});   
  
/* For opening the form*/
function show() {
  // template
  var f = $('#booking').clone();
  
  // add to list
  $('#other').append(f.fadeIn());
}

$('.buttons').click(function() { 
    		this.style.backgroundColor = this.style.backgroundColor !== "pink"
                ? "pink"
                : "gold";
        });
   
$('.buttons').click(function(){
    $('#search').css({ 'min-height' : '+=20px' });
});
