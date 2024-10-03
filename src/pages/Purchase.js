import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const artData = [
  {
    name: 'Starry Night',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    price: '$100',
  },
  {
    name: 'The Scream',
    image: 'https://mdbootstrap.com/img/new/standard/nature/185.webp',
    price: '$150',
  },
  {
    name: 'Mona Lisa',
    image: 'https://mdbootstrap.com/img/new/standard/nature/186.webp',
    price: '$200',
  },
  {
    name: 'The Persistence of Memory',
    image: 'https://mdbootstrap.com/img/new/standard/nature/187.webp',
    price: '$120',
  },
  {
    name: 'Girl with a Pearl Earring',
    image: 'https://mdbootstrap.com/img/new/standard/nature/188.webp',
    price: '$180',
  },
  {
    name: 'The Last Supper',
    image: 'https://mdbootstrap.com/img/new/standard/nature/189.webp',
    price: '$250',
  },
  {
    name: 'The Kiss',
    image: 'https://mdbootstrap.com/img/new/standard/nature/190.webp',
    price: '$220',
  },
  {
    name: 'The Birth of Venus',
    image: 'https://mdbootstrap.com/img/new/standard/nature/191.webp',
    price: '$175',
  },
  {
    name: 'American Gothic',
    image: 'https://mdbootstrap.com/img/new/standard/nature/192.webp',
    price: '$130',
  },
  {
    name: 'Composition VIII',
    image: 'https://mdbootstrap.com/img/new/standard/nature/193.webp',
    price: '$210',
  },
];

export default function Purchase() {
  return (
    <div style={{ margin: '5%' }}>
      <MDBRow className='justify-content-center'>
        {artData.map((art, index) => (
          <MDBCol key={index} md='4' className='mb-4'>
            <MDBCard style={{ width: '90%', height: '100%', border: 'none' }}>
              <MDBCardImage 
                src={art.image} 
                position='top' 
                alt={art.name} 
                style={{ borderRadius: '3%' }} 
              />
              <MDBCardBody>
                <MDBCardTitle className='text-center'>{art.name}</MDBCardTitle>
                <MDBCardText className='text-center'>
                  {art.price}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <div className='text-center mt-4'>
        <button 
          style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          View More Artworks <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
