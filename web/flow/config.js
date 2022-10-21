import * as fcl from "@onflow/fcl";

fcl
  .config()
  .put("app.detail.title", "Flow Name Service")
  .put("app.detail.icon", "https://placekitten.com/g/200/200")
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
  // .put("flow.network", "testnet")
  .put("0xDomains", "0x3871904bdae8e43f")
  .put("0xNonFungibleToken", "0x631e88ae7f1d7c20")
  .put("0xFungibleToken", "0x9a0766d93b6608b7");

// import { config } from "@onflow/fcl";

// config({
//   "app.detail.title": "Flow Name Service",
//   "app.detail.icon": "https://placekitten.com/g/200/200",
//   "accessNode.api": "https://rest-testnet.onflow.org",
//   "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
//   "0xDomains": "0x3871904bdae8e43f",
//   "0xNonFungibleToken": "0x631e88ae7f1d7c20",
//   "0xFungibleToken": "0x9a0766d93b6608b7",
// });
