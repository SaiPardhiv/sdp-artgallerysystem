import React, { useState } from 'react';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://webneel.com/wallpaper/sites/default/files/images/03-2014/10-art-wallpaper.1280.jpg',
        'https://webneel.com/daily/sites/default/files/images/daily/10-2018/17-nature-scenery-oil-painting-trees-arteet.jpg',
        'https://thewowstyle.com/wp-content/uploads/2015/01/image.painting-art.jpg',
        'https://wallpaper-house.com/data/out/10/wallpaper2you_460761.jpg',
        'https://i.ytimg.com/vi/8tdoe-7T2ng/maxresdefault.jpg',
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const [isHovered, setIsHovered] = useState(false);

    // Main container style with background color
    const mainContainerStyle = {
        backgroundColor: 'white',
        minHeight: '100vh', // Optional: Ensures full height
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '40vh',
        width: '75vw',
        margin: 'auto',
    };

    const leftContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '3em',
        fontWeight: 'bold',
        textAlign: 'left',
        padding: '20px',
        marginTop: '150px',
        lineHeight: '1.2',
        backgroundColor: 'white',
    };

    const rightContainerStyle = {
        flex: 1,
        backgroundColor: 'white',
        padding: '20px',
        color: 'darkgrey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '150px',
    };

    const buttonStyle = {
        marginTop: '20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    };

    const carouselStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '75vw',
        margin: '30px auto',
        position: 'relative',
        height: '60vh',
        transition: 'transform 0.3s ease',
    };

    const imagesContainerStyle = {
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentIndex * 100}%)`,
        borderRadius: '5%',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '3%',
        
    };

    const arrowStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        cursor: 'pointer',
        padding: '50px',
        fontSize: '2em',
        zIndex: 1,
    };

    // Styles for the new containers
    const belowContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80vw',
        margin: '30px auto',
    };

    const leftImageContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
        
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
    };

    const rightTextContainerStyle = {
        flex: 1,
        padding: '15px',
        textAlign: 'left',
        color: 'darkgrey',
        fontWeight: 'bold',
    };
    

    return (
        <div style={mainContainerStyle}>
            <div style={containerStyle}>
                <div style={leftContainerStyle}>
                    Welcome to ArtVerse, where creativity meets expression in every stroke.
                </div>
                <div style={rightContainerStyle}>
                    <p>
                        STEP INTO A REALM WHERE ARTISTRY KNOWS NO BOUNDS, WHERE EVERY CANVAS HOLDS A UNIVERSE OF STORIES WAITING TO BE TOLD.
                        DISCOVER THE MAGIC OF ARTVERSE, YOUR PREMIER DESTINATION FOR EXPLORING THE DEPTHS OF CREATIVITY. BEGIN YOUR JOURNEY NOW AND UNLOCK A WORLD OF INSPIRATION.
                    </p>
                    <a href='/explore'>
                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        EXPLORE NOW
                    </button>
                    </a>
                    
                </div>
            </div>
            <br /><br /><br />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto' }}>
                <button style={{ ...arrowStyle, marginRight: '10px' }} onClick={handlePrev}>❮</button>
                <div style={carouselStyle}>
                    <div style={imagesContainerStyle}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Carousel ${index}`} style={imageStyle} />
                        ))}
                    </div>
                </div>
                <button style={{ ...arrowStyle, marginLeft: '10px' }} onClick={handleNext}>❯</button>
            </div>
            <br /><br />

            {/* New containers below the carousel */}
            <div style={belowContainerStyle}>
                <div style={leftImageContainerStyle}>
                    <img
                        src='https://i.pinimg.com/originals/43/6f/ff/436fff2ceb1c800c74c0f26be7a58c59.jpg'
                        alt='Random'
                        
                        
                        style={{ width: '90%', height: '90%', borderRadius: '3%', objectFit: 'cover',transition: 'transform 0.5s ease',
                            transform: isHovered ? 'scale(0.98)' : 'scale(1)' }}
                            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
                <div style={rightTextContainerStyle}>
                    <p>
                        Explore the vibrant world of art and creativity. This space allows you to dive into various artistic expressions that inspire and engage.

                    </p>
                    <p>At ArtVerse, we believe that art transcends boundaries. Our gallery showcases a diverse collection of artworks from emerging and established artists, inviting you to experience the beauty and depth of human expression.</p>
                    <a href='/about'>
                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        ABOUT US
                    </button>
                    
                    </a>
                    
                </div>
            </div><br></br><br></br><br></br><br></br>
        </div>
    );
};

export default Home;
