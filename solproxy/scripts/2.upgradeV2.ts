/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:30:14
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 14:42:29
 * @FilePath: \solproxy\test\2.upgradeV2.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0xd67D471D3F7192a964d92E37590c60748810fb30'

    async function main() {
        console.log(proxyAddress," original Box(proxy) address")
        const BoxV2 = await ethers.getContractFactory("BoxV2")
        console.log("upgrade to BoxV2...")
        const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2)
        console.log(boxV2.address," BoxV2 address(should be the same)")

        // console.log(await upgrades.erc1967.getImplementationAddress(boxV2.address)," getImplementationAddress")
        // console.log(await upgrades.erc1967.getAdminAddress(boxV2.address), " getAdminAddress")
    }

    main().catch((error) => {
        console.error(error)
        process.exitCode = 1
    })
