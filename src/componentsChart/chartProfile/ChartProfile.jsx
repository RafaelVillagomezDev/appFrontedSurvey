// Importar librerías necesarias
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartProfile = () => {
  // Definir los datos del gráfico
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas en el eje X
    datasets: [
      {
        label: 'Encuestas realizadas usuario', // Título del dataset
        data: [65, 59, 80, 81, 56], // Datos del gráfico
        fill: false, // No llenar debajo de la línea
        borderColor: 'rgb(75, 192, 192)', // Color de la línea
        tension: 0.1 // Suavizado de la línea
      }
    ]
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
     
      tooltip: {
        mode: 'index',
        intersect: false
      },
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div  id='container_chart'>
      <h3>Mi Gráfico de Encuestas</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartProfile;
