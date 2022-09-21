/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:35:48
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 10:36:08
 * @FilePath: \solproxy\test\5.BoxProxyV3.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box (proxy) V3 with name", function () {
    let box:Contract
    let boxV2:Contract
    let boxV3:Contract

    beforeEach(async function () {
        const Box = await ethers.getContractFactory("Box")
        const BoxV2 = await ethers.getContractFactory("BoxV2")
        const BoxV3 =  await ethers.getContractFactory("BoxV3")

        //initialize with 42
        box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2)
        boxV3 = await upgrades.upgradeProxy(box.address, BoxV3)
    })

    it("should retrieve value previously stored and increment correctly", async function () {
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('42'))
        await boxV3.increment()
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('43'))

        await boxV2.store(100)
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('100'))
    })

    it("should set name correctly in V3", async function () {
        expect(await boxV3.name()).to.equal("")

        const boxname="my Box V3"
        await boxV3.setName(boxname)
        expect(await boxV3.name()).to.equal(boxname)
    })

})