import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React from 'react'
const Dough = ({ data }) => {
  const map1 = data?.map(x => x.label);
  const map2 = data?.map(x => x.value);
  const data2 = {
        labels: map1,
        datasets: [{
          label: 'languages',
          data: map2,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 25, 86)'
          ],
          hoverOffset: 4
    }],
    options: {
      plugins: {
          subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          }
      }
  }
        
  };
  /* console.log(data.labels) */
  return (
    <div className='p-5 bg-slate-200'>
          <Pie data={data2}/>
          {/* <Doughnut data={data2}/> */}
    </div>
  )
}

export default Dough

