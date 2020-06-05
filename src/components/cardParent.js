import React, { Component } from "react";
import "../App.css";
import CardPreview from "./cardPreview";
import CardForm from "./cardForm";

class CardParent extends Component {
  constructor() {
    super();
    this.state = {
      title: "Title",
      subtitle: "Sub-Title",
      Asongs: [
        { name: "One" },
        { name: "Two" },
        { name: "Three" },
        { name: "Four" },
        { name: "Five" },
      ],
      Bsongs: [
        { name: "One" },
        { name: "Two" },
        { name: "Three" },
        { name: "Four" },
        { name: "Five" },
      ],
      sideAName: "Side A",
      sideBName: "Side B",
      nrType: "Dolby B",
      tapeType: 1,
      bgColor: "#FFF",
      fontColor: "#000",
      style: "text-vertical",
      fontFamily: "'Courier New', Courier, monospace",
      coverImg: "",
      cardNote1: "",
      cardNote2: "",
      sideASource: "",
      sideBSource: "",
      songFontSize: 10.5,
      titleFontSize: 11,
      subtitleFontSize: 11,
      backStyle: "back1",
      spineStyle: "spineNormal",
      coverImagePosition: "top",
      coverImageSize: "contain",
      CoverImageRepeat: "no-repeat",
    };

    this.CardPreviewElement = React.createRef();
    this.CardFormElement = React.createRef();
  }

  // Functions
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.CardPreviewElement.current.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleASongChange = (idx) => (evt) => {
    const newSongs = this.state.Asongs.map((song, sidx) => {
      if (idx !== sidx) return song;
      return { ...song, name: evt.target.value };
    });

    this.setState({ Asongs: newSongs });
    this.CardPreviewElement.current.setState({ Asongs: newSongs });
    this.CardFormElement.current.setState({ Asongs: newSongs });
  };

  handleRemoveASong = (idx) => () => {
    this.setState({
      Asongs: this.state.Asongs.filter((s, sidx) => idx !== sidx),
    });
    this.CardPreviewElement.current.setState({
      Asongs: this.state.Asongs.filter((s, sidx) => idx !== sidx),
    });
    this.CardFormElement.current.setState({
      Asongs: this.state.Asongs.filter((s, sidx) => idx !== sidx),
    });
  };

  handleAddASong = () => {
    this.setState({
      Asongs: this.state.Asongs.concat([{ name: "" }]),
    });
    this.CardPreviewElement.current.setState({
      Asongs: this.state.Asongs.concat([{ name: "" }]),
    });
    this.CardFormElement.current.setState({
      Asongs: this.state.Asongs.concat([{ name: "" }]),
    });
  };

  handleBSongChange = (idx) => (evt) => {
    const newSongs = this.state.Bsongs.map((song, sidx) => {
      if (idx !== sidx) return song;
      return { ...song, name: evt.target.value };
    });

    this.setState({ Bsongs: newSongs });
    this.CardPreviewElement.current.setState({ Bsongs: newSongs });
    this.CardFormElement.current.setState({ Bsongs: newSongs });
  };

  handleRemoveBSong = (idx) => () => {
    this.setState({
      Bsongs: this.state.Bsongs.filter((s, sidx) => idx !== sidx),
    });
    this.CardPreviewElement.current.setState({
      Bsongs: this.state.Bsongs.filter((s, sidx) => idx !== sidx),
    });
    this.CardFormElement.current.setState({
      Bsongs: this.state.Bsongs.filter((s, sidx) => idx !== sidx),
    });
  };

  handleAddBSong = () => {
    this.setState({
      Bsongs: this.state.Bsongs.concat([{ name: "" }]),
    });
    this.CardPreviewElement.current.setState({
      Bsongs: this.state.Bsongs.concat([{ name: "" }]),
    });
    this.CardFormElement.current.setState({
      Bsongs: this.state.Bsongs.concat([{ name: "" }]),
    });
  };

  addImage = (e) => {
    const file = e.target.files;
    if (file.length > 0) {
      const cover = URL.createObjectURL(file[0]);

      this.setState({
        coverImg: cover,
      });
      this.CardPreviewElement.current.setState({
        coverImg: cover,
      });
    } else {
      this.setState({
        coverImg: "",
      });
      this.CardPreviewElement.current.setState({
        coverImg: "",
      });
    }
  };

  changeTitleSize = (e) => {
    this.setState({
      titleFontSize: e.target.value + "px",
    });
    this.CardPreviewElement.current.setState({
      titleFontSize: e.target.value + "px",
    });
  };

  changeSubTitleSize = (e) => {
    this.setState({
      subtitleFontSize: e.target.value + "px",
    });
    this.CardPreviewElement.current.setState({
      subtitleFontSize: e.target.value + "px",
    });
  };

  changeSongSize = (e) => {
    this.setState({
      songFontSize: e.target.value + "px",
    });
    this.CardPreviewElement.current.setState({
      songFontSize: e.target.value + "px",
    });
  };

  // Page
  render() {
    return (
      <div className="content-wrapper">
        <CardPreview State={this.state} ref={this.CardPreviewElement} />

        {/* Form */}
        <CardForm
          state={this.state}
          handleASongChange={this.handleASongChange}
          handleBSongChange={this.handleBSongChange}
          handleRemoveASong={this.handleRemoveASong}
          handleRemoveBSong={this.handleRemoveBSong}
          handleAddASong={this.handleAddASong}
          handleAddBSong={this.handleAddBSong}
          onChange={this.onChange}
          changeTitleSize={this.changeTitleSize}
          changeSubTitleSize={this.changeSubTitleSize}
          changeSongSize={this.changeSongSize}
          addImage={this.addImage}
          ref={this.CardFormElement}
        />
      </div>
    );
  }
}

export default CardParent;
