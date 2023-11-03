import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';

function App() {

  const [shoes, setShoes] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(process.env.REACT_APP_API_URL);
      const data = await res.json();
      setShoes(data);
    }

    fetchData();

  }, [])

  if(!shoes || !shoes.length) return null;

  return (
    <>
      <Header />
      <div className='container'>
        
        <Carousel data={shoes} />
        
      </div>
    </>
  );
}

export default App;
