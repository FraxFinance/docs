# Frax `frxGov` Comptroller Safe Configuration Verification (Block `26401070`)

- **Pinned Block**: Ethereum Mainnet `26401070` (`0xcf55f6a42ae610c1f8766b5c2fb676d91f178469fa10ef777eccbb76f6506234`)
- **Primary Documentation Sources**:
  - `https://docs.frax.finance/governance/how-it-works.md` (`SHA-256: 40fd5635dd0f6b7c37a78e62ab7ed353212c9f26caa6ee5ecc838ece0408ef38`)
  - `https://docs.frax.finance/governance/advanced-concepts.md` (`SHA-256: f6e1e87e5bd40319151c08816fcbf6c36ad5b4e6a5fa5204cacb476fb792e45a`)

## 1. Verified On-Chain Comptroller Safe Table at Block `26401070` (`FR2`)

| Comptroller Safe | Contract Address | Threshold / Signers | Live `guard` (`0x4a20...34c8`) | Live `modules` (`getModulesPaginated`) | Associated Scope |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Main Comptroller Safe** | `0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27` | `3-of-5` | `0x0000000000000000000000000000000000000000` | `[]` | Owner of AMO Minter (`0xcf37B62109b537fa0Cb9A90Af4CA72f6fb85E241`, `frax_mint_cap = 700,000,000 FRAX`, timelock `0x8412...39CA` `172800s`) |
| **`frxETH` Comptroller Safe** | `0x8306300ffd616049FD7e4b0354a64Da835c1A81C` | `4-of-7` | `0x0000000000000000000000000000000000000000` | `[]` | `frxETH` Comptroller operations |
| **Fraxlend Comptroller Safe** | `0x168200cF227D4543302686124ac28aE0eaf2cA0B` | `3-of-6` | `0x0000000000000000000000000000000000000000` | `[]` | Fraxlend Comptroller (`FraxGuard` + `FraxGovernorAlpha` module detached at block `23041646`) |

## 2. No-Cost (`$0`) Private Engineering & Governance Provenance Handoff (`FR1`)

The full block-pinned historical provenance trace for `FR1` (Fraxlend Comptroller Safe `0x168200cF227D4543302686124ac28aE0eaf2cA0B` at block `23041645` -> `23041646`) is available **at no cost (`$0`)** to Frax engineering maintainers via **`pacta@dri.network`**.
