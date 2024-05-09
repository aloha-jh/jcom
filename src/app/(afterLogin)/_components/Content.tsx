import ContentItem from "./ContentItem";

export default function Content({ data }: any) {
  return (
    <ul className="content">
      {data.map((v: any, i: number) => {
        return <ContentItem v={v} i={i} key={i + v.user.id} />;
      })}
    </ul>
  );
}
