import { db, eq, sql, desc } from "@/db"

import { posts as postsTable } from "@/db/schema/posts"
import { users as usersTable } from "@/db/schema/users"
import { media as mediaTable } from "@/db/schema/media"

const baseQuery = db
.select({
  id: postsTable.id,
  content: postsTable.content,
  createdAt: postsTable.createdAt,
  user: {
    id: usersTable.id,
    firstname: usersTable.firstName,
    lastname: usersTable.lastName,
    username: usersTable.username,
    avatar: usersTable.avatar,
  },
  media: {
    id: mediaTable.id,
    type: mediaTable.type,
    url: mediaTable.url,
    width: mediaTable.width,
    height: mediaTable.height,
  },
})
.from(postsTable)
.innerJoin(usersTable, eq(usersTable.id, postsTable.userId))
.leftJoin(mediaTable, eq(mediaTable.id, postsTable.mediaId))

export const query = db
.select({
  id: postsTable.id,
  content: postsTable.content,
  createdAt: postsTable.createdAt,
  user: {
    id: usersTable.id,
    firstname: usersTable.firstName,
    lastname: usersTable.lastName,
    username: usersTable.username,
    avatar: usersTable.avatar,
  },
  media: {
    id: mediaTable.id,
    type: mediaTable.type,
    url: mediaTable.url,
    width: mediaTable.width,
    height: mediaTable.height,
  },
})
.from(postsTable)
.innerJoin(usersTable, eq(usersTable.id, postsTable.userId))
.leftJoin(mediaTable, eq(mediaTable.id, postsTable.mediaId))
.prepare("select_posts_for_feed")

export type Result = Awaited<ReturnType<typeof query.execute>>[0];

export const postsFeedQuery = baseQuery
  .orderBy(desc(postsTable.createdAt))
  .prepare("posts_for_feed")


export const userPostsQuery = baseQuery
.where(eq(usersTable.id, sql.placeholder("userId")))
.orderBy(desc(postsTable.createdAt))
.prepare("posts_for_user_feed")