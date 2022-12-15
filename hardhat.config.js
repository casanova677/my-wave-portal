require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/1xpyKnFnl7JOQhcoHdldcQegQUGb7qhh",
      accounts: ["dfff8acca36bd06da28c257cd8de1ca9905ff9943534c0234b0077230c7154f6"],
    },
  },
};
