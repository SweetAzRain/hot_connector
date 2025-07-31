import { NearWallet } from "./";

export interface IPropsWalletAction {
  network: "testnet" | "mainnet";
  wallet: NearWallet;
}
