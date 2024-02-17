# web3-hello-ebooks
mkdir ebook_sales_app && cd ebook_sales_app
truffle init

truffle compile
truffle migrate --network rinkeby
npm install @truffle/hdwallet-provider
npm install dotenv
npm install