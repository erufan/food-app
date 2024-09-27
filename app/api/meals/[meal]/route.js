import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

const client = await db.connect();

export async function GET(request, { params }) {
  const { meal } = params;

  try {
    await client.query("BEGIN");
    const data = await client.query("SELECT * FROM meals WHERE slug = $1;", [
      meal,
    ]);
    await client.query("COMMIT");

    if (data.rows.length === 0) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json(data.rows[0]);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error fetching meals:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
