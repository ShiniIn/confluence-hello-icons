import React, { useState } from "react";
import { FaStar, FaHeart, FaCircle } from "react-icons/fa"; // You can import other icons as needed

function IconPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(<FaStar />);
    const [iconSize, setIconSize] = useState(32);
    const [iconColor, setIconColor] = useState("blue");

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const selectIcon = (icon) => {
        setSelectedIcon(icon);
        togglePanel();
    };

    const handleSizeChange = (e) => {
        setIconSize(parseInt(e.target.value, 10));
    };

    const handleColorChange = (e) => {
        setIconColor(e.target.value);
    };

    return (
        <div>
            <button onClick={togglePanel}>Open Panel</button>

            {isOpen && (
                <div className="panel">
                    <h2>Select an Icon</h2>
                    <div className="icon-list">
                        <FaStar onClick={() => selectIcon(<FaStar />)} />
                        <FaHeart onClick={() => selectIcon(<FaHeart />)} />
                        <FaCircle onClick={() => selectIcon(<FaCircle />)} />
                        {/* Add more icons here */}
                    </div>

                    <div className="icon-customization">
                        <h3>Customize Icon</h3>
                        <label>
                            Size:
                            <input
                                type="number"
                                value={iconSize}
                                onChange={handleSizeChange}
                            />
                        </label>
                        <label>
                            Color:
                            <input
                                type="text"
                                value={iconColor}
                                onChange={handleColorChange}
                            />
                        </label>
                    </div>

                    <div className="selected-icon">
                        <h3>Selected Icon</h3>
                        <div style={{ fontSize: `${iconSize}px`, color: iconColor }}>
                            {selectedIcon}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IconPanel;
