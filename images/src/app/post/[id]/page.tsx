export default async function PostPage({ params }: {params: Promise<{ id: string }>}) {
const { id } = await params;
  return (
    <main className="text-center mt-10">
      <h1>Post {id}</h1>
      <p>TODO: display post</p>
    </main>
  );
}