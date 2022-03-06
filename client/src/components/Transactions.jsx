import React, { useContext } from 'react';
import { TransactionContext } from '../context/TansactionContext';
import dummyData from '../utils/dummyData';

// simple custom func to short wallet address
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({  addressTo, addressFrom, timepstamp, message, keyword, amount, url }) => {
    return (
        <div className='bg-[#181918] m-4 flex flex-1
            2xl:min-with-[450px]
            2xl:max-with-[500px]
            sm:min-with-[270px]
            sm:max-with-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        '>
            <div className='flex flex-col item-center w-full mt-3'>
                <div className='flex justify-start w-full mb-6 p-2'>
                    <a href={`https://ropsten-etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferre">
                        <p className='text-white text-base '>from: {shortenAddress(addressFrom)}</p>
                    </a>
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