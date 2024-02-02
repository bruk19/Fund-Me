module.exports = async ({ getNamedAccounts, deployment }) => {
  const { depoy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
}