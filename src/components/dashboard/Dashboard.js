import React from "react";
import Navbar from "../home/navbar/Navbar";
import DashboardBody from "./dashboardbody/DashboardBody";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <article className="dashboard">
        <Sidebar />
        <DashboardBody />
      </article>
    </section>
  );
};

export default Dashboard;
