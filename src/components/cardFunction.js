import React, { useState } from 'react';
import '../App.css';

function Card() {

    const [title, setTitle] = useState('Title');
    const [subTitle, setSubTitle] = useState('subTitle');
    const [Asongs, setASongs] = useState({
        id: 1, 
        name: 'Number 1'
    });
    const [Bsongs, setBSongs] = useState({
        id: 1, 
        name: 'Number 1'
    });
    const [dolbyType, setDoblyType] = useState('B');
    const [tapeType, setTapeType] = useState(1);
    const [bgColor, setBGColor] = useState('#FFF');
    const [fontColor, setFontColor] = useState('#000');

    /* const listSideA = Asongs.map((song) =>
        <li>{song}</li>
    ); */

    function changeTitle(e) {
        setTitle(e.target.value)
    }

    function changeSubTitle (e) {
        setSubTitle(e.target.value)
    }

    function handleASongChange (idx, evt) {
        const newSongs = Asongs.map((song, sidx) => {
            return song;
        });

        setASongs(newSongs);
    }

    function handleRemoveASong (idx) {
        setASongs(Asongs.filter((s, sidx) => idx !== sidx));
    };

    function handleAddASong() {
        setASongs(
            Asongs.concat([""])
        );
    };

    function handleBSongChange (idx, evt) {
        const newSongs = { Bsongs }.map((song, sidx) => {
            if (idx !== sidx) return song;
            return { ...song, name: evt.target.value };
        });

        setBSongs({ Bsongs: newSongs });
    }

    function handleRemoveBSong (idx) {
        setBSongs({
            Bsongs: { Bsongs }.filter((s, sidx) => idx !== sidx)
        });
    };

    function handleAddBSong() {
        setBSongs({
            Bsongs: { Bsongs }.concat([{ name: "" }])
        });
    };

    function changeCardColor(e) {
        setBGColor(e.target.value)
    }

    function changeCardFontColor(e) {
        setFontColor(e.target.value)
    }

    return (
        <div className="content-wrapper">
            <div style={{ backgroundColor: `${bgColor}`, color: `${fontColor}`}} className="jcard">
                {/* Front of J-Card */}
                <div className="jcard-front">
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                    <p>Side A</p>
                    <ol>
                        {Asongs.map((song, idx) => (
                            <li key={idx.toString()}>{song.name}</li>
                        ))}
                    </ol>

                    <p>Side B</p>
                    <ol>
                        {Bsongs.map((song, idx) => (
                            <li key={idx.toString()}>{song}</li>
                        ))}
                    </ol>

                </div>
                {/* J-Card Spine */}
                <div className="jcard-side">
                    <div>
                        <h2 className="rot90">{subTitle}</h2>
                        <h1 className="rot90">{title}</h1>
                    </div>

                    <div>
                        <p className="rot90">Type {tapeType} Tape</p>
                    </div>

                </div>
                {/* Back of J-card  */}
                <div className="jcard-back">
                    {/* <div>
                        <p>Side A</p>
                        <ol className="flex-list">
                            {{Asongs}.map((song, idx) => (
                                <li key={idx}>{song.name}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <p>Side B</p>
                        <ol className="flex-list">
                            {{Bsongs}.map((song, idx) => (
                                <li key={idx}>{song.name}</li>
                            ))}
                        </ol>
                    </div> */}
                </div>

            </div>

            {/* Form */}
            <form className="jcard-form">
                <h1>Options</h1>

                <label htmlFor="card-color-input" name="card-color-input">Card Color:</label>
                <input type="color" id="card-color-input" name="card-color-input"
                    onChange={(e) => changeCardColor(e)}></input>

                <label htmlFor="font-color-input" name="font-color-input">Font Color:</label>
                <input type="color" id="font-color-input" name="font-color-input"
                    onChange={(e) => changeCardFontColor(e)}></input>

                <label htmlFor="title-input">Title:</label>
                <input type="text" id="title-input" name="title-input" placeholder="Title"
                    onChange={(e) => changeTitle(e)}></input>
                <br />
                <label htmlFor="subtitle-input">Sub-Title:</label>
                <input type="text" id="subtitle-input" name="subtitle-input" placeholder="Sub-Title"
                    onChange={(e) => changeSubTitle(e)}></input>

                <p>Song List</p>
                <p>Side A</p>

                {Asongs.map((song, idx) => (
                    <div key={idx.toString()} className="song">
                        <input type="text" placeholder={`Song #${idx + 1}`}
                            value={song}
                            //onChange={handleASongChange(idx)}
                        />
                        <button
                            type="button" className="delete-btn" onClick={handleRemoveASong(idx)}>X
                        </button>

                    </div>
                ))}

                <button type="button" onClick={handleAddASong}>
                    Add Song
                        </button>

                <p>Side B</p>

                {/* {{Bsongs}.map((song, idx) => (
                    <div key={idx.toString()} className="song">
                        <input type="text" placeholder={`Song #${idx + 1}`}
                            value={song.name}
                            onChange={handleBSongChange(idx)}
                        />
                        <button
                            type="button" className="delete-btn" onClick={handleRemoveBSong(idx)}>X
                                </button>

                    </div>
                ))} */}

                <button type="button" onClick={handleAddBSong}>
                    Add Song
                        </button>
            </form>
        </div>

    )
};


export default Card;
