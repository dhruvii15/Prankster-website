import React, { useState } from "react";
import { Col, Offcanvas, Row, Toast, ToastBody } from "react-bootstrap";
import { RWebShare } from "react-web-share";

// Import share icons
import copyIcon from "../../img/share1.png";
import moreIcon from "../../img/share6.png";
import whatsappIcon from "../../img/whatsapp.png";
import telegramIcon from "../../img/telegram.svg";

const Share = ({ show, onHide, data2 }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const showMessage = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(data2?.ShareURL);
        showMessage("Link copied to clipboard!");
    };

    const whatsapp = () => {
        const text = encodeURIComponent(
            `${data2.Name}\n\n👇 Tap on link 👇 : \n${data2.ShareURL}`
        );
        const whatsappURL = `whatsapp://send?text=${text}`;
        const opened = window.open(whatsappURL, "_blank");
        if (!opened) {
            alert("Please install WhatsApp to share.");
        }
    };

    const telegram = () => {
        const text = encodeURIComponent(
            `${data2.Name}\n\n👇 Tap on link 👇 : \n${data2.ShareURL}`
        );
        const telegramURL = `tg://msg?text=${text}`;
        const opened = window.open(telegramURL, "_blank");
        if (!opened) {
            alert("Please install Telegram to share.");
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: data2?.Name,
                    text: `${data2?.Name}\n\n${data2?.ShareURL}`,
                })
                .then(() => {
                    console.log("Shared successfully!");
                    onHide();
                })
                .catch((error) => console.error("Error sharing content:", error));
        }
    };

    const getShareOptions = () => {
        const options = [{
            name: "Copy Link",
            icon: copyIcon,
            onClick: handleCopy,
            bgColor: "#f3f4f6",
        }];

        // Add WhatsApp and Telegram options when Web Share API is not available
        if (!navigator.share) {
            options.push(
                {
                    name: "WhatsApp",
                    icon: whatsappIcon, // Replace with whatsappIcon when available
                    onClick: whatsapp,
                    bgColor: "#f3f4f6",
                },
                {
                    name: "Telegram",
                    icon: telegramIcon, // Replace with telegramIcon when available
                    onClick: telegram,
                    bgColor: "#f3f4f6",
                }
            );
        }

        // Add More button with conditional sharing
        options.push({
            name: "More",
            icon: moreIcon,
            onClick: handleShare,
            bgColor: "#f3f4f6",
            useRWebShare: !navigator.share
        });

        return options;
    };

    const shareOptions = getShareOptions();

    return (
        <>
            <Offcanvas
                show={show}
                onHide={onHide}
                placement="bottom"
                style={{
                    height: "180px",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                }}
            >
                <div className="p-3 img-div mx-auto">
                    <div className="d-flex justify-content-center mb-2">
                        <div
                            style={{
                                width: "48px",
                                height: "4px",
                                backgroundColor: "#e5e7eb",
                                borderRadius: "9999px",
                            }}
                        />
                    </div>

                    <Row className="pt-4">
                        {shareOptions.map((option) => (
                            <Col xs={3} className="py-2" key={option.name}>
                                {option.useRWebShare ? (
                                    <RWebShare
                                        data={{
                                            text: data2?.Name,
                                            url: data2?.ShareURL,
                                        }}
                                        onClick={() => {
                                            console.log("shared successfully!!!!!!!!!!!!!!");
                                            onHide();
                                        }}
                                    >
                                        <button
                                            className="d-flex flex-column align-items-center border-0 bg-transparent"
                                        >
                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-circle mb-2"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                    backgroundColor: option.bgColor,
                                                }}
                                            >
                                                <img
                                                    src={option.icon}
                                                    alt={option.name}
                                                    style={{ width: "100%", height: "100%" }}
                                                />
                                            </div>
                                            <span
                                                className="text-secondary fw-lighter"
                                                style={{ fontSize: "12px" }}
                                            >
                                                {option.name}
                                            </span>
                                        </button>
                                    </RWebShare>
                                ) : (
                                    <button
                                        onClick={option.onClick}
                                        className="d-flex flex-column align-items-center border-0 bg-transparent"
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle mb-2"
                                            style={{
                                                width: "42px",
                                                height: "42px",
                                                backgroundColor: option.bgColor,
                                            }}
                                        >
                                            <img
                                                src={option.icon}
                                                alt={option.name}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                        <span
                                            className="text-secondary fw-lighter"
                                            style={{ fontSize: "12px" }}
                                        >
                                            {option.name}
                                        </span>
                                    </button>
                                )}
                            </Col>
                        ))}
                    </Row>
                </div>

                <Toast
                    show={showPopup}
                    onClose={() => setShowPopup(false)}
                    delay={2000}
                    autohide
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#fff",
                        padding: "3px",
                        borderRadius: "5px",
                        zIndex: "1000",
                    }}
                >
                    <ToastBody>{popupMessage}</ToastBody>
                </Toast>
            </Offcanvas>
        </>
    );
};

export default Share;