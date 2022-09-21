/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:11:52
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 10:12:05
 * @FilePath: \solproxy\test\3.BoxV2.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai"
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box V2", function () {
    let boxV2:Contract

    beforeEach(async function () {
        const BoxV2 = await ethers.getContractFactory("BoxV2")
        boxV2 = await BoxV2.deploy()
        await boxV2.deployed()
    });

    it("should retrieve value previously stored", async function () {
        await boxV2.store(42)
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('42'))

        await boxV2.store(100)
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('100'))
    });

    it('should increment value correctly', async function () {
        await boxV2.store(42)
        await boxV2.increment()
        expect(await boxV2.retrieve()).to.equal(BigNumber.from('43'))
    })

})