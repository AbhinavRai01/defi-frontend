import getWeb3 from './web3';
import EnergyChainABI from './contracts/EnergyChain.json';
import CarbonCreditMarketplaceABI from './contracts/CarbonCreditMarketplace.json';

const contractAddresses = {
  energyChain: "0xYourEnergyChainContractAddress",
  marketplace: "0xYourMarketplaceContractAddress"
};

export const loadContracts = async () => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  
  const energyChainContract = new web3.eth.Contract(
    EnergyChainABI.abi,
    contractAddresses.energyChain
  );

  const marketplaceContract = new web3.eth.Contract(
    CarbonCreditMarketplaceABI.abi,
    contractAddresses.marketplace
  );

  return { web3, accounts, energyChainContract, marketplaceContract };
};
