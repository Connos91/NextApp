"use client";

import React, { Suspense, lazy } from "react";
import { SessionProps } from "./SessionProps";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ContextProvider } from "@/context/Context";

const GamesContainer = lazy(() => import("./components/gamesContainer"));

const Dashboard = ({ name }: SessionProps) => {
  return (
    <ContextProvider>
      <Navbar name={name} />
      <Suspense fallback={<div>Loading games...</div>}>
        <GamesContainer />
      </Suspense>
      <Footer />
    </ContextProvider>
  );
};

export default Dashboard;
