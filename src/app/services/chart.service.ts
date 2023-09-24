import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

const Exporting = require("highcharts/modules/exporting");
const ExportData = require("highcharts/modules/export-data");

Exporting(Highcharts);
ExportData(Highcharts);

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    constructor(private http: HttpClient) { }


    highcharts = Highcharts;
    columnchartOptions = {

        title: {
            text: 'Male vs Female'
        },
        xAxis: {
            categories: []
        },
        yAxis: [{
            min: 0,
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        credits: {
            enabled: false
        },
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            },

        },
        colors: [
            '#00E0FF',
            '#FFE40B',

        ],
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [],
            showInLegend: false
        }],
        exporting: {
            buttons: {
              contextButton: {
                menuItems: ["viewFullscreen",
                            "printChart",
                            "separator",
                            "downloadPNG",
                            "downloadJPEG",
                            "downloadPDF",
                            "downloadSVG",
                            "separator",
                            "downloadCSV",
                            "downloadXLS",
                            //"viewData",
                            "openInCloud"]
              }
            }
          }
    }

    columnchartOptions2 = {

        title: {
            text: 'Professionals Increament'
        },
        xAxis: {
            categories: ['Complete', 'Pending', 'Upcoming']
        },
        yAxis: [{
            min: 0,
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        credits: {
            enabled: false
        },
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                point: {
                  events: {
                    click: function() {
                      // getClickedData(this.category,this.y)
                    }
                  }
                }
              }
        },
        colors: [
            '#00E0FF',
            '#00DC59',
            '#9A73E8',

        ],
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [],
            showInLegend: false
        }],
        exporting: {
            buttons: {
              contextButton: {
                menuItems: ["viewFullscreen",
                            "printChart",
                            "separator",
                            "downloadPNG",
                            "downloadJPEG",
                            "downloadPDF",
                            "downloadSVG",
                            "separator",
                            "downloadCSV",
                            "downloadXLS",
                            //"viewData",
                            "openInCloud"]
              }
            }
          }
    }
    columnchartOptions3 = {

        title: {
            text: 'Weekly OT Hour'
        },
        xAxis: {
            categories: []
        },
        yAxis: [{
            min: 0,
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        credits: {
            enabled: false
        },
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                point: {
                  events: {
                    click: function() {
                      console.log(this);
                    }
                  }
                }
              }
        },
        colors: [
            '#00E0FF',
            '#FF0F13',
            '#9A73E8',
            '#00DC59',
            '#FFD300',
            '#0004FD',

        ],
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [],
            showInLegend: false
        }],
        exporting: {
            buttons: {
              contextButton: {
                menuItems: ["viewFullscreen",
                            "printChart",
                            "separator",
                            "downloadPNG",
                            "downloadJPEG",
                            "downloadPDF",
                            "downloadSVG",
                            "separator",
                            "downloadCSV",
                            "downloadXLS",
                            //"viewData",
                            "openInCloud"]
              }
            }
          }
    }

    pieChartOptions = {
        chart: {
            // plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Manpower Requisition'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>QTY- {point.y} ({point.percentage:.1f}%</b>)'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            innerSize: '70%',
            data: []
        }],
        exporting: {
            buttons: {
              contextButton: {
                menuItems: ["viewFullscreen",
                            "printChart",
                            "separator",
                            "downloadPNG",
                            "downloadJPEG",
                            "downloadPDF",
                            "downloadSVG",
                            "separator",
                            "downloadCSV",
                            "downloadXLS",
                            //"viewData",
                            "openInCloud"]
              }
            }
          }
    }

    buttonFlags =
        [
            { name: 'manpower', status: true },
            { name: 'male_vs_female', status: true },
            { name: 'ot_hour', status: true },
            { name: 'increment', status: true },
          
        ];

        chartLoderOptions = {
            totalEmployeeChartLoader: true,
            approvalStatusChartLoader: true,
            absenteeismChartLoader: true,
            manpowerRequisitonChartLoader: true,
            maleVsFemaleChartLoader: true,
            weeklyOtHourChartLoader: true,
            professionalsIncrementChartLoader: true,
            employeeAttendanceChartLoader: true,
        }
        

}


function getClickedData(category: any, y: any) {
    console.log('category',category)
    console.log('value',y)
}

