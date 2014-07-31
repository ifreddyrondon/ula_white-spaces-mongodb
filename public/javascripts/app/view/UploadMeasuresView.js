var com = com || {};
com.spantons = com.spantons || {};
com.spantons.view = com.spantons.view || {};

// TODO: change to red bg of input name when this is empty and show a error msg and shake input effect (animate.css)
//		 show a error msg when the input file has not file/files

com.spantons.view.UploadMeasuresView = Backbone.View.extend({

	el: '#upload-measures',

	options: {
		supportHtml5: false,
		fillName: false,
		fillFiles: false,
	},

	files: null,

	events : {
		'change #upload-measures-name' : 'checkName',
		'change #upload-measures-file' : 'checkFiles',
		'click #upload-measures-button' : 'uploadData'
	},
	
	initialize: function(options){

		this.render();
	},

	render: function(){
		var html = "<form><input id='upload-measures-name' type='text' name='zone_name'><input id='upload-measures-file' type='file' multiple='multiple' name='data'><button id='upload-measures-button'>Synchronize</button></form>";
		this.$el.append(html);
		
		return this;
	},

	checkName: function(evt){
		var container = $(evt.target);

		if(container.val() === '') {
			this.options.fillName = false;
			// append class error bootstrap
		}
		else
			this.options.fillName = true;
	},

	checkFiles: function(evt){
		var container = $(evt.target);

		if (window.File && window.FileReader && window.FileList && window.Blob){
            this.options.supportHtml5 = true;
        	this.files = evt.target.files;

        } else 
        	this.options.supportHtml5 = false;

        if($(evt.target) !== '')
			this.options.fillFiles = true;
	},

	uploadData: function(evt){
		evt.preventDefault();
		var container = $(evt.target);

		if(!this.options.fillFiles || !this.options.fillName){
			console.log('append class error bootstra');
		
		} else {
			container.prop("disabled",true);
    		container.addClass('disable-button');

			if(!this.options.supportHtml5){
				console.log('no html5');
				// enviar datos a procesar al servidor
			}
			else 
				this.parseFiles(this.files);
		}
	},

	parseFiles: function(files){
		var sizeFiles = 0;

		_.each(files, function(file){
			sizeFiles += file.size;
		});

		console.log(this.formatSizeUnits(sizeFiles));
		console.log(files.length);

	},

	formatSizeUnits: function(bytes){
        if(bytes === 0) return '0 Byte';
	   	var k = 1000;
	   	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	   	var i = Math.floor(Math.log(bytes) / Math.log(k));
	   	return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
	}


});