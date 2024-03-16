import { uploadFile } from "@/lib/uploadFile";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  console.log(file);

  //   return NextResponse.json({ message: "upload file..." });

  try {
    await uploadFile({
      body: file,
      filename: file.name,
      contentType: file.type,
    });
    return NextResponse.json({ message: "upload sukses" });
  } catch (eror) {
    return NextResponse.json({ message: "upload gagal" });
  }
}
