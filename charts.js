new Chart(document.getElementById("bargraph"), {
	"type": "horizontalBar",
	"data": {
		"labels": ["California", "Texas", "New York", "Illinois", "Washington", "Virginia", "Massachusetts", "Colorado", "Maryland", "Hawaii"],
		"datasets": [{
			"label": "Number of LEED Projects Certified",
			"data": [521, 277, 214, 172, 137, 136, 122, 114, 113, 20],
			"fill": false,
			"backgroundColor": ["#18d26e", "#18d26e",
			"#18d26e", "#18d26e", "#18d26e",
			"#18d26e", "#18d26e", "#18d26e", "#18d26e", "#18d26e"
			],
			"borderColor": ["#18d26e", "#18d26e", "#18d26e",
			"#18d26e", "#18d26e", "#18d26e", "#18d26e", "#18d26e", "#18d26e", "#18d26e"
			],
			"borderWidth": 1
		}]
	},
	"options": {
		"scales": {
			"xAxes": [{
				"ticks": {
					"beginAtZero": true
				}
			}]
		}
	}
});

//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
	type: 'line',
	data: {
		labels: ["2000", "2005", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
		datasets: [{
			label: "Number of LEED Registrations",
			data: [41, 3156, 32396, 38147, 42922, 47203, 51338, 55524, 63949, 65624, 67593, 69066],
			backgroundColor: [
			'rgba(24, 210, 110, .2)',
			],
			borderColor: [
			'#18d26e',
			],
			borderWidth: 2
		}
		]
	},
	options: {
		responsive: true
	}
});