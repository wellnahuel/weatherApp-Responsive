import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/* 

app.js = renderizacion de toda la app. useEffect que escucha cambios en city o units, ejecutandose la funcion que me trae la data de la API.
definida las funciones del boton de °C/°F , y el de la busqueda de ciudades, presionando la tecla Enter.


weather.js = aca defino la funcion que trae la data de la api , luego hago restructuring para filtrar toda la data que viene. 

Details.jsx = este es el componente que muestra los detalles del clima, cada una de las cards que muestran una estadistica en particular. Como siempre cada vez que hay que mostrar cards se hace un mapeo y se renderizan

*/