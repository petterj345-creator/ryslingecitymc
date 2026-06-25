"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase";
import { ADMIN_COOKIE, adminToken, checkPassword, isAdmin } from "@/lib/auth";
import { STATUSES, CATEGORIES, type Category, type Status } from "@/lib/roadmap";

function refresh() {
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    redirect("/admin?error=1");
  }
  const store = await cookies();
  store.set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dage
  });
  redirect("/admin");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  redirect("/admin");
}

function readItem(formData: FormData) {
  const status = String(formData.get("status") ?? "planned") as Status;
  const category = String(formData.get("category") ?? "general") as Category;
  return {
    title: String(formData.get("title") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    status: STATUSES.includes(status) ? status : "planned",
    category: CATEGORIES.includes(category) ? category : "general",
    progress: Math.max(0, Math.min(100, Number(formData.get("progress") ?? 0))),
    target: String(formData.get("target") ?? "").trim(),
    sort_order: Number(formData.get("sort_order") ?? 0),
  };
}

export async function createItemAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const item = readItem(formData);
  if (!item.title) redirect("/admin?error=title");

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("roadmap_items").insert(item);
  if (error) redirect("/admin?error=save");
  refresh();
  redirect("/admin");
}

export async function updateItemAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  if (!id) redirect("/admin");
  const item = readItem(formData);
  if (!item.title) redirect("/admin?error=title");

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("roadmap_items")
    .update(item)
    .eq("id", id);
  if (error) redirect("/admin?error=save");
  refresh();
  redirect("/admin");
}

export async function deleteItemAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  if (!id) redirect("/admin");

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("roadmap_items").delete().eq("id", id);
  if (error) redirect("/admin?error=save");
  refresh();
  redirect("/admin");
}
