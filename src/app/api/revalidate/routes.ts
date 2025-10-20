import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const { secret, _type } = await request.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
      return new Response(JSON.stringify({ message: "invalid secret" }), { status: 401 });
    }

    if (_type === "product") {
      revalidatePath("/");
      console.log("✅ Revalidated / after Sanity update");
    }

    return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Revalidation error:", message);
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
