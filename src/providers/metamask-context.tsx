"use client"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ethers } from "ethers"
declare var window: any

interface IMetaMaskContext {
  connectWallet: () => void;
  walletAddress: string|null;
  setWalletAddress: React.Dispatch<React.SetStateAction<string|null>>;
  provider:ethers.BrowserProvider|null;
  setProvider:React.Dispatch<React.SetStateAction<ethers.BrowserProvider|null>>;
}

interface IMetaMaskProvider {
  children: React.ReactNode
}

const Context = React.createContext<IMetaMaskContext>({} as IMetaMaskContext)

const MetaMaskProvider = ({ children }: IMetaMaskProvider) => {

  const [walletAddress, setWalletAddress] = useState<string|null>(null);
const [provider,setProvider]=useState< ethers.BrowserProvider|null>(null)

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"  ) {
      try {
        /* get provider */
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log(provider)
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        console.log(accounts)
        if (accounts.length > 0) {
          console.log(accounts[0])
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */

      console.log("Please install MetaMask");
      toast.info("Please install MetaMask");

    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      console.log(walletAddress)
      window.ethereum.on("accountsChanged", (accounts: string) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);

        setWalletAddress(accounts[0]);
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
      toast.info("Please install MetaMask");
    }
  };

useEffect(()=>{
console.log(walletAddress)
},[walletAddress])

  useEffect(() => {
    console.log("object")
    getCurrentWalletConnected();
    addWalletListener();
    // connectWallet()
  }, []);
  return (
    <Context.Provider
      value={{
        connectWallet,
        walletAddress,
        setWalletAddress,
        provider,
        setProvider
      }}
    >
      {children}
    </Context.Provider>
  )
}

const useMetaMaskContext = () => {
  const c = React.useContext(Context)

  if (c === undefined) {
    throw new Error("useUserContext must be used within a UserProvider")
  }

  return c
}

export { MetaMaskProvider, useMetaMaskContext }