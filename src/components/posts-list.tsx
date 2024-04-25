import Link from "next/link";

export default async function PostsList() {
  const response = await fetch(`https://dummyjson.com/posts?limit=10`, {
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return (
    <>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
