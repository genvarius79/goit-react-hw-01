import clsx from "clsx";
import css from "./FriendListItem.module.css"
export default function FriendListItem({ avatar, name, isOnline }) {
     const amountClassNames = clsx(css.text, isOnline ? css.online : css.offline);
     return <div className={css.container}>
                    <img className={css.image} src={avatar} alt={name} />
                    <p className={css.nameText}>{name}</p>
                    <p className={amountClassNames}>{isOnline ? "online" : "offline"}</p>
               </div>
          
}