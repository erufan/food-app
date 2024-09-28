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

export async function POST(request) {
  const { slug, title, image, summary, instructions, name, email } =
    await request.json();

  try {
    await client.query("BEGIN");
    const queryText = `
      INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [slug, title, image, summary, instructions, name, email];
    await client.query(queryText, values);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error inserting meal:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
