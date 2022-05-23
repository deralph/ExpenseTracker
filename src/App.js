import AllCategories from "./components/categories/AllCategories";
import Categories from "./components/categories/Categories";
import CategoriesForm from "./components/categories/CategoriesForm";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import Welcome from "./components/logged/welcome/Welcome";
import SignIn from "./components/Sign in/SignIn";
import Features from "./components/home/features/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="ExpenseForm" element={<CategoriesForm />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="allExpense" element={<AllCategories />} />
        <Route path="features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
