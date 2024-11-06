import PostsList from "@/components/posts-list";
import { Suspense } from "react";
import Loading from "./loading";

export const dynamic = "auto";
export default async function PostsPage() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </main>
  );
}
