//functions related to the theme itself. 

var mdlAdmin = {
	//set Page title and Breadcrumbs. 
    setTitle : function(title, subtitle) {
    	//todo ; page title. 

        $('#title').html(title);
        $('#title-sep').hide();
        $('#subtitle').hide();
        if(subtitle) {
            $('#title-sep').show();
            $('#subtitle').show();
            $('#subtitle').html(subtitle);
        }
        
    }, 
    //load dynamic content over XHR
    loadContent : function(filename, cb) {
        $('#content').html('<div class="loading"><div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div></div>');
        componentHandler.upgradeDom();

        setTimeout(
        function() 
        {
            $('#content').load(filename, function() {
                //Quick fix for dynamic DOM issue (raised by me): https://github.com/google/material-design-lite/issues/957
                componentHandler.upgradeDom();
                if(cb)
                    cb();
            });
        }, 500);

    	


    }, 

    initActive : function(route_href) {

    	//if top level
    	var nav= $('nav > nav-item').find("[href='" + route_href + "']");
    	if(nav.length) {
    		//select the first child
    		var navitem = nav[0];
    		//and make it active. 
    		$(navitem).parent().addClass('active');
    		//if subnav then open up the main nav. 
    		if($(navitem).parent().prop('nodeName') == 'SUB-NAV-ITEM') {
    			$(navitem).parent().parent().addClass('show');
    		}

    	} 

    },	

    todoAdd : function() {
    	//TODO: Not able to identify a technique to add a selectable row dynamically.
    	var newTask = $('#todo-newtask').val();
    	var newDate = $('#todo-newdate').val();

 
    	$('#todo-table > tbody:last-child').append('<tr><td></td><td class="mdl-data-table__cell--non-numeric">' 
    		+ newTask  + '</td><td class="mdl-data-table__cell--non-numeric">' + newDate + '</td>/tr>');
    	componentHandler.upgradeDom();
    }, 

    loadCharts : function() {
        if(google) {
            google.load('visualization', '1.1', {
                packages: ['line', 'bar'],
                callback: function() {
                    drawChart();
                }
            } )
        }
        // google.load('visualization', '1.1', {packages: ['line']});
        // google.setOnLoadCallback(drawChart);

        function drawChart() {

          var data = new google.visualization.DataTable();
          data.addColumn('number', 'Day');
          data.addColumn('number', 'Guardians of the Galaxy');
          data.addColumn('number', 'The Avengers');
          data.addColumn('number', 'Transformers: Age of Extinction');

          data.addRows([
            [1,  37.8, 80.8, 41.8],
            [2,  30.9, 69.5, 32.4],
            [3,  25.4,   57, 25.7],
            [4,  11.7, 18.8, 10.5],
            [5,  11.9, 17.6, 10.4],
            [6,   8.8, 13.6,  7.7],
            [7,   7.6, 12.3,  9.6],
            [8,  12.3, 29.2, 10.6],
            [9,  16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11,  5.3,  7.9,  4.7],
            [12,  6.6,  8.4,  5.2],
            [13,  4.8,  6.3,  3.6],
            [14,  4.2,  6.2,  3.4]
          ]);

          var options = {
            chart: {
              title: 'Google Charts - Line',
              subtitle: 'in Material Design'
            },
            width: 900,
            height: 500
          };

          var chart = new google.charts.Line(document.getElementById('linechart_material'));

          chart.draw(data, options);

          var data = google.visualization.arrayToDataTable([
              ['Year', 'Sales', 'Expenses', 'Profit'],
              ['2014', 1000, 400, 200],
              ['2015', 1170, 460, 250],
              ['2016', 660, 1120, 300],
              ['2017', 1030, 540, 350]
            ]);

            var options = {
              chart: {
                title: 'Google Charts - Bar',
                subtitle: 'in Material Design'
              },
              bars: 'horizontal', // Required for Material Bar Charts.
              width: 900,
              height: 500
            };

            var chart = new google.charts.Bar(document.getElementById('barchart_material'));

            chart.draw(data, options);
        }
    }
}