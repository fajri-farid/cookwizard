import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWSS3_ACCESS_KEY,
    secretAccessKey: process.env.AWSS3_SECRET_KEY,
  },
});

export async function uploadFile({ body, filename, contentType }) {
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const command = new PutObjectCommand({
    Bucket: "cookwizard", // nama bucket kita
    Body: buffer,
    Key: filename,
    ContentType: contentType, // meta data agar aws ngerti itu file apa kek image.png agar ketika dibuka dia nggk auto download
  });

  try {
    const res = await s3.send(command);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
