interface UserCardProps {
  username: string;
  rol: string;
}

export const UserCard = ({ username, rol }: UserCardProps) => {
  return (
    <div className="dropdown-header pb-3">
      <div className="media d-user">
        <img
          className="align-self-center mr-3 w-40 rounded-circle"
          src="/1.jpg"
          alt="Albert Einstein"
        />
        <div className="media-body">
          <h5 className="mt-0 mb-0">{username}</h5>
          <span>rol</span>
        </div>
      </div>
    </div>
  );
};
