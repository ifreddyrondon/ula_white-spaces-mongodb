$(document).ready(function(){

	// TODO: create class .disable-button form transform css 

	$('#upload-measures form').submit(function (evt) {
    	evt.preventDefault();
    	
    	if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }

    	$(this).children('button').prop("disabled",true);
    	$(this).children('button').addClass('disable-button');

		var files = $(this).children('input[type=file]').val();
		console.log(files);
	});

});