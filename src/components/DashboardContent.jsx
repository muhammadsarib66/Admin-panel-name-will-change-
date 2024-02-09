import React from 'react'
import { CChart} from '@coreui/react-chartjs'
import MyTable from './MyTable'

const DashboardContent = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>

        <div className='w-[80%]'>
        <CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
          color: '#FF8918',
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'purple',
        },
        ticks: {
          color: 'red',
        },
      },
      y: {
        grid: {
          color: 'blue',
        },
        ticks: {
          color: '#FF8918',
        },
      },
    },
  }}
/>

            </div>
            <div className='w-[80%]'>

            <MyTable/>
    </div>
    </div>
  )
}

export default DashboardContent