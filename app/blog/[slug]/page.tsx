import Container from "@/components/container/Container";
import React from "react";
interface BlogItem {
  title: string;
  slug: string;
  content: string;
}

interface BlogProps {
  params: {
    slug: string;
  };
}
export default async function Blog({ params: { slug } }: BlogProps) {
  const posts: BlogItem[] = await fetch("http://localhost:3000/api/post").then(
    (res) => {
      return res.json();
    }
  );
  const post = posts.find((post) => post.slug === slug)!;
  return (
    <Container>
      <h1>Blog</h1>
      <div>
        <h1>{post.title}</h1>
        <h1>{post.content}</h1>
      </div>
    </Container>
  );
}
