import Link from "next/link";
import {
  fetchRoadmap,
  STATUSES,
  CATEGORIES,
  STATUS_LABELS,
  CATEGORY_LABELS,
  type RoadmapItem,
} from "@/lib/roadmap";
import { isAdmin } from "@/lib/auth";
import {
  loginAction,
  logoutAction,
  createItemAction,
  updateItemAction,
  deleteItemAction,
} from "./actions";

export const dynamic = "force-dynamic";

const ERRORS: Record<string, string> = {
  "1": "Wrong password.",
  title: "Title can't be empty.",
  save: "Couldn't save. Check that the service role key is set correctly.",
};

function Fields({ item }: { item?: RoadmapItem }) {
  return (
    <>
      <div className="field">
        <label>Title</label>
        <input
          className="input"
          name="title"
          defaultValue={item?.title ?? ""}
          placeholder="e.g. Map system"
          required
        />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          className="textarea"
          name="description"
          defaultValue={item?.description ?? ""}
          placeholder="Short description of the feature…"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div className="field">
          <label>Status</label>
          <select className="select" name="status" defaultValue={item?.status ?? "planned"}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Category</label>
          <select className="select" name="category" defaultValue={item?.category ?? "general"}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
        <div className="field">
          <label>Progress %</label>
          <input
            className="input"
            name="progress"
            type="number"
            min={0}
            max={100}
            defaultValue={item?.progress ?? 0}
          />
        </div>
        <div className="field">
          <label>Target</label>
          <input
            className="input"
            name="target"
            defaultValue={item?.target ?? ""}
            placeholder="Season 1"
          />
        </div>
        <div className="field">
          <label>Sort order</label>
          <input
            className="input"
            name="sort_order"
            type="number"
            defaultValue={item?.sort_order ?? 0}
          />
        </div>
      </div>
    </>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const admin = await isAdmin();

  if (!admin) {
    return (
      <div className="admin-shell">
        <div className="container">
          <div className="admin-card">
            <span className="eyebrow">Admin</span>
            <h1 style={{ fontSize: "1.8rem", marginTop: "0.8rem" }}>Log in</h1>
            <p style={{ color: "var(--color-muted)", margin: "0.6rem 0 1.4rem" }}>
              Access to the vision board.
            </p>
            <form action={loginAction}>
              <div className="field">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  autoFocus
                  required
                />
              </div>
              {error && <div className="error-text">{ERRORS[error] ?? "Something went wrong."}</div>}
              <button className="btn btn-primary" type="submit" style={{ width: "100%", marginTop: "0.6rem" }}>
                Log in
              </button>
            </form>
            <Link
              href="/"
              style={{ display: "inline-block", marginTop: "1.2rem", color: "var(--color-faint)", fontSize: "0.88rem" }}
            >
              ← Back to the site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  let items: RoadmapItem[] = [];
  try {
    items = await fetchRoadmap();
  } catch {
    items = [];
  }

  return (
    <div className="admin-shell">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="eyebrow">Admin · Vision Board</span>
            <h1 style={{ fontSize: "2rem", marginTop: "0.6rem" }}>Manage the board</h1>
          </div>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <Link className="btn btn-ghost" href="/">
              View site
            </Link>
            <form action={logoutAction}>
              <button className="btn btn-ghost" type="submit">
                Log out
              </button>
            </form>
          </div>
        </div>

        {error && (
          <div className="error-text" style={{ marginTop: "1rem" }}>
            {ERRORS[error] ?? "Something went wrong."}
          </div>
        )}

        {/* New item */}
        <div className="admin-card" style={{ maxWidth: "100%", margin: "2rem 0" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>Add a new feature</h2>
          <form action={createItemAction}>
            <Fields />
            <button className="btn btn-primary" type="submit" style={{ marginTop: "0.5rem" }}>
              Add to the board
            </button>
          </form>
        </div>

        {/* Existing items */}
        <h2 style={{ fontSize: "1.3rem", margin: "2rem 0 1.2rem" }}>
          Existing ({items.length})
        </h2>
        {items.map((item) => (
          <div className="admin-card" style={{ maxWidth: "100%", margin: "0 0 1.2rem" }} key={item.id}>
            <form action={updateItemAction}>
              <input type="hidden" name="id" value={item.id} />
              <Fields item={item} />
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "0.5rem" }}>
                <button className="btn btn-primary" type="submit">
                  Save changes
                </button>
              </div>
            </form>
            <form action={deleteItemAction} style={{ marginTop: "0.8rem" }}>
              <input type="hidden" name="id" value={item.id} />
              <button className="btn btn-ghost" type="submit" style={{ color: "var(--color-ember)" }}>
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
