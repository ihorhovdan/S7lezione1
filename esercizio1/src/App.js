import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ImageComponent from './components/Image';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Button nameB= "Click Me" />
        <ImageComponent 
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0f/Cards_royalflushhearts.jpg"
        />
        <ImageComponent 
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0f/Cards_royalflushhearts.jpg"
        />
    
        <Button nameB= "I'm another Button" />
        
      </div>
    </div>
  );
}

export default App;
