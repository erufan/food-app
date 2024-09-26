import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

const client = await db.connect();

export async function GET(request) {
  try {
    await client.query("BEGIN");
    const data = await client.query("SELECT * FROM meals;");
    await client.query("COMMIT");

    return NextResponse.json(data.rows);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error fetching meals:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
