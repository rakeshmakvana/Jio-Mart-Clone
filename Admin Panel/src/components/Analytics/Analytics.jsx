import { IoIosArrowForward } from 'react-icons/io'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import './Analytics.css'

const Analytics = () => {

    let data1 = {
        series: [{
            name: 'Net Profit',
            data: [10, 22, 26, 30, 24, 35, 31, 42, 44]
        }, {
            name: 'Revenue',
            data: [24, 34, 40, 46, 48, 52, 50, 58, 52]
        }, {
            name: 'Cash',
            data: [8, 16, 20, 28, 22, 27, 25, 32, 25]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 380
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '65%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '₹ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "₹" + val + " thousands"
                    }
                }
            }
        },
    }

    let data2 = {
        series: [40, 12, 10, 14, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Manufactur', 'Design', 'Marketing', 'Shiping', 'profit'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                }
            }]
        },
    }

    let data3 = {
        series: [54, 47, 52, 44],
        options: {
            chart: {
                width: 320,
                type: 'polarArea'
            },
            labels: ['Electronics', 'Clothes', 'Foods', 'other'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        },
    }

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Dashboard <IoIosArrowForward /> Analytics</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap mt-4'>
                        <div className="col-3">
                            <div className='ttl-bg text-center p-3'>
                                <h2>
                                    All Products
                                </h2>
                                <h3>
                                    24
                                </h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='ttl-bg text-center p-3'>
                                <h2>
                                    Total Orders
                                </h2>
                                <h3>
                                    12
                                </h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='ttl-bg text-center p-3'>
                                <h2>
                                    Total Sales
                                </h2>
                                <h3>
                                    30
                                </h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='ttl-bg text-center p-3'>
                                <h2>
                                    Net Profit
                                </h2>
                                <h3>
                                    ₹44000
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 d-flex flex-wrap mt-5 align-items-center'>
                        <div className="col-8">
                            <div className="mixed-chart p-4">
                                <Chart
                                    options={data1.options}
                                    series={data1.series}
                                    type="bar"
                                    width={680}
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='pi-chart p-3'>
                                <ReactApexChart
                                    options={data2.options}
                                    series={data2.series}
                                    type="pie"
                                    width={340}
                                />
                            </div>
                            <div className='pi-chart p-3 mt-4'>
                                <ReactApexChart
                                    options={data3.options}
                                    series={data3.series}
                                    type="pie"
                                    width={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Analytics