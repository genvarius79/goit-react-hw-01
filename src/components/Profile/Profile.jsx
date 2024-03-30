
import css from "./Profile.module.css";
export default function Profile({name, tag, location, image, stats }) {
  return <div className={css.container}>
  <div className={css.containerImage}>
      <img
        className={css.imageCard}
      src={image}
      alt="User avatar"
    />
     <p className={css.textName}>{name}</p>
     <p className={css.textTag}>@{tag}</p>
     <p className={css.textTag}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.items}>
      <span className={css.textLable}>Followers</span>
       <span className={css.textValues}>{stats.followers}</span>
    </li>
      <li className={css.items}>
      <span className={css.textLable}>Views</span>
      <span className={css.textValues}>{stats.views}</span>
    </li>
    <li className={css.items}>
      <span className={css.textLable}>Likes</span>
      <span className={css.textValues}>{stats.likes}</span>
    </li>
  </ul>
</div>

}

