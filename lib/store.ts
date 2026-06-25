// Store catalogue. Crates and ranks live here so they're easy to edit in one
// place. `buyUrl` is where the "Buy" button sends the player — point it at your
// checkout (e.g. a Tebex store page) once that's set up.

export const CURRENCY = "kr"; // DKK — change to "€" / "$" if needed
export const STORE_URL = "#"; // TODO: indsæt Tebex/checkout-link

export type Product = {
  id: string;
  name: string;
  price: number;
  color: string; // rarity / tier accent
  tagline: string;
  perks: string[];
  popular?: boolean;
};

export const CRATES: Product[] = [
  {
    id: "crate-common",
    name: "Adventurer Crate",
    price: 29,
    color: "var(--color-magic)",
    tagline: "A solid start to your journey.",
    perks: ["Common–Rare loot", "Coins & buffs", "1 guaranteed item"],
  },
  {
    id: "crate-rare",
    name: "Champion Crate",
    price: 59,
    color: "var(--color-gold)",
    tagline: "Better odds, better gear.",
    perks: ["Rare–Epic loot", "Bonus coins", "Chance at a map key", "2 guaranteed items"],
    popular: true,
  },
  {
    id: "crate-legendary",
    name: "Legend Crate",
    price: 119,
    color: "var(--color-ember)",
    tagline: "The best drops on the server.",
    perks: ["Epic–Unique loot", "Guaranteed Unique chance", "Cosmetic reward", "3 guaranteed items"],
  },
];

export const RANKS: Product[] = [
  {
    id: "rank-squire",
    name: "Squire",
    price: 49,
    color: "var(--color-magic)",
    tagline: "Your first step up.",
    perks: ["Colored name tag", "+2 town plots", "/hat & basic cosmetics", "Squire chat prefix"],
  },
  {
    id: "rank-knight",
    name: "Knight",
    price: 99,
    color: "var(--color-arcane-bright)",
    tagline: "For the dedicated.",
    perks: ["Everything in Squire", "+5 town plots", "Extra daily reward", "Particle effects", "Priority queue"],
    popular: true,
  },
  {
    id: "rank-baron",
    name: "Baron",
    price: 179,
    color: "var(--color-gold)",
    tagline: "Rule with style.",
    perks: ["Everything in Knight", "+10 town plots", "Exclusive cosmetics", "Monthly crate", "Custom join message"],
  },
  {
    id: "rank-lord",
    name: "Lord",
    price: 299,
    color: "var(--color-ember)",
    tagline: "The pinnacle of prestige.",
    perks: ["Everything in Baron", "Max town plots", "All cosmetics unlocked", "2× monthly crates", "Lord name in tab & chat"],
  },
];
