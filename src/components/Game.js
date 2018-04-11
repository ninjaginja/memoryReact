import React from "react";
import "../styles/Game.css";

const Game = () => (
  <div className="container" id="game-area">
    <div className="panel panel-default">
      <div className="panel-heading"> Click on the cards below... BUT do not dare click the same card more than once!
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
          <div className="col-md-3 col-sm-6 image-card">
            <img className="pattern" src="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Game;
