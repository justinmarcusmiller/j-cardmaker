import React, { Component } from "react";
import "../App.css";

const CardPreview = (props) => {
    return (
        <div className="preview-wrapper">
            <div
                style={{
                    fontFamily: props.fontFamily,
                    backgroundColor: props.bgColor,
                    color: props.fontColor,
                }}
                className={props.style + " jcard"}
            >
                {/* Front of J-Card */}
                <div className={props.style + " jcard-front"}>
                    <div
                        style={{
                            backgroundImage: "url(" + props.coverImg + ")",
                            backgroundPosition: props.coverImagePosition,
                            backgroundSize: props.coverImageSize,
                            backgroundRepeat: props.coverImageRepeat,
                        }}
                        className={props.style + " cover"}
                    ></div>
                    <div className={props.style + " cover-text"}>
                        <h1
                            style={{
                                fontSize: props.titleFontSize,
                                color: props.titleColor,
                            }}
                        >
                            {props.title}
                        </h1>
                        <h2
                            style={{
                                fontSize: props.subtitleFontSize,
                                color: props.titleColor,
                            }}
                        >
                            {props.subtitle}
                        </h2>
                        <p
                            style={{
                                fontSize: props.songFontSize,
                                textAlign: props.sideTitleAlign,
                                color: props.sideNameColor,
                            }}
                        >
                            {props.sideAName}
                        </p>

                        <ol>
                            {props.Asongs.map((song, idx) => {
                                return (
                                    <li
                                        style={{
                                            fontSize: props.songFontSize,
                                        }}
                                        key={idx.toString()}
                                    >
                                        {song.name}
                                    </li>
                                );
                            })}
                        </ol>

                        <p
                            style={{
                                fontSize: props.songFontSize,
                                textAlign: props.sideTitleAlign,
                                color: props.sideNameColor,
                            }}
                        >
                            {props.sideBName}
                        </p>
                        <ol>
                            {props.Bsongs.map((song, idx) => {
                                return (
                                    <li
                                        style={{
                                            fontSize: props.songFontSize,
                                        }}
                                        key={idx.toString()}
                                    >
                                        {song.name}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                {/* J-Card Spine */}
                <div className={props.spineStyle + " jcard-side"}>
                    <div className="spineDiv">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </div>

                    <div className="spineDiv ta-r">
                        <h2>{props.cardNote1}</h2>
                        <h2>{props.cardNote2}</h2>
                    </div>
                </div>
                {/* Back of J-card  */}
                <div className={props.backStyle + " jcard-back"}>
                    <div className="br-dash">
                        <h3>{props.sideAName}</h3>
                        <h3>NR: {props.nrType}</h3>
                        <h3>SOURCE: {props.sideASource}</h3>
                    </div>
                    <div>
                        <h3>{props.sideBName}</h3>
                        <h3>NR: {props.nrType}</h3>
                        <h3>SOURCE: {props.sideBSource}</h3>
                    </div>
                </div>
                <div className={props.backStyle + " jcard-back2"}>
                    <ol>
                        <p style={{ fontSize: props.songFontSize }}>
                            {props.sideAName}
                        </p>
                        {props.Asongs.map((song, idx) => (
                            <li
                                style={{ fontSize: props.songFontSize }}
                                key={idx.toString()}
                            >
                                {song.name}
                            </li>
                        ))}
                    </ol>

                    <ol>
                        <p style={{ fontSize: props.songFontSize }}>
                            {props.sideBName}
                        </p>
                        {props.Bsongs.map((song, idx) => (
                            <li
                                style={{ fontSize: props.songFontSize }}
                                key={idx.toString()}
                            >
                                {song.name}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CardPreview;
