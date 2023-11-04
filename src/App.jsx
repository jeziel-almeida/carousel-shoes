import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';

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

  return (
    <>
      <Header />
      <div className='container'>
        
        {shoes.length ? <Carousel data={shoes} /> : <Loading /> }
        
      </div>
    </>
  );
}

export default App;
