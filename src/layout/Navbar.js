import React from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Importing dropdown icon from react-icons

const Navbar = () => {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'WhiteSmoke',
        padding: '15px 30px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    const brandStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    };

    const menuStyle = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        flexGrow: 1,
        justifyContent: 'center',
    };

    const menuItemStyle = {
        position: 'relative',
        margin: '0 20px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '18px',
        padding: '10px',
        transition: 'transform 0.2s, color 0.2s',
    };

    const dropdownContentStyle = {
        display: 'none',
        position: 'absolute',
        backgroundColor: 'white',
        minWidth: '160px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        borderRadius: '5px',
        overflow: 'hidden',
    };

    const dropdownStyle = {
        position: 'relative',
    };

    const dropdownLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        color: '#333',
        fontSize: '18px',
        padding: '10px 15px',
        transition: 'background-color 0.2s, transform 0.2s',
    };

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        margin: '0 10px',
    };

    const handleMouseEnter = (e) => {
        const dropdown = e.currentTarget.querySelector('.dropdown-content');
        if (dropdown) dropdown.style.display = 'block';
    };

    const handleMouseLeave = (e) => {
        const dropdown = e.currentTarget.querySelector('.dropdown-content');
        if (dropdown) dropdown.style.display = 'none';
    };

    return (
        <nav style={navbarStyle}>
            <div style={brandStyle}>ArtVerse</div>
            <ul style={menuStyle}>
                <li style={menuItemStyle}>
                    <a
                        href="/"
                        style={linkStyle}
                        className="navbar-link"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007BFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                    >
                        Home
                    </a>
                </li>
                <li style={dropdownStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a
                        href="#"
                        style={{ ...linkStyle, display: 'flex', alignItems: 'center' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007BFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                    >
                        Arts <FaCaretDown style={{ marginLeft: '5px' }} />
                    </a>
                    <div className="dropdown-content" style={dropdownContentStyle}>
                        <a
                            href="/explore"
                            style={dropdownLinkStyle}
                            className="navbar-link"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                            Browse Arts
                        </a>
                        <a
                            href="/participate"
                            style={dropdownLinkStyle}
                            className="navbar-link"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                            Participate
                        </a>
                    </div>
                </li>
                <li style={menuItemStyle}>
                    <a
                        href="/purchase"
                        style={linkStyle}
                        className="navbar-link"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007BFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                    >
                       Purchase
                    </a>
                </li>
                <li style={menuItemStyle}>
                    <a
                        href="/about"
                        style={linkStyle}
                        className="navbar-link"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007BFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                    >
                        About
                    </a>
                </li>
            </ul>
            <div>
            <a href="/login" style={{ textDecoration: 'none' }}>
                <button style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>LOGIN</button></a>
                <a href="/register" style={{ textDecoration: 'none' }}>
                <button style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>SIGNUP</button></a>
            </div>
        </nav>
    );
};

export default Navbar;
