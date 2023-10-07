/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GreeterInterface extends Interface {
  getFunction(
    nameOrSignature: "greet" | "greeting" | "setGreeting" | "throwError"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "greeting", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
  encodeFunctionData(
    functionFragment: "throwError",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greeting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "throwError", data: BytesLike): Result;
}

export interface Greeter extends BaseContract {
  connect(runner?: ContractRunner | null): Greeter;
  waitForDeployment(): Promise<this>;

  interface: GreeterInterface;

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

  greet: TypedContractMethod<[], [string], "view">;

  greeting: TypedContractMethod<[], [string], "view">;

  setGreeting: TypedContractMethod<[_greeting: string], [void], "nonpayable">;

  throwError: TypedContractMethod<[], [void], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "greet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "greeting"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setGreeting"
  ): TypedContractMethod<[_greeting: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "throwError"
  ): TypedContractMethod<[], [void], "view">;

  filters: {};
}
