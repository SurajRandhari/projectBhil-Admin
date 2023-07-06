import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const initialData = [
    { id: 1, image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/banner/1684432550_4a5e88d652c48a35189c.jpg', heading: 'banner 1', subheading: 'Subheading 1' },
    { id: 2, image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/banner/1684432632_ce73e739a075d69bdaed.png', heading: 'banner 2', subheading: 'Subheading 2' },
    { id: 3, image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/banner/1684432632_ce73e739a075d69bdaed.png', heading: 'new batch ', subheading: 'we are starting our new online batch on 30 of this month' },
    { id: 4, image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/banner/1684871419_5736dc7747a54570d654.png', heading: 'new batch ', subheading: 'we are starting our new online batch on 30 of this month' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9nZ_SE8S5eEVhBrWY62D2EY2Ci19k4ztOg&usqp=CAU', heading: 'testing', subheading: 'testing' },
    ];
    

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [data, setData] = useState(initialData);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleDelete = (cardId) => {
    setSelectedCard(cardId);
    setShowAlert(true);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((card) => card.id !== selectedCard);
    setData(updatedData);
    setShowAlert(false);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((card) => (
          <div className="col-md-3 mb-4" key={card.id}>
            <div
              className="card"
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-img-container position-relative overflow-hidden" id='zoom'>
                <img
                  className="card-img-top card-img-zoom img-fluid zoooom"
                  src={card.image}
                  alt={`Card ${card.id}`}
                  style={{ height: '300px' }}
                />
                {hoveredCard === card.id && (
                  <div className="card-buttons position-absolute top-50 start-50 translate-middle" style={{display:"flex", justifyContent:'space-around'}}>
                    <button className="btn btn-outline-primary" style={{margin:'5px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.916 6.916 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M8 5v3H5v2h3v3h2v-3h3V8h-3V5H8Z"/></svg>

                    </button>
                    <button className="btn btn-outline-danger" style={{margin:'5px'}} onClick={() => handleDelete(card.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m4 6v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7h8m-2.5-4l1 1H17v2H7V7h2.5l1-1h3Z"/></svg>
                    </button>
                    <button className="btn btn-outline-warning" style={{margin:'5px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"/><path fill="currentColor" d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"/></svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="card-body text-center mt-2">
                <h5 className="card-title">{card.heading}</h5>
                <p className="card-text">{card.subheading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert alert-danger position-fixed top-0 start-50 translate-middle-x" role="alert">
          Are you sure you want to delete this card?
          <button className="btn btn-danger" onClick={handleConfirmDelete}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
