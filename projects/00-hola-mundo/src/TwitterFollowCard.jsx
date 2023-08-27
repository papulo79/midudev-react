import { useState } from "react";

import "./TwitterFollowCard.css";

export function TwitterFollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const followText = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="Avatar to wapo" src={`https://unavatar.io/${userName}`} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass} onClick={handleClick}>{followText}</button>
      </aside>
    </article>
  );
}
