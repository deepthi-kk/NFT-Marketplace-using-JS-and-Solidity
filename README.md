# NFT marketplace Application using Next.js

# Team Members

1. Prerna Garsole
2. Chaitanya Deepthi Kaki
3. Gayatri Yadkikar
4. Sumit Dutta


# Introduction to the problem statement:

● NFT will continue to gain prominence in 2022 and is growing as a new asset class in the crypto space. There should be an efficient exchange medium for NFTs.

● NFT marketplaces are focused on selling specific assets. For example, the Valuables NFT marketplace allows users to buy and sell tweets.

● The possibilities of NFTs are endless, since they can be used to log ownership of any unique assets.

● In this Project we will develop a Full-Stack application using Next.js for NFT trading and secure transactions via blockchain.

# Abstract:

Non-fungible tokens (NFT) are an emerging technology that has already seen a ton of use cases outside the typical NFT application – which right now is mostly for trading artworks and game characters. At its core, an NFT is a tool that creates non-fungible digital assets using blockchain. There are two major benefits that can be gained from these features. Primarily, NFT offers the certification of ownership. With blockchain-based NFT, the record of ownership is protected from changes or modification. This makes a digital asset to only have one official owner at a time. Subsequently, consumers do not have to worry about the risk of counterfeiting.

# Project Report
https://github.com/sjsucmpe272SP22/NFT-Marketplace/blob/main/IEEE%20Project%20Report/ProjectReport_CMPE272_Spring2022_Team13.pdf


# Personna:

The Collectors, Investors and Businesses are different users who are willing to either sell or purchase distinctive assets.

# Tagline:

NFT marketplace where traders can buy and sell the NFT tokens via the usage of Ethereum Web Client Library(Ethers.js) ,Solidity development environment (Hardhat) and track the ownership of digital assets.



# The STACK used:

Web Application Framework - Next.js

Solidity Development Environment - Hardhat

File Storage - IPFS

Ethereum Web Client Library - Ethers.js


# Prerequisites:

Node.js version 16.14.0 or greater should be installed on your machine.

Metamask wallet extension installed as a browser extension


# Approach/About project:

The Web application is developed using Next.js and for the Authentication we use Metamask and Third webhooks.

NFT is a solution to Digital Scarcity. When a user puts an item for sale, the ownership of the item will be transferred from the creator to the marketplace. 

When a user purchases an item, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.

The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.



# Architecture

![image](https://user-images.githubusercontent.com/99928364/168698253-4fbff273-a100-4e82-a31a-4414570382c2.png)



# The problems solved by NFT marketplace:

Duplicate Asset Problem: Due to non fungibility of NFT's duplication of assets is not possible.

No Tampering of Data: As the data is stored on the blockchain no one can easily tamper the data.

Quick Transactions from Polygon: Polygon provided us with quick transaction speed which helps to boast the user experience.

Ownership Record Maintainance: Ownership can be tracked easily as smart contract passes the ownership from the seller to buyer directly.

Data Storage problem of Blockchain: Blockchain can't be used for storing media files for media assets in an efficient manner, so we used IPFS for digital assets.
	


# The Future Scope : How NFTs Will Change the World

1. State of the Art
The meteoric rise of NFTs in the art world has inevitably sparked debate about what makes art valuable and the nature of ownership.

2. New era in gaming where the gamers actually own their own assets.

3. Raise the Fundraising Bar 
With the world coming to terms with the benefits of tokenization, fundraising has emerged as a necessary outcome of NFTs.

4. Social Communities
Their has been an huge and a sudden rise in Instagram or Twitter


# Reasons to buy an NFT, here are some of the main reasons:

-Brand Perks

-Collectability

-Entertainment/Utility

-Investment Opportunities

-Likeability


# NFT Marketplace

![image](https://user-images.githubusercontent.com/99928364/168698028-631c1a6f-2489-46cf-9995-2815cb458b8f.png)



# Project setup

To get started, we'll create a new Next.js app. To do so, open your terminal. Create or change into a new empty directory and run the following command.

![image](https://user-images.githubusercontent.com/99928364/167018614-639e902f-d975-4c12-b14b-edf099f3f833.png)


Next, change into the new directory and install the dependencies using a package manager like npm, yarn, or pnpm:

![image](https://user-images.githubusercontent.com/99928364/167018744-217093ac-8e55-4f8e-9a99-cf16f46436ce.png)


**Setting up Tailwind CSS**

![image](https://user-images.githubusercontent.com/99928364/167018984-196df45e-6c1b-4c2a-a6f1-329562ed4808.png)

Next, we will create the configuration files needed for Tailwind to work with Next.js (tailwind.config.js and postcss.config.js) by running the following command:

![image](https://user-images.githubusercontent.com/99928364/167019117-c25453e2-84f4-415b-966e-35548283c0da.png)

Next, configure your template content paths in tailwind.config.js:

![image](https://user-images.githubusercontent.com/99928364/167019224-0ff51b1a-f01e-4f7f-a14e-09e2c43c5063.png)


**Configuring Hardhat**

Next, initialize a new Hardhat development environment from the root of your project:

![image](https://user-images.githubusercontent.com/99928364/167019311-be9456d4-e07b-447f-b1ab-d375aef857b3.png)

Now you should see the following files and folders created for you in your root directory:

hardhat.config.js - The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file.

scripts - A folder containing a script named sample-script.js that will deploy your smart contract when executed

test - A folder containing an example testing script

contracts - A folder holding an example Solidity smart contract

Next, update the configuration at hardhat.config.js with the following:

![image](https://user-images.githubusercontent.com/99928364/167019497-f645d3bb-8bc9-4657-9708-18a30e40a510.png)


# Running the project

Open your terminal and run the following command:

![image](https://user-images.githubusercontent.com/99928364/167020384-f4c6b631-3c23-40a7-8d25-b67d77ac57de.png)

This should create a local network with 20 accounts.

![image](https://user-images.githubusercontent.com/99928364/167020456-ec0bacd3-3b10-45f6-a081-312594506a48.png)

Next, keep the node running and open a separate terminal window to deploy the contract.

In a separate window, run the following command:

![image](https://user-images.githubusercontent.com/99928364/167020527-347ca637-c94b-4c8c-931a-a17201f84f01.png)

When the deployment is complete, the CLI should print out the address of the contract that was deployed:

![image](https://user-images.githubusercontent.com/99928364/167020596-9a6b7b75-e893-4ce1-8a62-ab0e93c7debd.png)


# Importing accounts into MetaMask

You can import the accounts created by the node into your Metamask wallet to try out in the app.

Each of these accounts is seeded with 10000 ETH.

To import one of these accounts, first switch your MetaMask wallet network to Localhost 8545.

![image](https://user-images.githubusercontent.com/99928364/167020856-5fbb7813-1684-488b-a764-8b4f4e9b3f0b.png)

Next, in MetaMask click on Import Account from the accounts menu:

![image](https://user-images.githubusercontent.com/99928364/167020960-5f445a9d-5695-4dae-b207-5b82428ef5d2.png)

Copy then paste one of the Private Keys logged out by the CLI and click Import. Once the account is imported, you should see some the Eth in the account:

![image](https://user-images.githubusercontent.com/99928364/167021055-375d0b61-be42-43f0-9b26-b22094d37b47.png)


# Running the app

Now we can test out the app!

To start the app, run the following command in your CLI:

![image](https://user-images.githubusercontent.com/99928364/167021159-175d0604-c25c-4c81-8333-5491435d7461.png)

To test everything out, try listing an item for sale, then switching to another account and purchasing it.





