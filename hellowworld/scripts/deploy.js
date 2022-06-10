const { ethers } = require("hardhat");

async function main(){
    const hellowworld = await ethers.getContractFactory("Heloowworld");

    const hellow_world = await hellowworld.deploy("hellow world");
    console.log("contract deployed to address: ", hellow_world.address
    );
}

main()
.then(()=> process.exit(0))
.catch(error=>{
    console.error(error);
    process.exit(1);
});