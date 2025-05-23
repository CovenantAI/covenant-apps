# CovenantAI Frontend

React-based dashboard for the CovenantAI yield‑aggregator on Starknet. The frontend is built to provide a sleek user interface.

---

## Features

* **ERC‑4626 Vault Interaction**: Deposit and withdraw tokens from the CovenantAI vault.
* **Real-Time Data**: Display current block, TVL, APY, and vault share price via starknet.js.
* **Animations**: Smooth, micro-interactions powered by Framer Motion.
* **Responsive Design**: Mobile‑first, fully responsive layouts.
* **Modular Components**: Reusable components and hooks.
* **Theming**: Dark and light mode support via Tailwind CSS.

## Getting Started

### Prerequisites

* Node.js v16+
* npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/CovenantAI/covenant-frontend.git
cd covenant-frontend

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start server
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173` to view the app. Any changes you make will hot-reload instantly.

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready assets will be in `dist/`. Serve them with any static file server.

## Usage Examples

### Fetching Vault Data

```ts
import { provider } from './lib/starknet';
import { Contract } from 'starknet';

const VAULT_ADDRESS = '0x...';
const VAULT_ABI = [ /* ERC‑4626 ABI */ ];

async function getVaultInfo() {
  const vault = new Contract(VAULT_ABI, VAULT_ADDRESS, provider);
  const totalAssets = await vault.totalAssets();
  const totalSupply = await vault.totalSupply();
  return { totalAssets, sharePrice: totalAssets / totalSupply };
}
```

## Scripts

* `npm run dev` / `yarn dev` – Start development server
* `npm run build` / `yarn build` – Build for production
* `npm run preview` / `yarn preview` – Preview built app

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is released under the [MIT License](./LICENSE).

---

Built with ❤️ by the CovenantAI early team.
