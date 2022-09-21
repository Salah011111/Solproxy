/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:17:44
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 10:17:58
 * @FilePath: \solproxy\test\4.BoxProxyV2.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box (proxy) V2", function () {
    let box:Contract
    let boxV2:Contract

    beforeEach(async function () {
        const Box = await ethers.getContractFactory("Box")
        const BoxV2 = await ethers.getContractFactory("BoxV2")

        //initilize with 42
        box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
        // console.log(box.address," box/proxy")
        // console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
        // console.log(await upgrades.erc1967.getAdminAddress(box.address), " getAdminAddress")   

        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2)
        // console.log(boxV2.address," box/proxy after upgrade")
        // console.log(await upgrades.erc1967.getImplementationAddress(boxV2.address)," getImplementationAddress after upgrade")
        // console.log(await upgrades.erc1967.getAdminAddress(boxV2.address)," getAdminAddress after upgrade")   
    })

    it("should retrieve value previously stored and increment correctly", async function () {
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('42'))

        await boxV2.increment()
        //result = 42 + 1 = 43
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('43'))

        await boxV2.store(100)
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('100'))
    })

})