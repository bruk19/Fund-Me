const {neworkConfig} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployment }) => {
  const { depoy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId

  const ethUsdPriceFeedAddress = neworkConfig[chainId]["ethUsdPriceFeed"]

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [address],
    log: true
  })
}