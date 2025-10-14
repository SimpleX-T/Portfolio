import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDb } from "@/lib/mongo";
import { ObjectId } from "mongodb";

async function ensureAuthed() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { resource: string } }
) {
  const unauth = await ensureAuthed();
  if (unauth) return unauth;
  const db = await getDb();
  const data = await db.collection(params.resource).find().toArray();
  return NextResponse.json(data);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { resource: string } }
) {
  const unauth = await ensureAuthed();
  if (unauth) return unauth;
  const body = await req.json();
  const db = await getDb();
  const result = await db.collection(params.resource).insertOne(body);
  return NextResponse.json({ ...body, _id: result.insertedId });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { resource: string } }
) {
  const unauth = await ensureAuthed();
  if (unauth) return unauth;
  const body = await req.json();
  const { _id, ...rest } = body;
  const db = await getDb();
  await db
    .collection(params.resource)
    .updateOne({ _id: new ObjectId(String(_id)) }, { $set: rest });
  return NextResponse.json({ ...body });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { resource: string } }
) {
  const unauth = await ensureAuthed();
  if (unauth) return unauth;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const db = await getDb();
  await db
    .collection(params.resource)
    .deleteOne({ _id: new ObjectId(String(id)) });
  return new NextResponse("", { status: 204 });
}
