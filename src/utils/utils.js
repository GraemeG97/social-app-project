"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function handleDelete(id) {
  await sql`DELETE FROM golf_equipment WHERE id=${id}`;
  revalidatePath("/posts");
}

export async function handleUpdate(values, id) {
  // values should be a string like `column1 = value` ect.
  await sql`UPDATE golf_equipment SET ${values} WHERE id=${id}`;
  revalidatePath(`/posts/${id}`);
}

function gereateUpdateString(formData) {}
