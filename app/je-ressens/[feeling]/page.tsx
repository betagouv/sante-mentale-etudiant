export default async function FeelingPage({ params }: { params: Promise<{ feeling: string }> }) {
  const { feeling } = await params;

  return (
    <div>
      <h1>Je ressens : {feeling}</h1>
    </div>
  );
}
