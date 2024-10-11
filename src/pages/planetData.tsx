import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiService } from '../services/apiCall';
import './extra.css'

const PlanetData: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [planet, setPlanet] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const data = await ApiService.getBodies();
        const selectedPlanet = data.find((body: any) => body.id === id); 
        setPlanet(selectedPlanet);
      } catch (error) {
        setError('Error al obtener los detalles del planeta');
      }
    };

    fetchPlanet();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!planet) {
    return <p className='loading'>Cargando planetas...</p>;
  }

  return (
    <div className='planet-details'>
      <h1>{planet.englishName}</h1>
      <p>Masa:{planet.mass?.massValue} kg</p>
      <p>Densidad: {planet.density} g/cm³</p>
      <p>Gravedad: {planet.gravity} m/s²</p>
      <p>Diámetro: {planet.meanRadius} km</p>

    </div>
  );
};

export default PlanetData;
