import {useState} from 'react';
import NewCar from './components/NewCar';

function App() {
  const [carName, setCarName] = useState ([
    {id: 1, marka: 'Volvo', tip: 'SUV', godište: "1999."},
    {id: 2, marka: 'Seat Altea', tip: "karavan", godište: "2010."}]
  );

  const addNewCar = ({marka, tip, godište}) => {
    setCarName ([...carName, ...marka, tip, godište]);
  };
  return (
    <div>
      <NewCar onNewCarSubmit = {addNewCar} />
      <h1>Lista automobila</h1>
      {carName.map ((car) => (
        <p key = {car.id}>
          {car.marka},
          {car.tip},
          {car.godište}
        </p>
      ))}
    </div>
   
  );
}

export default App;
