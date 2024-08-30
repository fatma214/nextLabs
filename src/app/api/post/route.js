import clientPromise from "@/lib/mongodb";

export async function GET(request) {
    const client = await clientPromise;
    const db = client.db("nexttest");
    const news = await db.collection("news").find({}).toArray();
    return new Response(JSON.stringify(news), { status: 200 });
}

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db("nexttest");
    const body = await request.json();
    await db.collection("posts").insertOne(body);
    return new Response("success", { status: 201 });
}
