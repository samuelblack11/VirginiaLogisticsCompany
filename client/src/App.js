import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
    const [additionalServices, setAdditionalServices] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="App">
      {/* Header Area */}
      <header className="header">
        <h1>Virginia Logistics Company</h1>
        <p>Efficient, flexible logistics from Baltimore to Richmond</p>
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

      <section className="use-cases">
        <h2>Our Services</h2>
        <div className="use-cases-container">
          <div className="use-case">
            <h3>White Glove Delivery</h3>
            <p>Specialized delivery with extra care for fragile or high-value items.</p>
          </div>
          <div className="use-case">
            <h3>Business Logistics</h3>
            <p>Efficient logistics solutions for small-scale shipments under 1 pallet.</p>
          </div>
          <div className="use-case">
            <h3>Junk Removal</h3>
            <p>Fast and reliable removal of unwanted items from your space.</p>
          </div>
          <div className="use-case">
            <h3>Donation Drop-Off</h3>
            <p>Convenient transportation of items to donation centers like Goodwill.</p>
          </div>
        </div>
      </section>

      {/* Value Blocks Section */}
      <section className="values">
        <h2>Our Values</h2>
        <div className="values-container">
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
        </div>
      </section>

      {/* Image Showcase */}
      <section className="image-showcase">
        <img
          src="/packageDelivery.png"
          alt="Package Delivery"
        />
        <img
          src="linehaulLoadOperation.png"
          alt="LineHaul Load"
        />
        <img
          src="vanOnHighway.png"
          alt="Highway Driving"
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

              <label>
              <input
                type="checkbox"
                onChange={(e) => setAdditionalServices(e.target.checked)}
              />
              Require Additional Services?
            </label>
            {additionalServices && (
              <div>
                <label>Describe Additional Services:</label>
                <textarea placeholder="Provide details about additional services required" />
                <p className="note">
                  Note: The price of additional services will range between $10-$50 and will
                  be added to the below quote after review by our team.
                </p>
              </div>
            )}

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
