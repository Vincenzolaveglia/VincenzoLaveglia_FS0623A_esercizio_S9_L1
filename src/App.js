import './App.css';
import ButtonComponent from './components/buttonComponent'
import ImageComponent from './components/imageComponent'

function App() {
  return (
    <div className="App">
      <ButtonComponent label="First button" />
      <ImageComponent
        imageSrc="http://placekitten.com/200/200"
        altText="cute kitten image"
      />
      <ImageComponent
        imageSrc="http://placekitten.com/200/300"
        altText="cute kitten image"
      />
      <ButtonComponent label="Second button" />
  </div>
  );
}

export default App;
