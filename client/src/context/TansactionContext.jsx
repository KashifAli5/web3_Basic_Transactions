import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';
import { EtherscanProvider } from '@ethersproject/providers';



export const TransactionContext = React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
    console.log('transaction func run');
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    // to get form data
    const [formData, setFormData] = useState({ addresssTo: '', amount: '', keyword: '', message: ''});

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {

            if (!ethereum) return alert ("Please install metamask");

            const account = await ethereum.request({ method: 'eth_accounts' });
    
            if(account.lenth) {
                setCurrentAccount(account[0]);
    
                // getAllTransactions();
                console.log(account);
            } else {
                console.log("No accounts found");
            }
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }

       

        
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert ("Please install metamask");
            const account  = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(account[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert ("Please install metamask");

            const { addressTo, amount, keyword, message } = formData;
            getEthereumContract();

            
        } catch (error) {
            throw new Error("No ethereum object.");
        }
    }


    useEffect(()=>{
        checkIfWalletIsConnected();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction  }}>
            {children}
        </TransactionContext.Provider>
    );
}