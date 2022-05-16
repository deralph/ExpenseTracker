import React from "react";
import Navbar from "../home/navbar/Navbar";
import DashboardBody from "./dashboardbody/DashboardBody";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Navbar />
      <article style={{ marginTop: "60px" }} className="dashboard">
        <Sidebar />
        <DashboardBody />
      </article>
    </section>
  );
};

export default Dashboard;
