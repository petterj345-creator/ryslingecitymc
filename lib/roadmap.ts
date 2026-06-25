import { getSupabasePublic } from "./supabase";

export type Status = "planned" | "in_progress" | "done";
export type Category =
  | "maps"
  | "bosses"
  | "items"
  | "classes"
  | "rewards"
  | "general";

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: Status;
  category: Category;
  progress: number;
  target: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const STATUS_ORDER: Status[] = ["in_progress", "planned", "done"];

export const STATUS_LABELS: Record<Status, string> = {
  planned: "Planlagt",
  in_progress: "I gang",
  done: "Udgivet",
};

export const CATEGORY_LABELS: Record<Category, string> = {
  maps: "Kort",
  bosses: "Bosser",
  items: "Items",
  classes: "Klasser",
  rewards: "Belønninger",
  general: "Generelt",
};

export const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];
export const STATUSES = Object.keys(STATUS_LABELS) as Status[];

/** Fetch all roadmap items, ordered for display. Read-only, uses anon key. */
export async function fetchRoadmap(): Promise<RoadmapItem[]> {
  const supabase = getSupabasePublic();
  const { data, error } = await supabase
    .from("roadmap_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) throw error;
  return (data ?? []) as RoadmapItem[];
}
