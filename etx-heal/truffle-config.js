const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks.
  // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
  // on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
    },
    test: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    alchemy: {
      provider : function() {
        return new HDWalletProvider(mnemonic, "https://eth-goerli.alchemyapi.io/v2/g5rpUpvN8EVa4q0r3trp-7HhAeAYP8e5");
      },
      network_id: 5,
      gas: 0xffffff,
      gasPrice: 0x100000,
      
    }
  }
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
