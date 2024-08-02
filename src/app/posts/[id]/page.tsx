import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return data.posts.map((post: { id: number }) => ({
    id: `${post.id}`,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`, {
    cache: "force-cache",
  });
  const post = await response.json();

  if (!post.title) {
    return notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
