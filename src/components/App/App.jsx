
import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList";
import css from "./App.module.css"


 export default  function App () {
  return (
    <div className={css.container}>
          <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
          />
          <FriendList friends={friends} />
    </div>
  );
};


  



