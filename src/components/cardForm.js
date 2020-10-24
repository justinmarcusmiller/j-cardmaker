import React, { Component } from "react";
import "../App.css";

const CardForm = (props) => {
    return (
        <form className="jcard-form">
            <div className="settings-card">
                <h3>Styling</h3>
                <div id="style-form">
                    <label htmlFor="cover-upload">Cover Style: </label>
                    <select
                        id="style"
                        name="style"
                        onChange={(e) => props.setStyle(e.target.value)}
                    >
                        <option value="text-vertical">Vertical Text</option>
                        <option value="text-horizontal">Horizontal Text</option>
                        <option value="img-with-text">Image With Text</option>
                        <option value="img-only">Image Only</option>
                    </select>
                    <label htmlFor="cover-upload">Cover Image:</label>
                    <input
                        type="file"
                        id="cover-upload"
                        name="cover-upload"
                        attrs='accepts="image/*"'
                        onChange={(e) => props.addImage(e)}
                    ></input>

                    <label htmlFor="coverImagePosition">Image Position:</label>
                    <select
                        id="coverImagePosition"
                        name="coverImagePosition"
                        defaultValue="center"
                        onChange={(e) => props.setCoverImagePosition(e.target.value)}
                    >
                        <option value="top">Top</option>
                        <option value="center">Center</option>
                        <option value="bottom">Bottom</option>
                    </select>

                    <label htmlFor="coverImageSize">Image Size:</label>
                    <select
                        id="coverImageSize"
                        name="coverImageSize"
                        defaultValue="contain"
                        onChange={(e) => props.setCoverImageSize(e.target.value)}
                    >
                        <option value="contain">Contain</option>
                        <option value="cover">Cover</option>
                        <option value="90%">90%</option>
                    </select>

                    <label htmlFor="coverImageRepeat">Image Repeat:</label>
                    <select
                        id="coverImageRepeat"
                        name="coverImageRepeat"
                        defaultValue="repeat"
                        onChange={(e) => props.setCoverImageRepeat(e.target.value)}
                    >
                        <option value="repeat">Repeat</option>
                        <option value="no-repeat">No Repeat</option>
                    </select>

                    <label htmlFor="fontFamily">Font-Style: </label>
                    <select
                        id="fontFamily"
                        name="fontFamily"
                        onChange={(e) => props.setFontFamily(e.target.value)}
                    >
                        <option value="'Courier New', Courier, monospace">
                            Monospace
                        </option>
                        <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
                            Sans-Serif
                        </option>
                        <option value="'Times New Roman', Times, serif">
                            Serif
                        </option>
                        <option value="'Gloria Hallelujah', cursive">
                            Hand-Written
                        </option>
                    </select>

                    <label htmlFor="card-color-input" name="bgColor">
                        Card Color:
                    </label>
                    <input
                        type="color"
                        defaultValue="#ffffff"
                        id="card-color-input"
                        name="bgColor"
                        onChange={(e) => props.setBGColor(e.target.value)}
                    ></input>

                    <label htmlFor="title-color-input" name="titleColor">
                        Title Color:
                    </label>
                    <input
                        type="color"
                        id="title-color-input"
                        defaultValue="#000"
                        name="titleColor"
                        onChange={(e) => props.setTitleColor(e.target.value)}
                    ></input>

                    <label htmlFor="title-color-input" name="titleColor">
                        Side Name Color:
                    </label>
                    <input
                        type="color"
                        id="sideName-color-input"
                        defaultValue="#FF0000"
                        name="sideNameColor"
                        onChange={(e) => props.setTitleColor(e.target.value)}
                    ></input>

                    <label htmlFor="font-color-input" name="fontColor">
                        Font Color:
                    </label>
                    <input
                        type="color"
                        id="font-color-input"
                        name="fontColor"
                        onChange={(e) => props.setFontColor(e.target.value)}
                    ></input>

                    <label htmlFor="spineStyle">Spine Style: </label>
                    <select
                        id="spineStyle"
                        name="spineStyle"
                        onChange={(e) => props.setSpineStyle(e.target.value)}
                    >
                        <option value="spineNormal">Normal</option>
                        <option value="spineReverse">Reverse</option>
                    </select>

                    <label htmlFor="backStyle">Back Style: </label>
                    <select
                        id="backStyle"
                        name="backStyle"
                        onChange={(e) => props.setBackStyle(e.target.value)}
                    >
                        <option value="back1">Tape Info</option>
                        <option value="back2">Track-List</option>
                    </select>

                    <label htmlFor="sideTitleAlign">
                        Side Name Alignment:
                    </label>
                    <select
                        id="sideTitleAlign"
                        name="sideTitleAlign"
                        defaultValue="center"
                        onChange={(e) => props.setSideTitleAlign(e.target.value)}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>

                    <label htmlFor="title-input-fontsize">Title Size:</label>
                    <input
                        type="number"
                        id="title-input-fontsize"
                        name="title-input-fontsize"
                        defaultValue="11"
                        onChange={(e) => props.setTitleFontSize(e.target.value + "px")}
                    ></input>

                    <label htmlFor="sub-title-input-fontsize">
                        Sub-Title Size:
                    </label>
                    <input
                        type="number"
                        id="sub-title-input-fontsize"
                        name="sub-title-input-fontsize"
                        defaultValue="11"
                        onChange={(e) => props.setSubTitleFontSize(e.target.value + "px")}
                    ></input>

                    <label htmlFor="side-title-input-fontsize">
                        Song Name Size:
                    </label>
                    <input
                        type="number"
                        id="side-title-input-fontsize"
                        name="side-title-input-fontsize"
                        defaultValue="10.5"
                        onChange={(e) => props.setSongFontSize(e.target.value + "px")}
                    ></input>
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
                            onChange={(e) => props.setTitle(e.target.value)}
                        ></input>

                        <label htmlFor="subtitle-input">Sub-Title:</label>
                        <input
                            type="text"
                            id="subtitle-input"
                            name="subtitle"
                            defaultValue="Sub-Title"
                            onChange={(e) => props.setSubtitle(e.target.value)}
                        ></input>

                        <label htmlFor="sideATitle-input">Side A Title:</label>
                        <input
                            type="text"
                            id="sideATitle-input"
                            name="sideAName"
                            defaultValue="Side A"
                            onChange={(e) => props.setSideAName(e.target.value)}
                        ></input>

                        <label htmlFor="sideBTitle-input">Side B Title:</label>
                        <input
                            type="text"
                            id="sideBTitle-input"
                            name="sideBName"
                            defaultValue="Side B"
                            onChange={(e) => props.setSideBName(e.target.value)}
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
                        onChange={(e) => props.setCardNote1(e.target.value)}
                    ></input>

                    <br />
                    <label htmlFor="note2-input">Note 2:</label>
                    <input
                        type="text"
                        id="note2-input"
                        name="cardNote2"
                        placeholder="Note 2:"
                        onChange={(e) => props.setCardNote2(e.target.value)}
                    ></input>

                    <br />
                    <label htmlFor="sideASource-input">Side A Source:</label>
                    <input
                        type="text"
                        id="sideASource-input"
                        name="sideASource"
                        placeholder="Side A Source:"
                        onChange={(e) => props.setSideASource(e.target.value)}
                    ></input>
                    <br />
                    <label htmlFor="sideBSource-input">Side B Source:</label>
                    <input
                        type="text"
                        id="sideBSource-input"
                        name="sideBSource"
                        placeholder="Side B Source:"
                        onChange={(e) => props.setSideBSource(e.target.value)}
                    ></input>

                    <br />
                    <label htmlFor="nrType-input">Noise Reduction:</label>
                    <input
                        type="text"
                        id="nrType-input"
                        name="nrType"
                        placeholder="Noise Reduction:"
                        onChange={(e) => props.setNrType(e.target.value)}
                    ></input>
                </div>
            </div>

            <div className="settings-card">
                <h3>Song List</h3>

                <h4>Side A</h4>
                <div className="song-list">
                    {props.Asongs.map((song, idx) => (
                        <div key={idx.toString()} className="song">
                            <p>{idx + 1 + "."}</p>
                            <input
                                type="text"
                                placeholder={`New Song`}
                                value={song.name}
                                onChange={props.handleASongChange(idx)}
                            />
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={props.handleRemoveASong(idx)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="add-btn"
                    type="button"
                    onClick={props.handleAddASong}
                >
                    Add Song
                </button>

                <h4>Side B</h4>
                <div className="song-list">
                    {props.Bsongs.map((song, idx) => (
                        <div key={idx.toString()} className="song">
                            <p>{idx + 1 + "."}</p>
                            <input
                                type="text"
                                placeholder={`New Song`}
                                value={song.name}
                                onChange={props.handleBSongChange(idx)}
                            />
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={props.handleRemoveBSong(idx)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="add-btn"
                    type="button"
                    onClick={props.handleAddBSong}
                >
                    Add Song
                </button>
            </div>
        </form>
    );
}

export default CardForm;