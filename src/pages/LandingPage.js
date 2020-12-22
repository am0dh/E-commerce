import React from "react";

function LandingPage() {
  return (
    <div>
      {" "}
      <div
        class="jumbotron jumbotron-fluid text-dark"
        style={{
          backgroundImage:
            "url('https://www.wallpapertip.com/wmimgs/40-401398_best-bodybuilding-wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "brightness(0.9)",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <h1 className="display-4">Welcome to stayfit.com</h1>
          <p className="lead">The all-in-one place for fitness freaks</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
