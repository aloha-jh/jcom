import MsgList from "@/app/(afterLogin)/_components/MsgList";

export default function Messages() {
  return (
    <div className="msg-wrap">
      <h3>쪽지</h3>
      <ul className="msg-list">
        <MsgList />
        <MsgList />
        <MsgList />
        <MsgList />
        <MsgList />
      </ul>
    </div>
  );
}
