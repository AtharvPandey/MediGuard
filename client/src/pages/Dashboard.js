import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";

import Sidebar from "../components/Sidebar/Sidebar";
import "./Dashboard.css";
import ContentHeader from "../components/Content/ContentHeader";
const Dashboard = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const [account] = await provider.send("eth_requestAccounts", []);
          setAccount(account);

          const signer = provider.getSigner();
          let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

          const contract = new ethers.Contract(
            contractAddress,
            Upload.abi,
            signer
          );

          setContract(contract);
          setProvider(provider);
        } else {
          console.error("Metamask is not installed");
        }
      } catch (error) {
        console.error("Error loading provider:", error.message);
      }
    };

    loadProvider();
  }, []);

  const sampleFunction = async () => {
    try {
      // Add your function logic here
      // For example, calling a function from your smart contract
      if (contract) {
        const result = await contract.yourFunction();
        console.log("Function result:", result);
      } else {
        console.error("Contract not loaded");
      }
    } catch (error) {
      console.error("Error in sampleFunction:", error.message);
    }
  };

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <ContentHeader />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
