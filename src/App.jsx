import Footer from "./components/Footer";
import Header from "./components/Header";
import Greet from "./components/Greet";
import MainComponent from "./components/MainComponent";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Person from "./components/Person";

const App = () => {
  return (
    <>
      <Person name="Arthur Morgan" age={30} />
      <Product name="Laptop" price={1000} />
    </>
  )
}

export default App;