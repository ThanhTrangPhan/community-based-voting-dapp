import TokenContract from '../abi/TokenContract.json'
import VotingContract from '../abi/VotingContract.json'
import Controller from '../abi/Controller.json'
import nodeOp from '../abi/NodeOperator.json'

export const tokenContractInstance = (web3) => {
    return new web3.eth.Contract(
        TokenContract.abi,
        "0x360f303647d3e89CB8222eFC10a68b463884881d"
    )
}

export const votingContractInstance = web3 => {
    return new web3.eth.Contract(
        VotingContract.abi,
        "0x6D657355a6C54B07eC5277Bd47aE2c9342a4Dac1"
    )
}

export const controllerInstance = (web3) => {
    console.log(web3);
    console.log(controller);
    return new web3.eth.Contract(
        Controller, // abi of SC token
        "0x027393deb73ff0d055f2c5769ee708faf1df0687" // address of  token
    )
}

export const operatorInstance = (web3) => {
    console.log(web3);
    console.log(nodeOp);
    return new web3.eth.Contract(
        nodeOp, // abi of SC token
        "0x68a231F23D539E3ca6cbCEDcAd8778C325a0219c" // address of  token
    )
}
