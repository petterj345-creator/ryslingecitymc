import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AdminCog from "@/components/AdminCog";
import { CRATES, RANKS, CURRENCY, STORE_URL, type Product } from "@/lib/store";

export const metadata: Metadata = {
  title: "Store — Ryslinge City",
  description: "Buy crates and ranks to support Ryslinge City and unlock perks.",
};

function price(p: Product) {
  return `${p.price} ${CURRENCY}`;
}

function BuyButton({ product }: { product: Product }) {
  return (
    <a
      className="btn btn-primary buy-btn"
      href={STORE_URL}
      target={STORE_URL === "#" ? undefined : "_blank"}
      rel="noopener noreferrer"
    >
      Buy · {price(product)}
    </a>
  );
}

export default function StorePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section store-hero">
          <div className="container">
            <span className="eyebrow">Support the server · Store</span>
            <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)" }}>
              Crates &amp; ranks
            </h1>
            <p className="section-lead">
              Every purchase helps keep Ryslinge City online and growing. Perks
              are cosmetic and quality-of-life — never pay-to-win.
            </p>
          </div>
        </section>

        {/* Crates */}
        <section className="section" id="crates" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              Crates
            </h2>
            <div className="loot-grid" style={{ marginTop: "1.8rem" }}>
              {CRATES.map((c) => (
                <article
                  key={c.id}
                  className={`store-card${c.popular ? " popular" : ""}`}
                  style={{ "--rarity": c.color } as React.CSSProperties}
                >
                  {c.popular && <span className="store-badge">Most popular</span>}
                  <div className="rarity">Crate</div>
                  <div className="iname">{c.name}</div>
                  <p className="store-tagline">{c.tagline}</p>
                  <ul className="perks">
                    {c.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <BuyButton product={c} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ranks */}
        <section className="section" id="ranks" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              Ranks
            </h2>
            <div className="rank-grid">
              {RANKS.map((r) => (
                <article
                  key={r.id}
                  className={`store-card${r.popular ? " popular" : ""}`}
                  style={{ "--rarity": r.color } as React.CSSProperties}
                >
                  {r.popular && <span className="store-badge">Most popular</span>}
                  <div className="rarity">Rank</div>
                  <div className="iname">{r.name}</div>
                  <div className="rank-price">{price(r)}</div>
                  <p className="store-tagline">{r.tagline}</p>
                  <ul className="perks">
                    {r.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn-primary buy-btn"
                    href={STORE_URL}
                    target={STORE_URL === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    Get {r.name}
                  </a>
                </article>
              ))}
            </div>

            <p className="store-note">
              Purchases are processed securely off-site. Rewards are delivered to
              your in-game account automatically.{" "}
              <Link href="/">← Back to the site</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <AdminCog />
    </>
  );
}
