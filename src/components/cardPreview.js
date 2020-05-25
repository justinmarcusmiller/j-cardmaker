import React, { Component } from "react";
import "../App.css";

class CardPreview extends Component {
  constructor(props) {
    super(props);
    this.state = props.State;
    
  }

  render() {
    return (
      <div
        style={{
          fontFamily: this.state.fontFamily,
          backgroundColor: this.state.bgColor,
          color: this.state.fontColor,
        }}
        className={this.state.style + " jcard"}
      >
        {/* Front of J-Card */}
        <div className={this.state.style + " jcard-front"}>
          <div
            style={{ backgroundImage: "url(" + this.state.coverImg + ")" }}
            className={this.state.style + " cover"}
          ></div>
          <div className={this.state.style + " cover-text"}>
            <h1 style={{ fontSize: this.state.titleFontSize }}>
              {this.state.title}
            </h1>
            <h2 style={{ fontSize: this.state.subtitleFontSize }}>
              {this.state.subtitle}
            </h2>
            <p style={{ fontSize: this.state.songFontSize }}>
              {this.state.sideAName}
            </p>
            <ol>
              {this.state.Asongs.map((song, idx) => (
                <li
                  style={{ fontSize: this.state.songFontSize }}
                  key={idx.toString()}
                >
                  {song.name}
                </li>
              ))}
            </ol>

            <p style={{ fontSize: this.state.songFontSize }}>
              {this.state.sideBName}
            </p>
            <ol>
              {this.state.Bsongs.map((song, idx) => (
                <li
                  style={{ fontSize: this.state.songFontSize }}
                  key={idx.toString()}
                >
                  {song.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* J-Card Spine */}
        <div className={this.state.spineStyle + " jcard-side"}>
          <div className="spineDiv">
            <h1>{this.state.title}</h1>
            <h2>{this.state.subtitle}</h2>
          </div>

          <div className="spineDiv ta-r">
            <h2>{this.state.cardNote1}</h2>
            <h2>{this.state.cardNote2}</h2>
          </div>
        </div>
        {/* Back of J-card  */}
        <div className={this.state.backStyle + " jcard-back"}>
          <div className="br-dash">
            <h3>{this.state.sideAName}</h3>
            <h3>NR: {this.state.nrType}</h3>
            <h3>SOURCE: {this.state.sideASource}</h3>
          </div>
          <div>
            <h3>{this.state.sideBName}</h3>
            <h3>NR: {this.state.nrType}</h3>
            <h3>SOURCE: {this.state.sideBSource}</h3>
          </div>
        </div>
        <div className={this.state.backStyle + " jcard-back2"}>
          <ol>
            <p style={{ fontSize: this.state.songFontSize }}>
              {this.state.sideAName}
            </p>
            {this.state.Asongs.map((song, idx) => (
              <li
                style={{ fontSize: this.state.songFontSize }}
                key={idx.toString()}
              >
                {song.name}
              </li>
            ))}
          </ol>

          <ol>
            <p style={{ fontSize: this.state.songFontSize }}>
              {this.state.sideBName}
            </p>
            {this.state.Bsongs.map((song, idx) => (
              <li
                style={{ fontSize: this.state.songFontSize }}
                key={idx.toString()}
              >
                {song.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default CardPreview;
