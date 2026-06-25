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
    id: "crate-starter",
    name: "Starter Crate",
    price: 19,
    color: "var(--color-magic)",
    tagline: "Perfect for your first days.",
    perks: ["Common–Magic loot", "Starter coins & buffs", "1 guaranteed item"],
  },
  {
    id: "crate-adventurer",
    name: "Adventurer Crate",
    price: 39,
    color: "var(--color-arcane-bright)",
    tagline: "Gear up for the grind.",
    perks: ["Magic–Rare loot", "Bonus coins", "2 guaranteed items"],
  },
  {
    id: "crate-champion",
    name: "Champion Crate",
    price: 69,
    color: "var(--color-gold)",
    tagline: "Better odds, better gear.",
    perks: ["Rare–Epic loot", "Chance at a map key", "3 guaranteed items"],
    popular: true,
  },
  {
    id: "crate-vip",
    name: "VIP Crate",
    price: 129,
    color: "var(--color-ember)",
    tagline: "The best drops on the server.",
    perks: [
      "Epic–Unique loot",
      "Guaranteed Unique chance",
      "Exclusive cosmetic",
      "4 guaranteed items",
    ],
  },
];

export const RANKS: Product[] = [
  {
    id: "rank-vip",
    name: "VIP",
    price: 49,
    color: "var(--color-magic)",
    tagline: "More homes, more freedom.",
    perks: [
      "+3 /sethome slots",
      "/sell command",
      "Colored name tag",
      "+2 town plots",
      "VIP chat prefix",
    ],
  },
  {
    id: "rank-knight",
    name: "Knight",
    price: 99,
    color: "var(--color-arcane-bright)",
    tagline: "For the dedicated.",
    perks: [
      "Everything in VIP",
      "+5 /sethome slots",
      "+5 town plots",
      "Extra daily reward",
      "Particle effects",
    ],
    popular: true,
  },
  {
    id: "rank-baron",
    name: "Baron",
    price: 179,
    color: "var(--color-gold)",
    tagline: "Rule with style.",
    perks: [
      "Everything in Knight",
      "+8 /sethome slots",
      "Exclusive cosmetics",
      "Monthly crate",
      "Custom join message",
    ],
  },
  {
    id: "rank-lord",
    name: "Lord",
    price: 299,
    color: "var(--color-ember)",
    tagline: "The pinnacle of prestige.",
    perks: [
      "Everything in Baron",
      "Max /sethome slots",
      "All cosmetics unlocked",
      "2× monthly crates",
      "Lord tag in tab & chat",
    ],
  },
];
