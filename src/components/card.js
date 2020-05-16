import React, { Component } from 'react';
import '../App.css';

class Card extends Component {

    constructor() {
        super()
        this.state = {
            title: 'Title',
            subtitle: 'Sub-Title',
            Asongs: [{ name: "Number 1" }],
            Bsongs: [{ name: "Number 1" }],
            sideAName: 'side a',
            sideBName: 'side b',
            nrType: 'B',
            tapeType: 1,
            bgColor: '#FFF',
            fontColor: '#000',
            style: 'text-vertical',
            fontFamily: "'Courier New', Courier, monospace",
            coverImg: '',
            cardNote1: '',
            cardNote2: '',
            sideASource: '',
            sideBSource: '',
            songFontSize: 10.5,
            titleFontSize: 11,
            subtitleFontSize: 11
        };
    }

    // Functions

    changeFontFamily = e => {
        this.setState({
            fontFamily: e.target.value
        })
        /* if (e.target.value === "'Gloria Hallelujah', cursive") {
            console.log('test')
            this.setState({
                style: this.state.style + " underlines"
            })
        } */

    }

    changeTitle = e => {
        this.setState({
            title: e.target.value
        })
    }

    changeSubTitle = e => {
        this.setState({
            subtitle: e.target.value
        })
    }

    changeSideAName = e => {
        this.setState({
            sideAName: e.target.value
        })
    }

    changeSideBName = e => {
        this.setState({
            sideBName: e.target.value
        })
    }

    handleASongChange = idx => evt => {
        const newSongs = this.state.Asongs.map((song, sidx) => {
            if (idx !== sidx) return song;
            return { ...song, name: evt.target.value };
        });

        this.setState({ Asongs: newSongs });
    }

    handleRemoveASong = idx => () => {
        this.setState({
            Asongs: this.state.Asongs.filter((s, sidx) => idx !== sidx)
        });
    };

    handleAddASong = () => {
        this.setState({
            Asongs: this.state.Asongs.concat([{ name: "" }])
        });
    };

    handleBSongChange = idx => evt => {
        const newSongs = this.state.Bsongs.map((song, sidx) => {
            if (idx !== sidx) return song;
            return { ...song, name: evt.target.value };
        });

        this.setState({ Bsongs: newSongs });
    }

    handleRemoveBSong = idx => () => {
        this.setState({
            Bsongs: this.state.Bsongs.filter((s, sidx) => idx !== sidx)
        });
    };

    handleAddBSong = () => {
        this.setState({
            Bsongs: this.state.Bsongs.concat([{ name: "" }])
        });
    };

    changeCardColor = e => {
        this.setState({
            bgColor: e.target.value
        })
    }

    changeCardFontColor = e => {
        this.setState({
            fontColor: e.target.value
        })
    }

    changeStyle = e => {
        this.setState({
            style: e.target.value
        })
    }

    addImage = e => { //WORKS
        const file = e.target.files;
        if (file.length > 0) {
            const cover = URL.createObjectURL(file[0])

            this.setState({
                coverImg: cover
            })
        } else {
            this.setState({
                coverImg: ''
            })
        }
    }

    changeNote1 = e => {
        this.setState({
            cardNote1: e.target.value
        })
    }

    changeNote2 = e => {
        this.setState({
            cardNote2: e.target.value
        })
    }

    changeSideASource = e => {
        this.setState({
            sideASource: e.target.value
        })
    }

    changeSideBSource = e => {
        this.setState({
            sideBSource: e.target.value
        })
    }

    changeNRType = e => {
        this.setState({
            nrType: e.target.value
        })
    }

    changeSideATitle = e => {
        this.setState({
            sideAName: e.target.value
        })
    }

    changeSideBTitle = e => {
        this.setState({
            sideBName: e.target.value
        })
    }

    changeTitleSize = e => {
        this.setState({
            titleFontSize: e.target.value + 'px'
        })
    }

    changeSubTitleSize = e => {
        this.setState({
            subtitleFontSize: e.target.value + 'px'
        })
    }

    changeSongSize = e => {
        this.setState({
            songFontSize: e.target.value + 'px'
        })
    }

    // Page
    render() {
        return (
            <div className="content-wrapper">
                <div style={{ fontFamily: this.state.fontFamily, backgroundColor: this.state.bgColor, color: this.state.fontColor }} className={this.state.style + " jcard"}>
                    {/* Front of J-Card */}
                    <div className={this.state.style + " jcard-front"}>
                        <div style={{ backgroundImage: "url(" + this.state.coverImg + ")" }} className={this.state.style + " cover"}></div>
                        <div className={this.state.style + " cover-text"}>
                            <h1 style={{ fontSize: this.state.titleFontSize }}>{this.state.title}</h1>
                            <h2 style={{ fontSize: this.state.subtitleFontSize }}>{this.state.subtitle}</h2>
                            <p style={{ fontSize: this.state.songFontSize }}>{this.state.sideAName}</p>
                            <ol>
                                {this.state.Asongs.map((song, idx) => (
                                    <li style={{ fontSize: this.state.songFontSize }} key={idx.toString()}>{song.name}</li>
                                ))}
                            </ol>

                            <p style={{ fontSize: this.state.songFontSize }}>{this.state.sideBName}</p>
                            <ol>
                                {this.state.Bsongs.map((song, idx) => (
                                    <li style={{ fontSize: this.state.songFontSize }} key={idx.toString()}>{song.name}</li>
                                ))}
                            </ol>
                        </div>

                    </div>
                    {/* J-Card Spine */}
                    <div className="jcard-side">
                        <div className="spineDiv">
                            <h1>{this.state.title}</h1>
                            <h2>{this.state.subtitle}</h2>
                        </div>

                        <div className="spineDiv ta-r">
                            <h2>{this.state.cardNote1}</h2>
                            <h2>{this.state.cardNote2}</h2>
                        </div>
                        {/*  */}

                    </div>
                    {/* Back of J-card  */}
                    <div className="jcard-back">
                        <div className="br-dash">
                            <h3>{this.state.sideAName}</h3>
                            <h3>NR: {this.state.nrType}</h3>
                            <h3>SOURCE: {this.state.sideASource}</h3>
                        </div>
                        <div >
                            <h3>{this.state.sideBName}</h3>
                            <h3>NR: {this.state.nrType}</h3>
                            <h3>SOURCE: {this.state.sideBSource}</h3>
                        </div>
                    </div>

                </div>

                {/* Form */}
                <form className="jcard-form">
                    <h1>Options</h1>



                    <h3>Styling</h3>
                    <div id="style-form">
                        <div id="front-style">
                            <h4>Cover Style</h4>
                            <input type="radio" id="text-vertical" name="style" value="text-vertical"
                                onChange={(e) => this.changeStyle(e)}></input>
                            <label htmlFor="text-vertical">Vertical Track-List</label>
                            <br />
                            <input type="radio" id="text-horizontal" name="style" value="text-horizontal"
                                onChange={(e) => this.changeStyle(e)}></input>
                            <label htmlFor="text-horizontal">Horizontal Track-List</label>
                            <br />
                            <input type="radio" id="img-with-text" name="style" value="img-with-text"
                                onChange={(e) => this.changeStyle(e)}></input>
                            <label htmlFor="img-with-text">Image With Track-List</label>
                            <br />
                            <input type="radio" id="img-only" name="style" value="img-only"
                                onChange={(e) => this.changeStyle(e)}></input>
                            <label htmlFor="img-only">Image Only</label>
                            <br />
                            <label htmlFor="cover-upload">Cover Image:</label>
                            <input type="file" id="cover-upload" name="cover-upload" attrs='accepts="image/*"'
                                onChange={(e) => this.addImage(e)}></input>
                        </div>

                        <div id="font-form">
                            <h4>Font-Style</h4>
                            <input type="radio" id="courier" name="font-family" value="'Courier New', Courier, monospace"
                                onChange={(e) => this.changeFontFamily(e)}></input>
                            <label htmlFor="courier">Courier</label>
                            <br />
                            <input type="radio" id="Sans-Serif" name="font-family" value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                onChange={(e) => this.changeFontFamily(e)}></input>
                            <label htmlFor="Sans-Serif">Sans-Serif</label>
                            <br />
                            <input type="radio" id="handwritten" name="font-family" value="'Gloria Hallelujah', cursive"
                                onChange={(e) => this.changeFontFamily(e)}></input>
                            <label htmlFor="handwritten">Hand-Written</label>
                        </div>

                        <div id="color-form">
                            <h3>Colors</h3>
                            <label htmlFor="card-color-input" name="card-color-input">Card Color:</label>
                            <input type="color" id="card-color-input" name="card-color-input"
                                onChange={(e) => this.changeCardColor(e)}></input>

                            <label htmlFor="font-color-input" name="font-color-input">Font Color:</label>
                            <input type="color" id="font-color-input" name="font-color-input"
                                onChange={(e) => this.changeCardFontColor(e)}></input>
                        </div>
                    </div>

                    <h3>Titles</h3>
                    <div id="titles-form">
                        <div className="titles-form-inputs">
                            <label htmlFor="title-input">Title:</label>
                            <input type="text" id="title-input" name="title-input" placeholder="Title"
                                onChange={(e) => this.changeTitle(e)}></input>

                            <label htmlFor="subtitle-input">Sub-Title:</label>
                            <input type="text" id="subtitle-input" name="subtitle-input" placeholder="Sub-Title"
                                onChange={(e) => this.changeSubTitle(e)}></input>

                            <label htmlFor="sideATitle-input">Side A Title:</label>
                            <input type="text" id="sideATitle-input" name="sideATitle-input" placeholder="Title"
                                onChange={(e) => this.changeSideATitle(e)}></input>

                            <label htmlFor="sideBTitle-input">Side B Title:</label>
                            <input type="text" id="sideBTitle-input" name="sideBTitle-input" placeholder="Side B Title"
                                onChange={(e) => this.changeSideBTitle(e)}></input>
                        </div>

                        <div className="titles-form-inputs">
                            <label htmlFor="title-input-fontsize">Title Size:</label>
                            <input type="number" id="title-input-fontsize" name="title-input-fontsize" placeholder="11"
                                onChange={(e) => this.changeTitleSize(e)}></input>

                            <label htmlFor="sub-title-input-fontsize">Sub-Title Size:</label>
                            <input type="number" id="sub-title-input-fontsize" name="sub-title-input-fontsize" placeholder="11"
                                onChange={(e) => this.changeSubTitleSize(e)}></input>

                            <label htmlFor="side-title-input-fontsize">Side-Title Size:</label>
                            <input type="number" id="side-title-input-fontsize" name="side-title-input-fontsize" placeholder="10.5"
                                onChange={(e) => this.changeSongSize(e)}></input>
                        </div>

                    </div>

                    <h3>Other Information</h3>
                    <div id="other-form">
                        <br />
                        <label htmlFor="note1-input">Note 1:</label>
                        <input type="text" id="note1-input" name="note1-input" placeholder="Note 1:"
                            onChange={(e) => this.changeNote1(e)}></input>

                        <br />
                        <label htmlFor="note2-input">Note 2:</label>
                        <input type="text" id="note2-input" name="note2-input" placeholder="Note 2:"
                            onChange={(e) => this.changeNote2(e)}></input>

                        <br />
                        <label htmlFor="nrType-input">Side A Source:</label>
                        <input type="text" id="sideASource-input" name="sideASource-input" placeholder="Side A Source:"
                            onChange={(e) => this.changeSideASource(e)}></input>
                        <br />
                        <label htmlFor="nrType-input">Side B Source:</label>
                        <input type="text" id="sideBSource-input" name="sideBSource-input" placeholder="Side B Source:"
                            onChange={(e) => this.changeSideBSource(e)}></input>

                        <br />
                        <label htmlFor="nrType-input">Noise Reduction:</label>
                        <input type="text" id="nrType-input" name="nrType-input" placeholder="Noise Reduction:"
                            onChange={(e) => this.changeNRType(e)}></input>
                    </div>

                    <p>Song List</p>
                    <p>Side A</p>

                    {this.state.Asongs.map((song, idx) => (
                        <div key={idx.toString()} className="song">
                            <p>{idx + 1 + '.'}</p>
                            <input type="text" placeholder={`Song #${idx + 1}`}
                                value={song.name}
                                onChange={this.handleASongChange(idx)}
                            />
                            <button
                                type="button" className="delete-btn" onClick={this.handleRemoveASong(idx)}>X
                                </button>

                        </div>
                    ))}

                    <button type="button" onClick={this.handleAddASong}>
                        Add Song
                        </button>

                    <p>Side B</p>

                    {this.state.Bsongs.map((song, idx) => (
                        <div key={idx.toString()} className="song">
                            <p>{idx + 1 + '.'}</p>
                            <input type="text" placeholder={`Song #${idx + 1}`}
                                value={song.name}
                                onChange={this.handleBSongChange(idx)}
                            />
                            <button
                                type="button" className="delete-btn" onClick={this.handleRemoveBSong(idx)}>X
                                </button>

                        </div>
                    ))}

                    <button type="button" onClick={this.handleAddBSong}>
                        Add Song
                        </button>

                </form>
                <footer>
                    <p>Copyright 2020 - Justin Miller</p>
                </footer>

            </div>

        )
    };
};

export default Card;
