import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Scatter } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Col = ({ coldata }) => {
    const map1 = coldata?.map(x => x.label);
    const map2 = coldata?.map(x => x.stars);
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
    }  
  
  return (
      <div className='p-5 bg-slate-200'>
          <Radar data={data2} />
    </div>
  )
}

export default Col