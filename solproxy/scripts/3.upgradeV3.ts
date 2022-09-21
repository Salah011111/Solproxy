/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:36:59
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 14:42:42
 * @FilePath: \solproxy\scripts\3.upgradeV3.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0xd67D471D3F7192a964d92E37590c60748810fb30'
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'
async function main() {
    console.log(proxyAddress," original Box(proxy) address")
    const BoxV3 = await ethers.getContractFactory("BoxV3")
    console.log("upgrade to BoxV3...")
    const boxV3 = await upgrades.upgradeProxy(proxyAddress, BoxV3)
    console.log(boxV3.address," BoxV3 address(should be the same)")

    console.log(await upgrades.erc1967.getImplementationAddress(boxV3.address)," getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(boxV3.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})