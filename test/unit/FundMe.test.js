const { getNamedAccounts, deployments, ethers } = require("hardhat")
const {assert, expect} = require("chai")

describe("FundMe", async function () {
  let fundMe
  let deployer
  let mockV3Aggregator
  beforeEach(async function (){
    deployer = (await getNamedAccounts())
    await deployments.fixture(["all"])
    fundMe = await ethers.getContractAt("FundMe", deployer.deployer)
    mockV3Aggregator = await ethers.getContractAt("MockV3Aggregator", deployer.deployer)
  })
  describe("constructor", async function() {
    it("sets the aggregator addresses correctly", async function () {
      const response = await fundMe.priceFeed()
      assert.equal(response, mockV3Aggregator.address)
    })
  })

  describe("fund", async function () {
    it("Fails if you don't send enough ETH", async function () {
      await expect(fundMe.fund()).to.be.revertedWith("you need to spend more ETH!")
    })
  })
})