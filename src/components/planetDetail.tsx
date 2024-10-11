import React from 'react';
import './page.css'
import { useNavigate } from 'react-router-dom'; 
import { ApiService } from '../services/apiCall';  

const PlanetCards: React.FC = () => {
  const [bodies, setBodies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBodies = async () => {
      try {
        const data = await ApiService.getBodies();
        setBodies(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener los datos');
        setLoading(false);
      }
    };
    
    fetchBodies();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/planetData/${id}`);
  };

  if (loading) {
    return <p>Cargando planetas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='card-dash'>
      {bodies.map((body) => (
        <div key={body.id} onClick={() => handleCardClick(body.id)} >
          <h3>{body.englishName}</h3>
          <p>Click for more information</p>
         
        </div>
      ))}
    </div>
  );
};

export default PlanetCards;
