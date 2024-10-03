import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{ backgroundColor: 'WhiteSmoke' }} className='text-center text-lg-start text-muted'>
      <br></br><br></br>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                ArtVerse
              </h6>
              <p>
                Discover the magic of ArtVerse, your premier destination for exploring the depths of creativity. 
              </p>
              <p>Begin your journey now and unlock a world of inspiration.</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              {/* Additional content can go here */}
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' /> Andhra Pradesh, India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-2' /> Artverse@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-2' /> +91 9959976205
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'white' }}>
        © 2024 Copyright: ArtVerse
      </div>
    </MDBFooter>
  );
}
