import { NextRequest , NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {isValidSignature , SIGNATURE_HEADER_NAME} from '@sanity/webhook'

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET!

export async function POST(req:NextRequest) {
  try{
    const body = await req.text()
    const signature = req.headers.get(SIGNATURE_HEADER_NAME) || ''

    const isValid = isValidSignature(body , signature , SANITY_WEBHOOK_SECRET || '')
    if(!isValid){
      console.warn('🚫🚫🚫🚫🚫 invalid sanity webhook signature')
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    } 
    const jsonBody = JSON.parse(body)
    const docType = jsonBody._type
    console.log(`🔔 Sanity webhook received for type: ${docType}`);
     if (docType === "product" || 'hero') {
      revalidatePath("/"); // Homepage
      console.log(`✅ Revalidated / after ${docType} update`);
      revalidatePath("/products"); // Products listing page, if it exists

      // Optional: if you have dynamic product detail pages (e.g. /products/[slug])
      if (jsonBody.slug?.current) {
        revalidatePath(`/products/${jsonBody.slug.current}`);
      }

      console.log("✅ Revalidated product-related paths");
    } else {
      console.log("ℹ️ No revalidation rule for this document type.");
    }

    return NextResponse.json({ revalidated: true, timestamp: Date.now() }, { status: 200 });
  }
  catch(err){
     console.error("❌ Error during revalidation:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}