const main = async () => {
  const TransactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await TransactionsFactory.deploy();

  await transactionsContract.deployed();



  console.log("Transactions Address:", transactionsContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}


runMain();