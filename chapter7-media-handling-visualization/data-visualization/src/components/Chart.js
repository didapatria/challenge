import { Bar } from "react-chartjs-2";

export default function Chart({chartData}) {
  console.log(chartData, 'chart di chartjs')
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
              position: "bottom"
          }
          }
        }}
      />
    </div>
  )
}