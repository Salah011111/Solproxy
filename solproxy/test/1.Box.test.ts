/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 09:47:44
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 09:51:59
 * @FilePath: \solproxy\test\1.Box.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box", function () {
  let box:Contract;

  beforeEach(async function () {
    console.log('process.env.PRIVATE_KEY ',process.env.PRIVATE_KEY)
    const Box = await ethers.getContractFactory("Box")
    box = await Box.deploy()
    await box.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve()).to.equal(BigNumber.from('42'))

    await box.store(100)
    expect(await box.retrieve()).to.equal(BigNumber.from('100'))
  })
})