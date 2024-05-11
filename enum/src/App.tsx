import { useState } from 'react';
import './App.css';

function App() {
  // Define enum outside of the component
  enum Color {
    Red,
    Yellow,
    Green,
  }

  // Initialize traficlight state with Yellow color
  const [traficlight, setTraficlight] = useState<Color>(Color.Yellow);

 // for i loop

 // start from condition          increment decrement    


let cars = ["bmw", "audi", "mercedes"]




  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);

  } 
 


  // Function to handle user input change
  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value;
    // Update traficlight state based on user input
    switch (selectedColor) {
      case 'Red':
        setTraficlight(Color.Red);
        break;
      case 'Yellow':
        setTraficlight(Color.Yellow);
        break;
      case 'Green':
        setTraficlight(Color.Green);
        break;
      default:
        break;
    }
  };

  // Output traficlight value inside JSX
  return (
    <>
      {/* User input for traffic light color */}
      <select value={Color[traficlight]} onChange={handleColorChange}>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
      </select>

      {/* Display current traffic light color */}
      <div className={Color[traficlight].toLowerCase()}>{Color[traficlight]}</div>
    


    </>
  );
}

export default App;
