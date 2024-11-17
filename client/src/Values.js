import React from 'react';
import './App.css'; // Optional: Separate CSS file for styles

const Values = () => {
  return (
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
  );
};

export default Values;
