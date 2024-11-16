import React, { useState } from 'react';
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
        <p>Efficient, flexible logistics from Baltimore to Richmond</p>
      </header>

      {/* Value Blocks Section */}
      <section className="values">
        <div className="value-block">
          <h3>Respect Your Time</h3>
          <p>Your time is too valuable to waste. We're here to make things easy on you.</p>
        </div>
        <div className="value-block">
          <h3>Move Fast</h3>
          <p>We offer pickup and delivery within 24 hours of scheduling, depending on availability.</p>
        </div>
        <div className="value-block">
          <h3>Minimize Cost</h3>
          <p>Our logistics solutions are designed to save you money without compromising quality and efficiency.</p>
        </div>
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

      {/* Schedule Button */}
      <div className="schedule">
        <button onClick={handleOpenForm}>Schedule</button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup">
          <div className="popup-content">
          <h2>Schedule an Appointment</h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Phone Number:</label>
              <input type="tel" placeholder="Enter your phone number" required />

              <label>Pickup Address:</label>
              <input type="text" placeholder="Enter the pickup location" required />

              <label>Drop-Off Address:</label>
              <input type="text" placeholder="Enter the drop-off location" required />

              <label>Preferred Pickup Date and Time:</label>
              <input type="datetime-local" required />

              <label>Freight Description:</label>
              <textarea placeholder="Describe the freight (e.g., office chair, small pallet of boxes)" required></textarea>

              <label>Freight Size (L x W x H):</label>
              <input type="text" placeholder="Enter dimensions (LxWxH)" required />

              <label>Freight Weight:</label>
              <input type="number" placeholder="Enter weight in pounds" required />

              <label>Special Instructions:</label>
              <textarea placeholder="Any special handling instructions" />

              <label>Availability Calendar:</label>
              <p>(Coming soon: visual calendar with available slots)</p>

              <label>Automatic Quote:</label>
              <p>(Coming soon: auto-generated quote based on freight details)</p>

              <button type="submit">Submit</button>
              <button type="button" onClick={handleCloseForm}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
