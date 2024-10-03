import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function App() {
  const containerStyle = {
    height: '75vh',
    width: '60vw',
    margin: '50px auto',
    border: '2px solid WhiteSmoke',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
     marginLeft: '10%',
      marginBottom: '30%'
    
  };

  const inputStyle = {
    marginBottom: '20px',
    width: '90%'
  };

  return (
    <MDBContainer fluid>
      <div style={containerStyle}>
        <MDBRow className='w-100 h-100'>
          <MDBCol sm='6' className='d-flex flex-column justify-content-center'>
            <div style={formStyle}>
              <h2 className='text-center mb-4'>Login</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={inputStyle}
                className="form-control"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={inputStyle}
                className="form-control"
              />
              <MDBBtn color='dark' className='w-30 mb-3'>Submit</MDBBtn>
              <p className="small mb-1">
                <a className="text-muted" href="#!">Forgot password?</a>
              </p>
              <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
            </div>
          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img
              src="https://specials-images.forbesimg.com/imageserve/6022d2600897af9201e981f2/960x0.jpg?fit=scale"
              alt="Login"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default App;
