export default function ProfileMy({ user }: any) {
  return (
    <div className="profile">
      <div
        className="user-img"
        style={{ backgroundImage: `url('${user.path}')` }}></div>
      <p className="info">
        <b>{user.name}</b>
        <span>{user.id}</span>
      </p>
      <button>팔로우</button>
    </div>
  );
}
