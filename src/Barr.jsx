import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Barr = ({ Bardata }) => {
  const map1 = Bardata?.map(x => x.label);
  const map2 = Bardata?.map(x => x.value);
    const data = {
        labels: map1,
        datasets: [{
          label: 'Forks',
          data: map2,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
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
  return (
    <div className='p-5 bg-slate-200'>
    <Bar data={data}/>
    </div>
  )
}
export default Barr