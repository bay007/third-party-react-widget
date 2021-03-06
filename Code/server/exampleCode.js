(function () {
    var script = document.getElementById('highcharts-script');

    function addChart() {
        function parseData(completeHandler, chartOptions) {
	try {
		var dataOptions = {
  "seriesMapping": [
    {
      "x": 0
    },
    {
      "x": 0
    }
  ],
  "columnTypes": [
    "float",
    "float",
    "float"
  ],
  "csv": "Year,Annual mean,5 year mean\n1880,-0.31,\n1881,-0.22,\n1882,-0.28,-0.29\n1883,-0.3,-0.29\n1884,-0.33,-0.3\n1885,-0.32,-0.32\n1886,-0.29,-0.32\n1887,-0.35,-0.28\n1888,-0.28,-0.3\n1889,-0.18,-0.3\n1890,-0.4,-0.3\n1891,-0.29,-0.31\n1892,-0.33,-0.34\n1893,-0.34,-0.32\n1894,-0.35,-0.3\n1895,-0.27,-0.26\n1896,-0.19,-0.26\n1897,-0.16,-0.22\n1898,-0.3,-0.19\n1899,-0.19,-0.19\n1900,-0.11,-0.21\n1901,-0.18,-0.22\n1902,-0.28,-0.25\n1903,-0.32,-0.28\n1904,-0.36,-0.29\n1905,-0.27,-0.32\n1906,-0.22,-0.33\n1907,-0.42,-0.33\n1908,-0.36,-0.35\n1909,-0.37,-0.38\n1910,-0.36,-0.36\n1911,-0.37,-0.36\n1912,-0.34,-0.32\n1913,-0.34,-0.27\n1914,-0.17,-0.25\n1915,-0.11,-0.26\n1916,-0.31,-0.27\n1917,-0.39,-0.28\n1918,-0.35,-0.3\n1919,-0.22,-0.27\n1920,-0.22,-0.24\n1921,-0.16,-0.22\n1922,-0.27,-0.22\n1923,-0.23,-0.22\n1924,-0.24,-0.2\n1925,-0.19,-0.18\n1926,-0.04,-0.16\n1927,-0.17,-0.17\n1928,-0.15,-0.15\n1929,-0.29,-0.15\n1930,-0.11,-0.14\n1931,-0.04,-0.15\n1932,-0.1,-0.12\n1933,-0.22,-0.12\n1934,-0.1,-0.13\n1935,-0.15,-0.1\n1936,-0.07,-0.04\n1937,0.04,-0.02\n1938,0.08,0.01\n1939,-0.01,0.04\n1940,0.02,0.04\n1941,0.08,0.04\n1942,0.01,0.07\n1943,0.08,0.08\n1944,0.18,0.05\n1945,0.05,0.05\n1946,-0.07,0.02\n1947,-0.01,-0.03\n1948,-0.05,-0.07\n1949,-0.07,-0.07\n1950,-0.17,-0.07\n1951,-0.05,-0.04\n1952,0.01,-0.05\n1953,0.09,-0.04\n1954,-0.11,-0.06\n1955,-0.12,-0.05\n1956,-0.19,-0.05\n1957,0.08,-0.02\n1958,0.08,0\n1959,0.05,0.05\n1960,-0.01,0.05\n1961,0.07,0.04\n1962,0.03,-0.01\n1963,0.07,-0.03\n1964,-0.21,-0.05\n1965,-0.12,-0.06\n1966,-0.03,-0.08\n1967,0,-0.02\n1968,-0.04,0.01\n1969,0.08,-0.01\n1970,0.03,-0.01\n1971,-0.1,0.03\n1972,0,0\n1973,0.15,-0.01\n1974,-0.07,-0.02\n1975,-0.03,0.01\n1976,-0.15,-0.02\n1977,0.14,0.02\n1978,0.03,0.07\n1979,0.1,0.15\n1980,0.2,0.14\n1981,0.27,0.18\n1982,0.06,0.18\n1983,0.27,0.15\n1984,0.1,0.13\n1985,0.06,0.17\n1986,0.13,0.18\n1987,0.28,0.2\n1988,0.33,0.26\n1989,0.21,0.31\n1990,0.37,0.28\n1991,0.36,0.24\n1992,0.13,0.25\n1993,0.14,0.26\n1994,0.24,0.25\n1995,0.4,0.3\n1996,0.31,0.39\n1997,0.42,0.41\n1998,0.59,0.4\n1999,0.34,0.44\n2000,0.36,0.47\n2001,0.5,0.47\n2002,0.58,0.5\n2003,0.57,0.55\n2004,0.49,0.56\n2005,0.63,0.57\n2006,0.56,0.54\n2007,0.59,0.56\n2008,0.44,0.56\n2009,0.57,0.55\n2010,0.64,0.54\n2011,0.52,\n2012,0.52,"
};
		dataOptions.sort = true
		dataOptions.complete = completeHandler;
		Highcharts.data(dataOptions, chartOptions);
	} catch (error) {
		console.log(error);
		completeHandler(undefined);
	}
}
var shareUrl = 'http://cloud.highcharts.com/show/ovipab';
var encodedUrl = encodeURIComponent(shareUrl);

        var template = {
            chart: {
                renderTo: 'coconutt-chat-widget'
            },
            navigation: {
                menuItemStyle: {
                    fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
                    padding: '2px 10px'
                }
            },
            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: [{
                            text: '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl + '" target="_blank">' +
                            'Share on Facebook</a>'
                        }, {
                            text: '<a href="https://plus.google.com/share?url=' + encodedUrl + '" target="_blank">' +
                            'Share on Google+</a>'
                        }, {
                            text: '<a href="https://twitter.com/share?url=' + encodedUrl + '&text=' + document.title + '" target="_blank">' +
                            'Share on Twitter</a>'
                        }, {
                            text: '<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '" target="_blank">' +
                            'Share on LinkedIn</a>'
                        }, {
                            separator: true
                        }]
                            .concat(Highcharts.getOptions().exporting.buttons.contextButton.menuItems)
                            .concat([{
                                separator: true
                            }, {
                                text: '<a href="' + shareUrl.replace('/show/', '/charts/') + '" target="_blank">' + 'Edit chart</a>'
                            }, {
                                text: '<a href="/charts" target="_blank">' + 'Create chart</a>'
                            }])
                    }
                }
            }
        };
        var chartOptions = {
  "yAxis": {
    "title": {
      "text": "Temperature"
    },
    "labels": {
      "format": "{value} �C"
    }
  },
  "series": [
    {
      "index": 0
    },
    {
      "color": "#df3939",
      "index": 1,
      "negativeColor": "#94b1ef",
      "type": "area"
    }
  ],
  "title": {
    "text": "Global temperature"
  }
};
parseData(function (dataOptions) {
	// Merge series configs
	if (chartOptions.series && dataOptions) {
		Highcharts.each(chartOptions.series, function (series, i) {
			chartOptions.series[i] = Highcharts.merge(series, dataOptions.series[i]);
		});
	}
	var options = Highcharts.merge(dataOptions, chartOptions, template);
	var chart = new Highcharts['Chart'](options);
}, chartOptions);

    }

    // Load the Highcharts script if undefined, and add the chart
    if (typeof Highcharts !== 'undefined') {
        addChart();
    } else if (script) {
        script.deferredCharts.push(addChart);
    } else {
        script = document.createElement('script');
        script.id = 'highcharts-script';
        script.src = '//cloud.highcharts.com/resources/js/highstock-cloud-5.0.7.js';
        script.type = 'text/javascript';
        script.deferredCharts = [addChart];
        script.onload = function () {
            // Prevent double firing of event in IE9/IE10
            if (!script.chartsAdded) {
                script.chartsAdded = true;
                while(script.deferredCharts.length) {
                    script.deferredCharts.shift()();
                }
            }
        };
        script.onreadystatechange = function() {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                script.onload();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}());