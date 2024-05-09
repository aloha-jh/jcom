import BackButton from "./BackButton";
type Props = { title: string };
export default function BackArea({ title }: Props) {
  return (
    <p className="back-area">
      <BackButton />
      <b>{title}</b>
    </p>
  );
}
