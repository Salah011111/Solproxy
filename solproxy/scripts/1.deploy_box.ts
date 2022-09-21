/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 09:47:44
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 14:43:31
 * @FilePath: \solproxy\scripts\1.deploy_box.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box...")
  const box = await upgrades.deployProxy(Box,[42], { initializer: 'store' })

  console.log(box.address," box(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(box.address)," getAdminAddress")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})