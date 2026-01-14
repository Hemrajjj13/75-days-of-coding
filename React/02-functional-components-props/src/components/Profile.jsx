const Profile = ({ name, skills, isActive }) => {
  return (
    <div className="card">
      <div className="items">{name}</div>

      <p className="items">
        {skills.map((skill, index) => (
          <b key={index}>{skill}, </b>
        ))}
      </p>

      <p className="items">
        {isActive ? "Active User" : "Not Active User"}
      </p>
    </div>
  );
};

export default Profile;
