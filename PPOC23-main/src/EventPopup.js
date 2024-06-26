// EventPopup.js
import React from 'react';
import Modal from 'react-modal';
import './EventPopup.css';

// const EventPopup = ({ onClose }) => {
//   const modalStyle = {
//     overlay: {
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       zIndex: 1000,
//     },
//     content: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       display: 'flex',
//       background: 'white',
//       border: '1px solid #ccc',
//       padding: '20px',
//       zIndex: 1001,
//       width: '80%',
//       maxWidth: '800px',
//       height: '60%', // Adjust the height as needed
//     },
//     leftSection: {
//       flex: '1',
//       paddingRight: '20px',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     rightSection: {
//       flex: '2',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//   };

//   return (
//     <Modal
//       isOpen={true}
//       onRequestClose={onClose}
//       contentLabel="Event Popup"
//       style={modalStyle}
//     >
//       <div className="event-popup-content">
//         <div style={modalStyle.leftSection}></div>
//         <div style={modalStyle.rightSection}>
//           <h2>POLICY CONCLAVE</h2>
//           <p>Join us for our exciting new event.</p>
//           <button onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default EventPopup;


const EventPopup = ({ onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Event Popup"
      className="event-popup-modal"
      overlayClassName="event-popup-overlay"
    >
      <div className="event-popup-content">
      <div className="close-button" onClick={onClose}>
          <span>&times;</span>
        </div>
        {/* <div className="left-section">
          <img className="popup-image" src='/conclave.jpg'></img>
          </div>
        <div className="right-section"> */}
        <div className='text-content'>
        <a href="/policyconclave" target="_blank" rel="noopener noreferrer">
            <h2>POLICY <br/>CONCLAVE</h2>
          </a>
          </div>
          {/* <p>Join us for our exciting new event.</p> */}
          {/* <button onClick={onClose}>Close</button> */}
        {/* </div> */}
      </div>
    </Modal>
  );
};

export default EventPopup;