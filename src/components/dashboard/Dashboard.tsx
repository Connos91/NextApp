"use client";

import React, { Suspense, lazy } from "react";
import { SessionProps } from "./SessionProps";
import Navbar from "./components/navbar";
import { ContextProvider } from "@/context/Context";
import Footer from "../footer";
import GamesServerList from "../gamesServerContainer";

const GamesClientContainer = lazy(() => import("../gamesClientContainer"));

const Dashboard = ({ name, games }: SessionProps) => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar name={name} />
        <main className="flex-grow p-4 mb-4">
          <Suspense>
            <GamesClientContainer />
            <GamesServerList games={games} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default Dashboard;
