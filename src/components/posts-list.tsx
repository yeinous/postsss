import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 2000)
  );
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${randomNumber}`,
    { cache: "no-cache" }
  );
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
