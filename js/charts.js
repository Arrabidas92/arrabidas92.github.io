/* Load Google charts libraries*/
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});

/* Set callbacks to draw charts */
google.charts.setOnLoadCallback(drawField);
google.charts.setOnLoadCallback(drawType);
google.charts.setOnLoadCallback(drawPractice);
google.charts.setOnLoadCallback(drawExtras);
google.charts.setOnLoadCallback(drawDay);

/* Function to draw first pie chart with mobile or web profile */
function drawField() {
	// Data
  	var data = google.visualization.arrayToDataTable([
    	['Domaine', 'Pourcentage'],
    	['Mobile',  70],
    	['Web', 30]
  	]);

  	// Options to customize pie chart
	var options = {
	  'legend': { position: 'bottom' },
	  'is3D': true,
	  'slices': {  0: {offset: 0.2} },
	  'colors': ['#e0440e', '#2196F3'],
    'width': '100%',
    'height': '100%'
	};

	// Draw chart
  	var chart = new google.visualization.PieChart(document.getElementById('field'));
  	chart.draw(data, options);
}

/* Function to dray second pie chart if native or hybrid */
function drawType() {
	// Data
	var data = google.visualization.arrayToDataTable([
	  	['Type', '%'],
	  	['Natif',     100],
	  	['Hybride',  0]
	]);

	// Options to customize pie chart
  	var options = {
    	'legend': { position: 'bottom' },
    	'is3D': true,
    	'colors': ['#4CAF50'],
      'width': '100%',
      'height': '100%'
  	};

  	// Draw
	var chart = new google.visualization.PieChart(document.getElementById('type'));
    chart.draw(data, options);
}

/* Function to draw first practice histogram for monthly programing practice */
function drawPractice() {
	// Data
    var data = google.visualization.arrayToDataTable([
    ['Langage', 'Nombre de mois de pratique'],
    ['JAVA', 24],
    ['SQL', 16],
    ['XML', 12],
    ['SWIFT', 6],
    ['PHP', 4],
    ['HTML/CSS', 3],
    ['JAVASCRIPT', 2],
    ['NODE.JS', 1]
    ]);

    // Options to customize chart
    var options = {
    	'legend': { position: 'none' },
      'chart': {
          'title': 'Nombre de mois de pratique',
          'subtitle': 'Période 2015 - 2017',
        },
      'bars': 'horizontal',
      'bar': {groupWidth: "60%"},
      'colors': "#9C27B0",
      'width': '100%',
      'height': '100%'
      };

    // Draw
	var chart = new google.charts.Bar(document.getElementById('practice'));
	chart.draw(data, google.charts.Bar.convertOptions(options));
}

/* Function to draw second histogram practicing other skills */
function drawExtras() {
	// Data
    var data = google.visualization.arrayToDataTable([
    ['Compétence', 'Nombre de mois de pratique'],
    ['Community management', 18],
    ['Adobe Photoshop', 14],
    ['Analytics', 12],
    ['Rédacteur', 8],
    ['Juridique', 1],
    ['Comptabilité', 1]
    ]);

    // Options to customize bar chart
    var options = {
        'legend': { position: 'none' },
        'chart': {
          'title': 'Nombre de mois de pratique',
          'subtitle': 'Période 2015 - 2017',
        },
        'bars': 'horizontal',
        'bar': {groupWidth: "60%"},
        'colors': "#3F51B5",
        'width': '100%',
        'height': '100%'
        };

    // Draw chart
    var chart = new google.charts.Bar(document.getElementById('otherskills'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

/* Function to draw a typical day tasks */
function drawDay() {
	// Data
  	var data = google.visualization.arrayToDataTable([
    	['Tâches', 'Pourcentage'],
    	['Coder',  50],
    	['Apprendre', 16],
    	['Sports',  17],
    	['Autres loisirs', 17]
  	]);

  	// Options to customize data
  	var options = {
    	'width': 240,
    	'height': 240,
    	'legend': { position: 'none' },
    	'is3D': true,
    	'colors': ['#2196F3','#F44336','#FF9800','#4CAF50']
  	};

  	// Draw chart
  	var chart = new google.visualization.PieChart(document.getElementById('myday'));
  	chart.draw(data, options);
}

//create trigger to resizeEnd event     
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 100);
});

//redraw graph when window resize is completed  
$(window).on('resizeEnd', function() {
    drawField();
    drawType();
    drawPractice();
    drawExtras();
});

