'use client'

import React from 'react'
import { Chart as Chartjs, ArcElement, Tooltip, Legend}
from 'chart.js';
import { Doughnut } from "react-chartjs-2"


Chartjs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ( accounts) => {
  return <Doughnut data={[]}/>
}

export default DoughnutChart