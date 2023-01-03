import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Magazine from "./components/Magazine";
import Navbar from "./components/Navbar";
import TextSec from "./components/TextSec";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutus />
      <Magazine />
      <TextSec />
      <Footer />
    </div>
  );
}

export default App;
