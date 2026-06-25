import Coin from "./Coin";

type Day = { d: string; reward: React.ReactNode; amt: string; big?: boolean };

const days: Day[] = [
  { d: "Day 1", reward: <Coin />, amt: "Coins" },
  { d: "Day 2", reward: "🧪", amt: "Buffs" },
  { d: "Day 3", reward: "🗝", amt: "Map key" },
  { d: "Day 4", reward: <Coin />, amt: "Coins ×2" },
  { d: "Day 5", reward: "📦", amt: "Loot crate" },
  { d: "Day 6", reward: "🧪", amt: "Buffs ×2" },
  { d: "Day 7", reward: "💎", amt: "Rare crate", big: true },
];

export default function DailyRewards() {
  return (
    <section className="section" id="rewards">
      <div className="container">
        <span className="eyebrow">Every day · Rewards</span>
        <h2 className="section-title">Build your streak</h2>
        <p className="section-lead">
          Log in every day to collect rising rewards. Keep the streak alive all
          week for the big crate — and come back to a fresh row every week.
        </p>

        <div className="streak">
          {days.map((day) => (
            <div className={`day${day.big ? " big" : ""}`} key={day.d}>
              <div className="d">{day.d}</div>
              <div className="reward" aria-hidden="true">
                {day.reward}
              </div>
              <div className="amt">{day.amt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
