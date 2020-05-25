import React, { Component } from "react";
import "../App.css";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render() {
    return (
      <form className="jcard-form">
        <div className="settings-card">
          <h3>Styling</h3>
          <div id="style-form">
            <div id="front-style">
              <h4>Cover Style</h4>
              <input
                defaultChecked="true"
                type="radio"
                id="text-vertical"
                name="style"
                value="text-vertical"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="text-vertical">Vertical Song-List</label>
              <br />
              <input
                type="radio"
                id="text-horizontal"
                name="style"
                value="text-horizontal"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="text-horizontal">Horizontal Song-List</label>
              <br />
              <input
                type="radio"
                id="img-with-text"
                name="style"
                value="img-with-text"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="img-with-text">Image With Song-List</label>
              <br />
              <input
                type="radio"
                id="img-only"
                name="style"
                value="img-only"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="img-only">Image Only</label>
              <br />
              <label htmlFor="cover-upload">Cover Image:</label>
              <input
                type="file"
                id="cover-upload"
                name="cover-upload"
                attrs='accepts="image/*"'
                onChange={(e) => this.props.addImage(e)}
              ></input>
            </div>

            <div id="font-form">
              <h4>Font-Style</h4>
              <input
                defaultChecked="true"
                type="radio"
                id="courier"
                name="fontFamily"
                value="'Courier New', Courier, monospace"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="courier">Courier</label>
              <br />
              <input
                type="radio"
                id="Sans-Serif"
                name="fontFamily"
                value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="Sans-Serif">Sans-Serif</label>
              <br />
              <input
                type="radio"
                id="handwritten"
                name="fontFamily"
                value="'Gloria Hallelujah', cursive"
                onChange={(e) => this.props.onChange(e)}
              ></input>
              <label htmlFor="handwritten">Hand-Written</label>
            </div>

            <div id="color-form">
              <h4>Colors</h4>
              <label htmlFor="card-color-input" name="bgColor">
                Card Color:
              </label>
              <input
                type="color"
                value="#ffffff"
                id="card-color-input"
                name="bgColor"
                onChange={(e) => this.props.onChange(e)}
              ></input>

              <label htmlFor="font-color-input" name="fontColor">
                Font Color:
              </label>
              <input
                type="color"
                id="font-color-input"
                name="fontColor"
                onChange={(e) => this.props.onChange(e)}
              ></input>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h3>Titles</h3>
          <div id="titles-form">
            <div className="titles-form-inputs">
              <label htmlFor="title-input">Title:</label>
              <input
                type="text"
                id="title-input"
                name="title"
                defaultValue="Title"
                onChange={(e) => this.props.onChange(e)}
              ></input>

              <label htmlFor="subtitle-input">Sub-Title:</label>
              <input
                type="text"
                id="subtitle-input"
                name="subtitle"
                defaultValue="Sub-Title"
                onChange={(e) => this.props.onChange(e)}
              ></input>

              <label htmlFor="sideATitle-input">Side A Title:</label>
              <input
                type="text"
                id="sideATitle-input"
                name="sideAName"
                defaultValue="Side A"
                onChange={(e) => this.props.onChange(e)}
              ></input>

              <label htmlFor="sideBTitle-input">Side B Title:</label>
              <input
                type="text"
                id="sideBTitle-input"
                name="sideBName"
                defaultValue="Side B"
                onChange={(e) => this.props.onChange(e)}
              ></input>
            </div>

            <div className="titles-form-inputs">
              <label htmlFor="title-input-fontsize">Title Size:</label>
              <input
                type="number"
                id="title-input-fontsize"
                name="title-input-fontsize"
                defaultValue="11"
                onChange={(e) => this.props.changeTitleSize(e)}
              ></input>

              <label htmlFor="sub-title-input-fontsize">Sub-Title Size:</label>
              <input
                type="number"
                id="sub-title-input-fontsize"
                name="sub-title-input-fontsize"
                defaultValue="11"
                onChange={(e) => this.props.changeSubTitleSize(e)}
              ></input>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h3>Other Information</h3>
          <div id="other-form">
            <br />
            <label htmlFor="note1-input">Note 1:</label>
            <input
              type="text"
              id="note1-input"
              name="cardNote1"
              placeholder="Note 1:"
              onChange={(e) => this.props.onChange(e)}
            ></input>

            <br />
            <label htmlFor="note2-input">Note 2:</label>
            <input
              type="text"
              id="note2-input"
              name="cardNote2"
              placeholder="Note 2:"
              onChange={(e) => this.props.onChange(e)}
            ></input>

            <br />
            <label htmlFor="nrType-input">Side A Source:</label>
            <input
              type="text"
              id="sideASource-input"
              name="sideASource"
              placeholder="Side A Source:"
              onChange={(e) => this.props.onChange(e)}
            ></input>
            <br />
            <label htmlFor="nrType-input">Side B Source:</label>
            <input
              type="text"
              id="sideBSource-input"
              name="sideBSource"
              placeholder="Side B Source:"
              onChange={(e) => this.props.onChange(e)}
            ></input>

            <br />
            <label htmlFor="nrType-input">Noise Reduction:</label>
            <input
              type="text"
              id="nrType-input"
              name="nrType"
              placeholder="Noise Reduction:"
              onChange={(e) => this.onChange(e)}
            ></input>
          </div>
        </div>

        <div className="settings-card">
          <h3>Song List</h3>

          <div className="font-size-input">
            <label htmlFor="side-title-input-fontsize">Song Name Size:</label>
            <input
              type="number"
              id="side-title-input-fontsize"
              name="side-title-input-fontsize"
              defaultValue="10.5"
              onChange={(e) => this.props.changeSongSize(e)}
            ></input>
          </div>

          <h4>Side A</h4>
          <div className="song-list">
            {this.state.Asongs.map((song, idx) => (
              <div key={idx.toString()} className="song">
                <p>{idx + 1 + "."}</p>
                <input
                  type="text"
                  placeholder={`Song #${idx + 1}`}
                  value={song.name}
                  onChange={this.props.handleASongChange(idx)}
                />
                <button
                  type="button"
                  className="delete-btn"
                  onClick={this.props.handleRemoveASong(idx)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button
            className="add-btn"
            type="button"
            onClick={this.props.handleAddASong}
          >
            Add Song
          </button>

          <h4>Side B</h4>
          <div className="song-list">
            {this.state.Bsongs.map((song, idx) => (
              <div key={idx.toString()} className="song">
                <p>{idx + 1 + "."}</p>
                <input
                  type="text"
                  placeholder={`Song #${idx + 1}`}
                  value={song.name}
                  onChange={this.props.handleBSongChange(idx)}
                />
                <button
                  type="button"
                  className="delete-btn"
                  onClick={this.props.handleRemoveBSong(idx)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button
            className="add-btn"
            type="button"
            onClick={this.props.handleAddBSong}
          >
            Add Song
          </button>
        </div>
      </form>
    );
  }
}

export default CardForm;
