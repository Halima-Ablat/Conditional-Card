import Profile from "./Profile";
function UserGreeting(props) {
  return props.isLoggedIn ? <Profile /> : <h2>Please log in to continue</h2>;
}
export default UserGreeting;
