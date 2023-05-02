import { MudChain } from "./types";

const frontier = {
  id: 42,
  name: "Frontier",
  network: "frontier",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9933"],
      webSocket: ["ws://127.0.0.1:9944"],
    },
    public: {
      http: ["http://127.0.0.1:9933"],
      webSocket: ["ws://127.0.0.1:9944"],
    },
  },
  modeUrl: undefined,
  faucetUrl: undefined,
} as const satisfies MudChain;

export default frontier;
