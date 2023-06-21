import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Welcoming a Little Angel",
    slug: "welcoming-a-little-angel",
    content:
      "We are delighted to introduce to you a newborn little angel. Please welcome the baby girl named Tuong Nhi.\n\nTuong Nhi is a miracle sent from above, bringing joy and happiness to our family. Each day, we marvel at her beauty and sweetness, filling our hearts with love and adoration.\n\nFrom gentle touches to adorable smiles, Tuong Nhi has inspired and brought joy to everyone fortunate enough to meet her. With each little milestone, we cherish precious moments and hold hopes for a bright and successful future for Tuong Nhi.\n\nJoin us in welcoming Tuong Nhi and sharing the joy of our family as we celebrate the arrival of this precious little angel. With love and care, we pledge to provide Tuong Nhi a life filled with love, happiness, and success. Let us witness the growth of Tuong Nhi and share the sweet moments in her journey of life.",
  },
];

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
