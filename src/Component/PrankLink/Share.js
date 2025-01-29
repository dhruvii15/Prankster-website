import React, { useState } from "react";
import { Col, Offcanvas, Row, Toast, ToastBody } from "react-bootstrap";

// Import share icons
import copyIcon from "../../img/share1.png";
import moreIcon from "../../img/share6.png";

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

    const handleShare = () => {
        if (navigator.share) {
            onHide(); // Close the Offcanvas before opening share dialog
            navigator
                .share({
                    title: data2?.Name,
                    text: `${data2?.Name}\n\n${data2?.ShareURL}`,
                })
                .then(() => {
                    console.log("Shared successfully!");
                })
                .catch((error) => {
                    console.error("Error sharing content:", error);
                    // Optionally show error message to user
                });
        }
    };

    const getShareOptions = () => {
        if (navigator.share) {
            return [{
                name: "Copy Link",
                icon: copyIcon,
                onClick: handleCopy,
                bgColor: "#f3f4f6"
            }, {
                name: "Share",
                icon: moreIcon,
                onClick: handleShare,
                bgColor: "#f3f4f6"
            }];
        }

        return [{
            name: "Copy Link",
            icon: copyIcon,
            onClick: handleCopy,
            bgColor: "#f3f4f6"
        }];
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