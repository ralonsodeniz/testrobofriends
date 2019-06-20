import React from "react"; //even if it seems we are not using react, we are, all the virtual dom is referring to react elements to draw in the html dom

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img
          src={`https://robohash.org/${id}?size=200x200&set=set4`}
          alt="robots"
          hei
        />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
