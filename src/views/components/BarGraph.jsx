import { Container } from "@mui/material";
import { useState } from 'react';
import { Bar, Pie } from "react-chartjs-2";

function BarGraph({ labels=[], title="", data=[], backgroundColors=[]}) {
    const chartData = {
        labels: labels,
        datasets: [
            {
              label: title,
              data: data,
              backgroundColor: backgroundColors,
              borderWidth: 1,
            }
    
        ]
    }

    return ( 
        <Bar
            data={chartData}
            width={600}
            height={350}
        />
    );
}

export function PieGraph({ labels=[], title="", data=[], backgroundColors=[]}) {
    const chartData = {
        labels: labels,
        datasets: [
            {
              label: title,
              data: data,
              backgroundColor: backgroundColors,
              borderWidth: 1,
            }
    
        ]
    }

    return ( 
        <Pie
            data={chartData}
            width={600}
            height={350}
            options={{
                maintainAspectRatio: false
            }}
        />
    );
}

export default BarGraph;