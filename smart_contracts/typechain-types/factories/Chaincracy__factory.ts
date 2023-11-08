/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Chaincracy, ChaincracyInterface } from "../Chaincracy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "candidatoId",
        type: "uint256",
      },
    ],
    name: "VotoRegistrado",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cargoId",
        type: "uint256",
      },
    ],
    name: "TotalVotosporCargo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cargoId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numero",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_nomeCandidato",
        type: "string",
      },
      {
        internalType: "string",
        name: "_img",
        type: "string",
      },
    ],
    name: "adicionarCandidato",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_nomeCargo",
        type: "string",
      },
    ],
    name: "adicionarCargo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "candidatos",
    outputs: [
      {
        internalType: "string",
        name: "nomeCandidato",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numero",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votos",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cargoCandidatos",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cargos",
    outputs: [
      {
        internalType: "string",
        name: "nomeCargo",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comecarVotacao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizarVotacao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cargoId",
        type: "uint256",
      },
    ],
    name: "getCandidatosDoCargo",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cargoId",
        type: "uint256",
      },
    ],
    name: "getCandidatosIdsDoCargo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numero",
        type: "uint256",
      },
    ],
    name: "getInformacaoCandidato",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nomeCandidato",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "numero",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votos",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "img",
            type: "string",
          },
        ],
        internalType: "struct Chaincracy.Candidato",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_candidatoId",
        type: "uint256",
      },
    ],
    name: "getNomeCandidato",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "hasCalled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "listarCargos",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nomeCargo",
            type: "string",
          },
        ],
        internalType: "struct Chaincracy.Cargo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "statusEleicao",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "statusVotacao",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numero",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cargoId",
        type: "uint256",
      },
    ],
    name: "votar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052600b60809081526a1b9bdd17dcdd185c9d195960aa1b60a0526003906200002c9082620000f8565b503480156200003a57600080fd5b50600280546001600160a01b03191633179055620001c4565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200007e57607f821691505b6020821081036200009f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000f357600081815260208120601f850160051c81016020861015620000ce5750805b601f850160051c820191505b81811015620000ef57828155600101620000da565b5050505b505050565b81516001600160401b0381111562000114576200011462000053565b6200012c8162000125845462000069565b84620000a5565b602080601f8311600181146200016457600084156200014b5750858301515b600019600386901b1c1916600185901b178555620000ef565b600085815260208120601f198616915b82811015620001955788860151825594840194600190910190840162000174565b5085821015620001b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611bbb80620001d46000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063b503c3e711610071578063b503c3e714610279578063bc243e6d1461028c578063c298956214610294578063e7d59662146102a7578063f85174cc146102c757600080fd5b80638da5cb5b146102035780638f023f851461022e5780639cf8dd5514610251578063af10f05e1461026657600080fd5b80634fa5a16f116100e95780634fa5a16f1461019f57806358564860146101b25780635fb9afba146101c7578063851a6c28146101e85780638a132f72146101fb57600080fd5b80630ca735371461011b5780630ee24c831461012557806327a22ec11461014e57806333b2e20c1461018c575b600080fd5b6101236102e7565b005b610138610133366004611525565b61034c565b604051610145919061153e565b60405180910390f35b61017c61015c366004611582565b600560209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001610145565b61012361019a36600461165d565b61036b565b6101236101ad3660046116d4565b610607565b6101ba6107ca565b6040516101459190611746565b6101da6101d5366004611759565b61085c565b604051908152602001610145565b6101ba6101f6366004611525565b610a38565b610123610ae6565b600254610216906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b61024161023c366004611525565b610bb1565b604051610145949392919061178e565b610259610d01565b60405161014591906117ca565b6101da6102743660046116d4565b610e64565b610138610287366004611525565b610e95565b6101ba610ef7565b6101ba6102a2366004611525565b610f85565b6102ba6102b5366004611525565b611031565b6040516101459190611834565b6102da6102d5366004611525565b611187565b6040516101459190611889565b6002546001600160a01b0316331461031a5760405162461bcd60e51b8152600401610311906118df565b60405180910390fd5b60408051808201909152600b81526a696e5f70726f677265737360a81b602082015260039061034990826119ae565b50565b6060600061035983610e95565b9050610364816113b1565b9392505050565b6002546001600160a01b031633146103955760405162461bcd60e51b8152600401610311906118df565b6040516a696e5f70726f677265737360a81b6020820152602b016040516020818303038152906040528051906020012060036040516020016103d79190611a6e565b604051602081830303815290604052805190602001201461040a5760405162461bcd60e51b815260040161031190611ae4565b60005b6001548110156104e257836001828154811061042b5761042b611b11565b906000526020600020906004020160010154036104d057600061044d86610e95565b905060005b81518110156104cd578282828151811061046e5761046e611b11565b6020026020010151036104bb5760405162461bcd60e51b81526020600482015260156024820152746e756d65726f206a61206361646173747261646f2160581b6044820152606401610311565b806104c581611b3d565b915050610452565b50505b806104da81611b3d565b91505061040d565b506000546104f290600190611b56565b8411156105375760405162461bcd60e51b8152602060048201526013602482015272636172676f206e616f206578697374656e746560681b6044820152606401610311565b6040805160808101825283815260208101859052600091810182905260608101839052600180548082018255925280519091829160049091027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190819061059f90826119ae565b506020820151600182015560408201516002820155606082015160038201906105c890826119ae565b505060018054600092506105dc9190611b56565b6000968752600460209081526040882080546001810182559089529720909601959095555050505050565b6040516a696e5f70726f677265737360a81b6020820152602b016040516020818303038152906040528051906020012060036040516020016106499190611a6e565b604051602081830303815290604052805190602001201461067c5760405162461bcd60e51b815260040161031190611ae4565b33600090815260056020908152604080832084845290915290205460ff16156107015760405162461bcd60e51b815260206004820152603160248201527f566f746f206a61207265676973747261646f20706f722065737361206361727460448201527065697261206e6573746520636172676f2160781b6064820152608401610311565b600061070d838361147b565b90506001818154811061072257610722611b11565b60009182526020822060026004909202010180549161074083611b3d565b91905055507f652eeaa57ccbb2f4fa0be02c6b0e7c5fadf5452a75bbb3fccc36fea46443156c6001828154811061077957610779611b11565b90600052602060002090600402016001015460405161079a91815260200190565b60405180910390a15033600090815260056020908152604080832093835292905220805460ff1916600117905550565b6060600380546107d990611925565b80601f016020809104026020016040519081016040528092919081815260200182805461080590611925565b80156108525780601f1061082757610100808354040283529160200191610852565b820191906000526020600020905b81548152906001019060200180831161083557829003601f168201915b5050505050905090565b6002546000906001600160a01b031633146108895760405162461bcd60e51b8152600401610311906118df565b6040516a696e5f70726f677265737360a81b6020820152602b016040516020818303038152906040528051906020012060036040516020016108cb9190611a6e565b60405160208183030381529060405280519060200120146108fe5760405162461bcd60e51b815260040161031190611ae4565b60005b6000548110156109cc578260405160200161091c9190611b69565b604051602081830303815290604052805190602001206000828154811061094557610945611b11565b906000526020600020016000016040516020016109629190611a6e565b60405160208183030381529060405280519060200120036109ba5760405162461bcd60e51b8152602060048201526012602482015271436172676f206a61206578697374656e746560701b6044820152606401610311565b806109c481611b3d565b915050610901565b50604080516020810190915282815260008054600181018255908052815182917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301908190610a1b90826119ae565b505060008054909150610a3090600190611b56565b949350505050565b60008181548110610a4857600080fd5b600091825260209091200180549091508190610a6390611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8f90611925565b8015610adc5780601f10610ab157610100808354040283529160200191610adc565b820191906000526020600020905b815481529060010190602001808311610abf57829003601f168201915b5050505050905081565b6040516a696e5f70726f677265737360a81b6020820152602b01604051602081830303815290604052805190602001206003604051602001610b289190611a6e565b6040516020818303038152906040528051906020012014610b5b5760405162461bcd60e51b815260040161031190611ae4565b6002546001600160a01b03163314610b855760405162461bcd60e51b8152600401610311906118df565b604080518082019091526008815267199a5b9a5cda195960c21b602082015260039061034990826119ae565b60018181548110610bc157600080fd5b9060005260206000209060040201600091509050806000018054610be490611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1090611925565b8015610c5d5780601f10610c3257610100808354040283529160200191610c5d565b820191906000526020600020905b815481529060010190602001808311610c4057829003601f168201915b505050505090806001015490806002015490806003018054610c7e90611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610caa90611925565b8015610cf75780601f10610ccc57610100808354040283529160200191610cf7565b820191906000526020600020905b815481529060010190602001808311610cda57829003601f168201915b5050505050905084565b6040516a696e5f70726f677265737360a81b6020820152606090602b01604051602081830303815290604052805190602001206003604051602001610d469190611a6e565b6040516020818303038152906040528051906020012014610d795760405162461bcd60e51b815260040161031190611ae4565b6000805480602002602001604051908101604052809291908181526020016000905b82821015610e5b57838290600052602060002001604051806020016040529081600082018054610dca90611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610df690611925565b8015610e435780601f10610e1857610100808354040283529160200191610e43565b820191906000526020600020905b815481529060010190602001808311610e2657829003601f168201915b50505050508152505081526020019060010190610d9b565b50505050905090565b60046020528160005260406000208181548110610e8057600080fd5b90600052602060002001600091509150505481565b600081815260046020908152604091829020805483518184028101840190945280845260609392830182828015610eeb57602002820191906000526020600020905b815481526020019060010190808311610ed7575b50505050509050919050565b60038054610f0490611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3090611925565b8015610f7d5780601f10610f5257610100808354040283529160200191610f7d565b820191906000526020600020905b815481529060010190602001808311610f6057829003601f168201915b505050505081565b606060018281548110610f9a57610f9a611b11565b90600052602060002090600402016000018054610fb690611925565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe290611925565b8015610eeb5780601f1061100457610100808354040283529160200191610eeb565b820191906000526020600020905b8154815290600101906020018083116110125750939695505050505050565b60015460609060009067ffffffffffffffff811115611052576110526115ba565b60405190808252806020026020018201604052801561108557816020015b60608152602001906001900390816110705790505b509050600061109384610e95565b905060005b815181101561117e57600181815481106110b4576110b4611b11565b906000526020600020906004020160000180546110d090611925565b80601f01602080910402602001604051908101604052809291908181526020018280546110fc90611925565b80156111495780601f1061111e57610100808354040283529160200191611149565b820191906000526020600020905b81548152906001019060200180831161112c57829003601f168201915b505050505083828151811061116057611160611b11565b6020026020010181905250808061117690611b3d565b915050611098565b50909392505050565b6111b26040518060800160405280606081526020016000815260200160008152602001606081525090565b60005b6001548110156113685782600182815481106111d3576111d3611b11565b9060005260206000209060040201600101540361135657600181815481106111fd576111fd611b11565b906000526020600020906004020160405180608001604052908160008201805461122690611925565b80601f016020809104026020016040519081016040528092919081815260200182805461125290611925565b801561129f5780601f106112745761010080835404028352916020019161129f565b820191906000526020600020905b81548152906001019060200180831161128257829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820180546112cc90611925565b80601f01602080910402602001604051908101604052809291908181526020018280546112f890611925565b80156113455780601f1061131a57610100808354040283529160200191611345565b820191906000526020600020905b81548152906001019060200180831161132857829003601f168201915b505050505081525050915050919050565b8061136081611b3d565b9150506111b5565b5060405162461bcd60e51b815260206004820152601860248201527f43616e64696461746f206e616f20656e636f6e747261646f00000000000000006044820152606401610311565b60606000825167ffffffffffffffff8111156113cf576113cf6115ba565b6040519080825280602002602001820160405280156113f8578160200160208202803683370190505b50905060005b835181101561147457600184828151811061141b5761141b611b11565b60200260200101518154811061143357611433611b11565b90600052602060002090600402016002015482828151811061145757611457611b11565b60209081029190910101528061146c81611b3d565b9150506113fe565b5092915050565b6000805b60015481101561136857836001828154811061149d5761149d611b11565b9060005260206000209060040201600101540361150d5760006114bf84610e95565b905060005b815181101561150a57828282815181106114e0576114e0611b11565b6020026020010151036114f85782935050505061151f565b8061150281611b3d565b9150506114c4565b50505b8061151781611b3d565b91505061147f565b92915050565b60006020828403121561153757600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156115765783518352928401929184019160010161155a565b50909695505050505050565b6000806040838503121561159557600080fd5b82356001600160a01b03811681146115ac57600080fd5b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126115e157600080fd5b813567ffffffffffffffff808211156115fc576115fc6115ba565b604051601f8301601f19908116603f01168101908282118183101715611624576116246115ba565b8160405283815286602085880101111561163d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561167357600080fd5b8435935060208501359250604085013567ffffffffffffffff8082111561169957600080fd5b6116a5888389016115d0565b935060608701359150808211156116bb57600080fd5b506116c8878288016115d0565b91505092959194509250565b600080604083850312156116e757600080fd5b50508035926020909101359150565b60005b838110156117115781810151838201526020016116f9565b50506000910152565b600081518084526117328160208601602086016116f6565b601f01601f19169290920160200192915050565b602081526000610364602083018461171a565b60006020828403121561176b57600080fd5b813567ffffffffffffffff81111561178257600080fd5b610a30848285016115d0565b6080815260006117a1608083018761171a565b85602084015284604084015282810360608401526117bf818561171a565b979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561182757878503603f190184528151518686526118148787018261171a565b95505092850192908501906001016117f1565b5092979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561182757603f1988860301845261187785835161171a565b9450928501929085019060010161185b565b6020815260008251608060208401526118a560a084018261171a565b905060208401516040840152604084015160608401526060840151601f198483030160808501526118d6828261171a565b95945050505050565b60208082526026908201527f4170656e6173206f20646f6e6f20706f64652066617a65722065737361206f7060408201526565726163616f60d01b606082015260800190565b600181811c9082168061193957607f821691505b60208210810361195957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156119a957600081815260208120601f850160051c810160208610156119865750805b601f850160051c820191505b818110156119a557828155600101611992565b5050505b505050565b815167ffffffffffffffff8111156119c8576119c86115ba565b6119dc816119d68454611925565b8461195f565b602080601f831160018114611a1157600084156119f95750858301515b600019600386901b1c1916600185901b1785556119a5565b600085815260208120601f198616915b82811015611a4057888601518255948401946001909101908401611a21565b5085821015611a5e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354611a7c81611925565b60018281168015611a945760018114611aa957611ad8565b60ff1984168752821515830287019450611ad8565b8760005260208060002060005b85811015611acf5781548a820152908401908201611ab6565b50505082870194505b50929695505050505050565b602080825260139082015272566f746163616f2066696e616c697a6164612160681b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611b4f57611b4f611b27565b5060010190565b8181038181111561151f5761151f611b27565b60008251611b7b8184602087016116f6565b919091019291505056fea2646970667358221220965a87719ff82de000a202512389e543d10de4793c5fa9763d5a3c67148d410564736f6c63430008130033";

type ChaincracyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChaincracyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Chaincracy__factory extends ContractFactory {
  constructor(...args: ChaincracyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Chaincracy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Chaincracy__factory {
    return super.connect(runner) as Chaincracy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChaincracyInterface {
    return new Interface(_abi) as ChaincracyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Chaincracy {
    return new Contract(address, _abi, runner) as unknown as Chaincracy;
  }
}
