(function(){
    var script = document.getElementById('coconutt-chat-widget-script');


    // Load the Highcharts script if undefined, and add the chart
    if (typeof Highcharts !== 'undefined') {
        addChart();
    } else if (script) {
        script.deferredCharts.push(addChart);
    } else {
        script = document.createElement('script');
        script.id = 'coconutt-chat-widget-script';
        script.src = '//cloud.highcharts.com/resources/js/highstock-cloud-5.0.7.js';
        script.type = 'text/javascript';
        //script.deferredCharts = [addChart];
        script.onload = function () {
            // Prevent double firing of event in IE9/IE10
            console.log("this is a loaded flag")
            }
        };
        script.onreadystatechange = function() {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                script.onload();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);
		var elem = document.createElement("img");
			elem.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/2/24/Willaerts_Adam_The_Embarkation_of_the_Elector_Palantine_Oil_Canvas-huge.jpg");
			elem.setAttribute("height", "76");
			elem.setAttribute("width", "104");
			elem.setAttribute("alt", "Flower");
		document.getElementById('coconutt-chat-widget').appendChild(elem);
		
		
})();