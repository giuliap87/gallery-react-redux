import "./App.css";
import PictureContainer from "./components/PicturesContainer/index";
import Overlay from "./components/Overlay/index";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PictureContainer />
      <Overlay />
    </div>
  );
}

export default App;
