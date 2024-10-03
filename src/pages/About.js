import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function About() {
  const containerStyle = {
    padding: '50px',
    textAlign: 'center',
  };

  const headingStyle = {
    marginBottom: '30px',
    fontSize: '2.5rem',
  };
  const paragraphStyle = {
    marginBottom: '20px',
    fontSize: '1.1rem',
    lineHeight: '1.5',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
  };

  return (
    <MDBContainer style={containerStyle}>
      <h1 style={headingStyle}>About ArtVerse</h1>
      <MDBRow>
        <MDBCol md='6'>
          <p style={paragraphStyle}>
            ArtVerse is a dynamic art gallery system designed to bring artists and art enthusiasts together in a vibrant online community. Our platform showcases a diverse collection of artworks, making it easy for users to explore, discover, and appreciate various forms of art.
          </p>
          <p style={paragraphStyle}>
            We believe that art is a universal language that transcends boundaries and connects people. At ArtVerse, we are committed to promoting creativity and providing a platform for artists to showcase their talents to a global audience.
          </p>
          <h2 style={headingStyle}>Meet the Developers</h2>
          <p style={paragraphStyle}>ArtVerse is brought to life by a passionate team:</p>
          <b>Pardhiv Sai</b><br></br>
          <b>Swamy</b><br></br>
          <b>Bhanu prakash</b>
        </MDBCol>
        <MDBCol md='6'>
          <img 
            src="https://i.pinimg.com/originals/71/d9/29/71d929505326e49e4ba4372a21cba52a.jpg" 
            alt="Art Gallery" 
            style={imageStyle}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default About;
