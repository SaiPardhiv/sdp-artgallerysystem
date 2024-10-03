import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function App() {
  const containerStyle = {
    height: '100vh',
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
          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img
              src="https://th.bing.com/th/id/OIP.vHbGMqxGvEgTFDDl1-2S-QAAAA?rs=1&pid=ImgDetMain"
              alt="Registration"
              className="w-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </MDBCol>
          <MDBCol sm='6' className='d-flex flex-column justify-content-center'>
            <div style={formStyle}>
              <h2 className='text-center mb-4'>Register</h2>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={inputStyle}
                className="form-control"
              />
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                required
                style={inputStyle}
                className="form-control"
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
              <label htmlFor="retypePassword">Retype Password:</label>
              <input
                type="password"
                id="retypePassword"
                name="retypePassword"
                required
                style={inputStyle}
                className="form-control"
              />
              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                style={inputStyle}
                className="form-control"
              />
              <MDBBtn color='dark' className='w-30 mb-3'>Register</MDBBtn>
              <p>Already have an account? <a href="/login" className="link-info">Login here</a></p>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default App;
