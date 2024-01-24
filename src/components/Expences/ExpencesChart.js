import React from 'react'
import Chart from '../Chart/Chart'

function ExpencesChart(props) {

  const chartDataPoints = [
    {label:"Jan",value:0},
    {label:"Feb",value:0},
    {label:"Mar",value:0},
    {label:"Apr",value:0},
    {label:"May",value:0},
    {label:"Jun",value:0},
    {label:"Jul",value:0},
    {label:"Aug",value:0},
    {label:"Sep",value:0},
    {label:"Oct",value:0},
    {label:"Nov",value:0},
    {label:"Dec",value:0},
  ]

  for(const expense of props.expenses){
    const expenseMonth = new Date(expense.date).getMonth(); // Jan will be zero 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <Chart dataPoints ={chartDataPoints} />
  )
}

export default ExpencesChart