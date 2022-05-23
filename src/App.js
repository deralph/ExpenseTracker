import AllCategories from "./components/categories/AllCategories";
import Categories from "./components/categories/Categories";
import CategoriesForm from "./components/categories/CategoriesForm";
import Context from "./components/context/Context";
import Dashboard from "./components/dashboard/Dashboard";
import Expenses from "./components/expenses/Expenses";
import Home from "./components/home/Home";
import Navbar from "./components/home/navbar/Navbar";
import Welcome from "./components/logged/welcome/Welcome";
import SignIn from "./components/Sign in/SignIn";

function App() {
  return (
    <div className="App">
      {/* <Context> */}
      <Home />
      {/* <Navbar /> */}
      <SignIn />
      {/* <Context/> */}
      {/* <Dashboard /> */}
      <Welcome />
      <Categories />
      <CategoriesForm />
      <Dashboard />
      {/* <Expenses /> */}
      <AllCategories />
    </div>
  );
}

export default App;
