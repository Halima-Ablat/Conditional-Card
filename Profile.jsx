import profile from "./assets/background.jpg.avif";

function Profile() {
  return (
    <>
      <div className="card">
        <img src={profile} alt="" />

        <h2>React</h2>
        <p>Hi</p>
      </div>
    </>
  );
}

export default Profile;
