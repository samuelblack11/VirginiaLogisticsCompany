import React, { useState, useEffect } from 'react';
import PopupForm from './PopupForm'; // Import the PopupForm component
import Values from './Values';
import UseCases from './UseCases';

import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="App">
      {/* Header Area */}
      <header className="header">
        <h1>Virginia Logistics Company</h1>
        <p>Efficient, flexible logistics in Northern Virginia</p>
      </header>

      {/* Schedule Button */}
      <div className="schedule">
        <button onClick={handleOpenForm}>Schedule Now</button>
      </div>

      {/* Banner Image */}
      <div className="banner">
        <img
          src="/bannerLogisticsOp.png"
          alt="Logistics Banner"
        />
      </div>

      {/* Use Cases Section */}
      <UseCases />
      {/* Value Blocks Section */}
      <Values />

      {/* Image Showcase */}
      <section className="image-showcase">
        <img
          src="vanOnHighway.png"
          alt="Highway Driving"
        />
        <img
          src="/packageDelivery.png"
          alt="Package Delivery"
        />
        <img
          src="linehaulLoadOperation.png"
          alt="LineHaul Load"
        />
      </section>

      {/* About Statement */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Virginia Logistics Company is dedicated to providing reliable, flexible logistics services for businesses and individuals. 
          With our focus on efficiency and a commitment to leveraging technology, we ensure smooth transportation of goods between Baltimore 
          and Richmond. Whether it’s a single item or a full pallet, we adapt to your needs with precision and care.
        </p>
        <p>
          Our mission is simple: deliver exceptional logistics solutions while respecting your time and budget. 
          Let us handle your logistics so you can focus on what matters most to your business.
        </p>
      </section>
      {/* Popup Form */}
      <PopupForm showForm={showForm} handleCloseForm={handleCloseForm} />
    </div>
  );
};

export default App;
