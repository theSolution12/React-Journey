import Footer from "./components/Footer";
import Header from "./components/Header";
import Greet from "./components/Greet";
import MainComponent from "./components/MainComponent";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Product from "./components/props/Product";
import Person from "./components/props/Person";
import Weather from "./components/conditional rendering/Weather";
import UserStatus from "./components/conditional rendering/UserStatus";
import ConditionalGreeting from "./components/conditional rendering/Greeting";

const App = () => {
  return (
    <>
      <Weather temperature={30} />
      <Weather temperature={20} />
      <Weather temperature={10} />

      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={true} />

      <ConditionalGreeting timeOfDay="morning" />
      <ConditionalGreeting timeOfDay="afternoon" />
      <ConditionalGreeting timeOfDay="evening" />
      <ConditionalGreeting timeOfDay="night" />
    </>
  )
}

export default App;