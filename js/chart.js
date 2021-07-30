var ctx1 = document.getElementById('myChart1').getContext('2d');
// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var ctx3 = document.getElementById('myChart3').getContext('2d');

var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['2017', '2018', '2019', '2020'],
        label: 'Average Salaries Offered',
        datasets: [{
            label: 'CSE',
            data: [6, 6.7, 12.75, 11],
            backgroundColor: 'rgba(56, 113, 207, 0.9)',
            borderWidth: 2,
            borderColor: 'rgb(56, 113, 207)'
       
        },
        {
            label: 'ECE',
            data: [5, 6.7, 5, 8],
            backgroundColor: 'rgba(244, 180, 0, 0.9)',
            borderWidth: 2,
            borderColor: 'rgb(244, 180, 0)'
            
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Average Salaries Offered',
                font:{
                    size: 18
                }
            },
            legend: {
                display: true,
                labels: {
                    
                    boxHeight: 15,
                    boxWidth: 15,
                    font:{
                        size: 16
                    }
                    
                },
                position: 'bottom'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

// var myChart2 = new Chart(ctx2, {
//     type: 'bar',
//     data: {
//         labels: ['2017', '2018', '2019', '2020'],
//         label: 'Average Salaries Offered',
//         datasets: [{
//             label: 'CSE',
//             data: [6, 6.7, 12.75, 11],
//             backgroundColor: 'rgba(56, 113, 207, 0.9)',
//             borderWidth: 2,
//             borderColor: 'rgb(56, 113, 207)'
       
//         },
//         {
//             label: 'ECE',
//             data: [5, 6.7, 5, 8],
//             backgroundColor: 'rgba(244, 180, 0, 0.9)',
//             borderWidth: 2,
//             borderColor: 'rgb(244, 180, 0)'
            
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Average Salaries Offered',
//                 font:{
//                     size: 18
//                 }
//             },
//             legend: {
//                 display: true,
//                 labels: {
                    
//                     boxHeight: 15,
//                     boxWidth: 15,
//                     font:{
//                         size: 16
//                     }
                    
//                 },
//                 position: 'bottom'
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         responsive: true
//     }
// });