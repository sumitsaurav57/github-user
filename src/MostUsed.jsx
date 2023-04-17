import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const MostUsed = ({MostUsed}) => {
    const map1 = MostUsed?.map(x => x.label);
  const map2 = MostUsed?.map(x => x.value);
  const data2 = {
        labels: map1,
        datasets: [{
          label: 'Forks',
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
        },
        layout: {
            padding: {
                left: 50
            }
        }
  }
        
  };

  return (
      <div className='p-5 bg-slate-200'>
          <Line data={data2} />
    </div>
  )
}

export default MostUsed