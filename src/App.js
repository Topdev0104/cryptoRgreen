import React, { Suspense, useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EthereumContext } from "./context/EthereumContext";
import Web3 from "web3";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./layouts/Header";
const Landing = React.lazy(() => import("./pages/landing"));

function App() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1") {
          toast("Ethereum mainnet connected successfully");
        } else {
          toast.error("Please connect to Ethereum Mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense fallback={<></>}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Landing />
                  </>
                }
              ></Route>
            </Routes>
          </Router>
        </Suspense>
      </EthereumContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
