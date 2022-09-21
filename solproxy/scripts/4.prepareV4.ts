/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 10:46:01
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 14:42:46
 * @FilePath: \solproxy\scripts\4.prepareV4.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0xd67D471D3F7192a964d92E37590c60748810fb30'
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'
async function main() {
    console.log(proxyAddress," original Box(proxy) address")
    const BoxV4 = await ethers.getContractFactory("BoxV4")
    console.log("Preparing upgrade to BoxV4...");
    const boxV4Address = await upgrades.prepareUpgrade(proxyAddress, BoxV4);
    console.log(boxV4Address, " BoxV4 implementation contract address")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})