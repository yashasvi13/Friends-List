import "./App.css";
import FriendsList from "./Components/FriendsList/FriendsList";
import AddFriendForm from "./Components/AddFriendForm/AddFriendForm";
import Header from "./Components/Header/header";

function App() {
  return (
    <div className="container">
      <Header />
      <AddFriendForm />
      <FriendsList />
    </div>
  );
}

export default App;
