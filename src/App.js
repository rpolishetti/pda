import "bulma/css/bulma.css";
import React from "react";
import ProfileCard from "./components/profile-card";
import AlexaProfileImg from "./images/alexa.png";
import CortanaProfileImg from "./images/cortana.png";
import SiriProfileImg from "./images/siri.png";

function App() {
  return (
    <div className="my-6">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
          {/* <p class="subtitle">Hero subtitle</p> */}
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <ProfileCard
                alt="Alexa profile card"
                title="Alexa"
                handle="@alexa"
                cardImg={AlexaProfileImg}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column">
              <ProfileCard
                alt="Cortana profile card"
                title="Cortana"
                handle="@cortana32"
                cardImg={CortanaProfileImg}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column">
              <ProfileCard
                alt="Siri profile card"
                title="Siri"
                handle="@siri01"
                cardImg={SiriProfileImg}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
