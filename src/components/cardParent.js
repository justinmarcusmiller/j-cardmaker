import React, { useEffect, useState } from "react";
import "../App.css";
import CardPreview from "./cardPreview";
import CardForm from "./cardForm";

function CardParent() {
    let [title, setTitle] = useState("Title");
    let [subtitle, setSubtitle] = useState("Sub-Title");
    let [Asongs, setAsongs] = useState([
        { name: "One" },
        { name: "Two" },
        { name: "Three" },
        { name: "Four" },
        { name: "Five" },
    ]);
    let [Bsongs, setBsongs] = useState([
        { name: "One" },
        { name: "Two" },
        { name: "Three" },
        { name: "Four" },
        { name: "Five" },
    ]);
    let [sideAName, setSideAName] = useState("Side A");
    let [sideBName, setSideBName] = useState("Side B");
    let [nrType, setNrType] = useState("Dolby B");
    let [tapeType, setTapeType] = useState(1);
    let [bgColor, setBGColor] = useState("#FFF");
    let [fontColor, setFontColor] = useState("#000");
    let [style, setStyle] = useState("text-vertical");
    let [fontFamily, setFontFamily] = useState("'Courier New', Courier, monospace");
    let [coverImg, setCoverImg] = useState("");
    let [cardNote1, setCardNote1] = useState("");
    let [cardNote2, setCardNote2] = useState("");
    let [sideASource, setSideASource] = useState("");
    let [sideBSource, setSideBSource] = useState("");
    let [songFontSize, setSongFontSize] = useState(10.5);
    let [titleFontSize, setTitleFontSize] = useState(11);
    let [subtitleFontSize, setSubTitleFontSize] = useState(11);
    let [backStyle, setBackStyle] = useState("back1");
    let [spineStyle, setSpineStyle] = useState("spineNormal");
    let [coverImagePosition, setCoverImagePosition] = useState("top");
    let [coverImageSize, setCoverImageSize] = useState("contain");
    let [coverImageRepeat, setCoverImageRepeat] = useState("no-repeat");
    let [sideTitleAlign, setSideTitleAlign] = useState("center");
    let [titleColor, setTitleColor] = useState("#000");
    let [sideNameColor, setSideNameColor] = useState("#FF0000");

    // Functions

    const handleASongChange = (idx) => (evt) => {
        const newSongs = Asongs.map((song, sidx) => {
            if (idx !== sidx) return song;
            return { ...song, name: evt.target.value };
        });
        setAsongs( newSongs )
    };

    const handleRemoveASong = (idx) => () => {
        setAsongs(Asongs.filter((s, sidx) => idx !== sidx))
    };

    const handleAddASong = () => {
        setAsongs(Asongs.concat([{ name: "" }]))
    };

    const handleBSongChange = (idx) => (evt) => {
        const newSongs = Bsongs.map((song, sidx) => {
            if (idx !== sidx) return song;
            return { ...song, name: evt.target.value };
        });

        setBsongs( newSongs )
    };

    const handleRemoveBSong = (idx) => () => {
        setBsongs(Bsongs.filter((s, sidx) => idx !== sidx))
    };

    const handleAddBSong = () => {
        setBsongs(Bsongs.concat([{ name: "" }]))
    };

    const addImage = (e) => {
        const file = e.target.files;
        if (file.length > 0) {
            const cover = URL.createObjectURL(file[0]);

            setCoverImg(cover)

        } else {
            setCoverImg("")
        }
    };

    // Page
    return (
        <div className="content-wrapper">
            <CardPreview 
                fontFamily={fontFamily}
                bgColor={bgColor}
                fontColor={fontColor}
                style={style}
                coverImg={coverImg}
                coverImagePosition={coverImagePosition}
                coverImageSize={coverImageSize}
                coverImageRepeat={coverImageRepeat}
                titleFontSize={titleFontSize}
                titleColor={titleColor}
                title={title}
                subtitleFontSize={subtitleFontSize}
                subtitle={subtitle}
                songFontSize={songFontSize}
                sideTitleAlign={sideTitleAlign}
                sideNameColor={sideNameColor}
                sideAName={sideAName}
                sideBName={sideBName}
                spineStyle={spineStyle}
                cardNote1={cardNote1}
                cardNote2={cardNote2}
                backStyle={backStyle}
                nrType={nrType}
                sideASource={sideASource}
                sideBSource={sideBSource}
                Asongs={Asongs}
                Bsongs={Bsongs}
            />

            {/* Form */}
            <CardForm
                setFontFamily={setFontFamily}
                setBGColor={setBGColor}
                setFontColor={setFontColor}
                setStyle={setStyle}
                setCoverImagePosition={setCoverImagePosition}
                setCoverImageSize={setCoverImageSize}
                setCoverImageRepeat={setCoverImageRepeat}
                setTitleFontSize={setTitleFontSize}
                setTitleColor={setTitleColor}
                setTitle={setTitle}
                setSubTitleFontSize={setSubTitleFontSize}
                setSubtitle={setSubtitle}
                setSongFontSize={setSongFontSize}
                setSideTitleAlign={setSideTitleAlign}
                setSideNameColor={setSideNameColor} // Doesnt Work or not used
                setSideAName={setSideAName}
                setSideBName={setSideBName}
                setSpineStyle={setSpineStyle}
                setCardNote1={setCardNote1}
                setCardNote2={setCardNote2}
                setBackStyle={setBackStyle}
                setNrType={setNrType}
                setSideASource={setSideASource}
                setSideBSource={setSideBSource}
                Asongs={Asongs}
                Bsongs={Bsongs}
                handleASongChange={handleASongChange}
                handleBSongChange={handleBSongChange}
                handleRemoveASong={handleRemoveASong}
                handleRemoveBSong={handleRemoveBSong}
                handleAddASong={handleAddASong}
                handleAddBSong={handleAddBSong}
                addImage={addImage}
            />
        </div>
    );
}

export default CardParent;
