import {
  fetchRoadmap,
  STATUS_ORDER,
  STATUS_LABELS,
  CATEGORY_LABELS,
  type RoadmapItem,
} from "@/lib/roadmap";

function Card({ item }: { item: RoadmapItem }) {
  return (
    <div className="board-card">
      <h4>{item.title}</h4>
      {item.description && <p>{item.description}</p>}
      {item.status === "in_progress" && item.progress > 0 && (
        <div className="progress" aria-label={`${item.progress}% færdig`}>
          <span style={{ width: `${item.progress}%` }} />
        </div>
      )}
      <div className="board-card-meta">
        <span className="cat-tag">{CATEGORY_LABELS[item.category]}</span>
        {item.target && <span className="target-tag">{item.target}</span>}
      </div>
    </div>
  );
}

export default async function Visionsboard() {
  let items: RoadmapItem[] = [];
  let failed = false;
  try {
    items = await fetchRoadmap();
  } catch {
    failed = true;
  }

  return (
    <section className="section" id="visionsboard">
      <div className="container">
        <span className="eyebrow">Live · Visionsboard</span>
        <h2 className="section-title">Det vi arbejder på lige nu</h2>
        <p className="section-lead">
          Følg med i udviklingen i realtid. Boardet opdateres direkte af teamet,
          så du altid kan se, hvad der er planlagt, i gang og udgivet.
        </p>

        {failed ? (
          <p className="section-lead" style={{ marginTop: "2rem" }}>
            Boardet kunne ikke hentes lige nu. Prøv igen om lidt.
          </p>
        ) : (
          <div className="board">
            {STATUS_ORDER.map((status) => {
              const col = items.filter((i) => i.status === status);
              return (
                <div className="board-col" key={status}>
                  <div className={`board-col-head s-${status}`}>
                    <span className="name">
                      <span className="status-dot" />
                      {STATUS_LABELS[status]}
                    </span>
                    <span className="count">{col.length}</span>
                  </div>
                  {col.length === 0 ? (
                    <p style={{ color: "var(--color-faint)", fontSize: "0.88rem" }}>
                      Ingenting her endnu.
                    </p>
                  ) : (
                    col.map((item) => <Card key={item.id} item={item} />)
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
