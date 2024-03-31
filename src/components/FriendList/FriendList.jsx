import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friends => {
        return (
          <li className={css.items} key={friends.id}>
            <FriendListItem
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
