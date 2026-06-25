const days = [
  { d: "Dag 1", reward: "🪙", amt: "Mønter" },
  { d: "Dag 2", reward: "🧪", amt: "Buffs" },
  { d: "Dag 3", reward: "🗝", amt: "Kort-nøgle" },
  { d: "Dag 4", reward: "🪙", amt: "Mønter ×2" },
  { d: "Dag 5", reward: "📦", amt: "Loot-kiste" },
  { d: "Dag 6", reward: "🧪", amt: "Buffs ×2" },
  { d: "Dag 7", reward: "💎", amt: "Sjælden kiste", big: true },
];

export default function DailyRewards() {
  return (
    <section className="section" id="belonninger">
      <div className="container">
        <span className="eyebrow">Hver dag · Belønninger</span>
        <h2 className="section-title">Byg din streak op</h2>
        <p className="section-lead">
          Log ind hver dag og saml stigende belønninger. Hold streaken i live
          hele ugen for den store kiste — og kom tilbage til en ny række hver
          uge.
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
