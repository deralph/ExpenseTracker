import AllCategories from "./components/categories/AllCategories";
import Categories from "./components/categories/Categories";
import CategoriesForm from "./components/categories/CategoriesForm";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import Welcome from "./components/logged/welcome/Welcome";
import SignIn from "./components/Sign in/SignIn";
import Features from "./components/home/features/Features";
import Consult from "./components/consult/Consult";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashgroup from "./Dashgroup";
import { useGlobal } from "./components/context/Context";
import SingleExpense from "./components/expenses/SingleExpense";
function App() {
  const { results, currentuser, loading } = useGlobal();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="ExpenseForm" element={<CategoriesForm />} />
        <Route
          path="dashboard"
          element={
            currentuser ? (
              loading ? (
                <h1>loading</h1>
              ) : results.length < 1 ? (
                <Navigate to="/expenseForm" />
              ) : (
                <Dashgroup />
              )
            ) : loading ? (
              <h1>loading</h1>
            ) : (
              <Navigate to="/signin" />
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="ExpenseForm" element={<CategoriesForm />} />
          <Route path="allExpense" element={<AllCategories />} />
          <Route path="allExpense/expense/:id" element={<SingleExpense />} />
          <Route path="consultation" element={<Consult />} />
        </Route>
        <Route path="features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
