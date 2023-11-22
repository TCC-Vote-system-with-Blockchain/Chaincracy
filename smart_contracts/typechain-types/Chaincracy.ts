/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Chaincracy {
  export type CandidatoStruct = {
    nomeCandidato: string;
    numero: BigNumberish;
    votos: BigNumberish;
    img: string;
  };

  export type CandidatoStructOutput = [
    nomeCandidato: string,
    numero: bigint,
    votos: bigint,
    img: string
  ] & { nomeCandidato: string; numero: bigint; votos: bigint; img: string };

  export type CargoStruct = { nomeCargo: string; maxNumTam: BigNumberish };

  export type CargoStructOutput = [nomeCargo: string, maxNumTam: bigint] & {
    nomeCargo: string;
    maxNumTam: bigint;
  };
}

export interface ChaincracyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "TotalVotos"
      | "TotalVotosDoCargo"
      | "TotalVotosporCargo"
      | "adicionarCandidato"
      | "adicionarCargo"
      | "candidatos"
      | "cargoCandidatos"
      | "cargoNumeroMaximo"
      | "cargos"
      | "comecarVotacao"
      | "finalizarVotacao"
      | "getCandidatoDoCargo"
      | "getCandidatosDoCargo"
      | "getCandidatosIdsDoCargo"
      | "getInformacaoCandidato"
      | "getListaDeCandidatoPorCargoPrimerioVencedor"
      | "getNomeCandidato"
      | "hasCalled"
      | "isOwner"
      | "listarCargos"
      | "owner"
      | "prepararVotacao"
      | "statusEleicao"
      | "statusVotacao"
      | "votar"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "VotoRegistrado"): EventFragment;

  encodeFunctionData(
    functionFragment: "TotalVotos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TotalVotosDoCargo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "TotalVotosporCargo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adicionarCandidato",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "adicionarCargo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "candidatos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cargoCandidatos",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cargoNumeroMaximo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cargos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "comecarVotacao",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizarVotacao",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidatoDoCargo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidatosDoCargo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidatosIdsDoCargo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInformacaoCandidato",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getListaDeCandidatoPorCargoPrimerioVencedor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNomeCandidato",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasCalled",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "listarCargos",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepararVotacao",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "statusEleicao",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "statusVotacao",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votar",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "TotalVotos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TotalVotosDoCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TotalVotosporCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adicionarCandidato",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adicionarCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "candidatos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cargoCandidatos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cargoNumeroMaximo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cargos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "comecarVotacao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizarVotacao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCandidatoDoCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCandidatosDoCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCandidatosIdsDoCargo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInformacaoCandidato",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getListaDeCandidatoPorCargoPrimerioVencedor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNomeCandidato",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasCalled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listarCargos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prepararVotacao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "statusEleicao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "statusVotacao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "votar", data: BytesLike): Result;
}

export namespace VotoRegistradoEvent {
  export type InputTuple = [candidatoId: BigNumberish];
  export type OutputTuple = [candidatoId: bigint];
  export interface OutputObject {
    candidatoId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Chaincracy extends BaseContract {
  connect(runner?: ContractRunner | null): Chaincracy;
  waitForDeployment(): Promise<this>;

  interface: ChaincracyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  TotalVotos: TypedContractMethod<[], [bigint], "view">;

  TotalVotosDoCargo: TypedContractMethod<
    [_cargoId: BigNumberish],
    [bigint],
    "view"
  >;

  TotalVotosporCargo: TypedContractMethod<
    [_cargoId: BigNumberish],
    [bigint[]],
    "view"
  >;

  adicionarCandidato: TypedContractMethod<
    [
      _cargoId: BigNumberish,
      _numero: BigNumberish,
      _nomeCandidato: string,
      _img: string
    ],
    [void],
    "nonpayable"
  >;

  adicionarCargo: TypedContractMethod<
    [_nomeCargo: string, _maxNumTam: BigNumberish],
    [void],
    "nonpayable"
  >;

  candidatos: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, string] & {
        nomeCandidato: string;
        numero: bigint;
        votos: bigint;
        img: string;
      }
    ],
    "view"
  >;

  cargoCandidatos: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  cargoNumeroMaximo: TypedContractMethod<
    [_nomeCargo: string],
    [bigint],
    "view"
  >;

  cargos: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { nomeCargo: string; maxNumTam: bigint }],
    "view"
  >;

  comecarVotacao: TypedContractMethod<[], [void], "nonpayable">;

  finalizarVotacao: TypedContractMethod<[], [void], "nonpayable">;

  getCandidatoDoCargo: TypedContractMethod<
    [candidateNumber: BigNumberish, _cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput],
    "view"
  >;

  getCandidatosDoCargo: TypedContractMethod<
    [_cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput[]],
    "view"
  >;

  getCandidatosIdsDoCargo: TypedContractMethod<
    [_cargoId: BigNumberish],
    [bigint[]],
    "view"
  >;

  getInformacaoCandidato: TypedContractMethod<
    [_numero: BigNumberish],
    [Chaincracy.CandidatoStructOutput],
    "view"
  >;

  getListaDeCandidatoPorCargoPrimerioVencedor: TypedContractMethod<
    [_cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput[]],
    "view"
  >;

  getNomeCandidato: TypedContractMethod<
    [_candidatoId: BigNumberish],
    [string],
    "view"
  >;

  hasCalled: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;

  isOwner: TypedContractMethod<[], [void], "view">;

  listarCargos: TypedContractMethod<
    [],
    [Chaincracy.CargoStructOutput[]],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  prepararVotacao: TypedContractMethod<[], [void], "nonpayable">;

  statusEleicao: TypedContractMethod<[], [string], "view">;

  statusVotacao: TypedContractMethod<[], [string], "view">;

  votar: TypedContractMethod<
    [_numero: BigNumberish, _cargoId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "TotalVotos"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "TotalVotosDoCargo"
  ): TypedContractMethod<[_cargoId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "TotalVotosporCargo"
  ): TypedContractMethod<[_cargoId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "adicionarCandidato"
  ): TypedContractMethod<
    [
      _cargoId: BigNumberish,
      _numero: BigNumberish,
      _nomeCandidato: string,
      _img: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "adicionarCargo"
  ): TypedContractMethod<
    [_nomeCargo: string, _maxNumTam: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "candidatos"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, string] & {
        nomeCandidato: string;
        numero: bigint;
        votos: bigint;
        img: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "cargoCandidatos"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "cargoNumeroMaximo"
  ): TypedContractMethod<[_nomeCargo: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "cargos"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { nomeCargo: string; maxNumTam: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "comecarVotacao"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "finalizarVotacao"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getCandidatoDoCargo"
  ): TypedContractMethod<
    [candidateNumber: BigNumberish, _cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCandidatosDoCargo"
  ): TypedContractMethod<
    [_cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCandidatosIdsDoCargo"
  ): TypedContractMethod<[_cargoId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getInformacaoCandidato"
  ): TypedContractMethod<
    [_numero: BigNumberish],
    [Chaincracy.CandidatoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getListaDeCandidatoPorCargoPrimerioVencedor"
  ): TypedContractMethod<
    [_cargoId: BigNumberish],
    [Chaincracy.CandidatoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNomeCandidato"
  ): TypedContractMethod<[_candidatoId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "hasCalled"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isOwner"
  ): TypedContractMethod<[], [void], "view">;
  getFunction(
    nameOrSignature: "listarCargos"
  ): TypedContractMethod<[], [Chaincracy.CargoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "prepararVotacao"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "statusEleicao"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "statusVotacao"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "votar"
  ): TypedContractMethod<
    [_numero: BigNumberish, _cargoId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "VotoRegistrado"
  ): TypedContractEvent<
    VotoRegistradoEvent.InputTuple,
    VotoRegistradoEvent.OutputTuple,
    VotoRegistradoEvent.OutputObject
  >;

  filters: {
    "VotoRegistrado(uint256)": TypedContractEvent<
      VotoRegistradoEvent.InputTuple,
      VotoRegistradoEvent.OutputTuple,
      VotoRegistradoEvent.OutputObject
    >;
    VotoRegistrado: TypedContractEvent<
      VotoRegistradoEvent.InputTuple,
      VotoRegistradoEvent.OutputTuple,
      VotoRegistradoEvent.OutputObject
    >;
  };
}
