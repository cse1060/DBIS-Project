"use client"
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    const [iconColors, setIconColors] = useState({
        facebook: "#3498db",
        instagram: "#3498db",
        youtube: "#3498db",
        twitter: "#3498db",
    });

    const handleHover = (icon: any) => {
        setIconColors((prevColors: any) => ({ ...prevColors, [icon]: "#2980b9" }));
    };

    const handleMouseLeave = (icon: any) => {
        setIconColors((prevColors: any) => ({ ...prevColors, [icon]: "#3498db" }));
    };


    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* First Division - List of Links */}
                <div style={styles.division}>
                    <h4 style={styles.divisionTitle}>Links</h4>
                    <ul style={styles.list}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </div>

                {/* Second Division - List of Items */}
                <div style={styles.division}>
                    <h4 style={styles.divisionTitle}>Team Members</h4>
                    <ul style={styles.list}>
                        <li>Pratham Gupta</li>
                        <li>Samyak Dhyani</li>
                        <li>Vashistha Narayana Chaturvedi</li>
                        <li>Param Bansal</li>
                    </ul>
                </div>

                {/* Third Division - Icons */}
                <div style={styles.division}>
                    <h4 style={styles.divisionTitle}>Follow Us</h4>
                    <div style={styles.icons}>
                        <FaFacebookF
                            style={{ ...styles.icon, color: iconColors.facebook }}
                            onMouseOver={() => handleHover("facebook")}
                            onMouseLeave={() => handleMouseLeave("facebook")}
                        />
                        <FaInstagram
                            style={{ ...styles.icon, color: iconColors.instagram }}
                            onMouseOver={() => handleHover("instagram")}
                            onMouseLeave={() => handleMouseLeave("instagram")}
                        />
                        <FaYoutube
                            style={{ ...styles.icon, color: iconColors.youtube }}
                            onMouseOver={() => handleHover("youtube")}
                            onMouseLeave={() => handleMouseLeave("youtube")}
                        />
                        <FaTwitter
                            style={{ ...styles.icon, color: iconColors.twitter }}
                            onMouseOver={() => handleHover("twitter")}
                            onMouseLeave={() => handleMouseLeave("twitter")}
                        />
                    </div>
                </div>
            </div>
            <p style={styles.text}>© 2023 Properties. All rights reserved.</p>
        </footer>
    )
}
const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    icon: {
        cursor: "pointer",
        // color: "blue"
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    division: {
        flex: '1 1 30%',
        marginBottom: '20px',
    },
    divisionTitle: {
        fontSize: '1.2em',
        marginBottom: '10px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    icons: {
        fontSize: '1.5em',
        display: 'flex',
        width: "200px",
        marginLeft: "100px",
        justifyContent: 'space-between',
    },
};