import { query } from "../db/queries/postFeed"
import FeedPost from "@/app/components/feed-post"

export default async function Home() {

  // Posts
  // const posts = await db.select().from(postsTable)


  // Posts inner join Users
  const posts = await query.execute()

  return (
    <div className="flex flex-col divide-y" style={{ height: 3000 }}>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post}/>
      ))}
    </div>
  );
}
