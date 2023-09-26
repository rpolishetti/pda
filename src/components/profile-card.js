import React from "react";

const ProfileCard = ({ alt, title, handle, cardImg, description }) => {
  return (
    <div className="card mr-6">
      <div className="card-image">
        <figure className="image is-flex is-align-items-center is-justify-content-center">
          <img
            alt={alt}
            src={cardImg}
            style={{ width: "auto", height: "200px" }}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
