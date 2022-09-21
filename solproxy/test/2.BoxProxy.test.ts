/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:04:13
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 10:04:27
 * @FilePath: \solproxy\test\2.BoxProxy.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box (proxy)", function () {
    let box:Contract

    beforeEach(async function () {
        const Box = await ethers.getContractFactory("Box")
        //initialize with 42
        box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
        })

    it("should retrieve value previously stored", async function () {    
        // console.log(box.address," box(proxy)")
        // console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
        // console.log(await upgrades.erc1967.getAdminAddress(box.address), " getAdminAddress")   

        expect(await box.retrieve()).to.equal(BigNumber.from('42'))

        await box.store(100)
        expect(await box.retrieve()).to.equal(BigNumber.from('100'))
    })

})