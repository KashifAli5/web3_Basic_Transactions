import React, { useContext } from 'react';
import { TransactionContext } from '../context/TansactionContext';
import dummyData from '../utils/dummyData';

// simple custom func to short wallet address
import { shortenAddress } from '../utils/shortenAddress';

import useFetch from '../hooks/useFetch';


const TransactionCard = ({  addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });
    
    return (
        <div className='bg-[#181918] m-4 flex flex-1
            2xl:min-with-[450px]
            2xl:max-with-[500px]
            sm:min-with-[270px]
            sm:max-with-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        '>
            <div className='flex flex-col item-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://ropsten-etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferre">
                        <p className='text-white text-base '>from: {shortenAddress(addressFrom)}</p>
                    </a>
                    <br />
                    <a href={`https://ropsten-etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferre">
                        <p className='text-white text-base '>To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className='text-white text-base'>Ammount: {amount} ETH</p>
                    {message && (
                        <> 
                            <br />
                            <p className='text-white text-base'>Message: {message}</p>
                        </>
                    )}
      
                </div>

                <img 
                    src={gifUrl || url}
                    alt="gif"
                    className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover'
                        
                />

                <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                    <p className='text-[#37c7da] font-bold'> {timestamp}</p>    
                </div>

            </div>
        </div>
    )
}

const Transactoins = () => {

    const { currentAccount } = useContext(TransactionContext);

    return(
        <div className='flex w-full justify-center item-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>Connect Account to see Latest transactions</h3>
                )}
                {/* Latest Transactions */}

                <div className='flex flex-wrap justify-center item-center mt-10'>
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>



            </div>
        </div>
    );
}

export default Transactoins;