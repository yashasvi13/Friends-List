import "./App.css";
import FriendsList from "./Components/FriendsList/FriendsList";
import AddFriendForm from "./Components/AddFriendForm/AddFriendForm";

function App() {
  return (
    <div className="container">
      <AddFriendForm />
      <FriendsList />
    </div>
  );
}

export default App;
