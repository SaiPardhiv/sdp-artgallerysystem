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

const cardData = [
  {
    title: 'Card 1',
    image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 2',
    image: 'https://mdbootstrap.com/img/new/standard/nature/185.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 3',
    image: 'https://mdbootstrap.com/img/new/standard/nature/186.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 4',
    image: 'https://mdbootstrap.com/img/new/standard/nature/187.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 5',
    image: 'https://mdbootstrap.com/img/new/standard/nature/188.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 6',
    image: 'https://mdbootstrap.com/img/new/standard/nature/189.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 7',
    image: 'https://mdbootstrap.com/img/new/standard/nature/190.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 8',
    image: 'https://mdbootstrap.com/img/new/standard/nature/191.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 9',
    image: 'https://mdbootstrap.com/img/new/standard/nature/192.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 10',
    image: 'https://mdbootstrap.com/img/new/standard/nature/193.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 11',
    image: 'https://mdbootstrap.com/img/new/standard/nature/194.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    title: 'Card 12',
    image: 'https://mdbootstrap.com/img/new/standard/nature/195.webp',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
];

export default function App() {
  return (
    <div style={{ margin: '5%' }}>
      <MDBRow className='justify-content-center'>
        {cardData.map((card, index) => (
          <MDBCol key={index} md='4' className='mb-4'>
            <MDBCard style={{ width: '90%', height: '100%', border: 'none' }}>
              <MDBCardImage 
                src={card.image} 
                position='top' 
                alt='...' 
                style={{ borderRadius: '3%' }} 
              />
              <MDBCardBody>
                <MDBCardTitle className='text-center'>{card.title}</MDBCardTitle>
                <MDBCardText className='text-center'>
                  {card.text}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <div className='text-center mt-4'>
        <a href='/explore'>
        <button 
          
          style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            cursor: 'pointer' ,
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          View More... <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </button>

        </a>
        
      </div>
    </div>
  );
}
