import React from 'react';
import './App.css'; // Optional: Separate CSS file for styles

const UseCases = () => {
  return (
    <section className="use-cases">
      <h2>Our Services</h2>
      <div className="use-cases-container">
        <div className="use-case">
          <h3>Run Errands</h3>
          <p>We’ll pick up groceries, supplies, or other essentials for you.</p>
        </div>
        <div className="use-case">
          <h3>White Glove Delivery</h3>
          <p>Specialized delivery with extra care for fragile or high-value items.</p>
        </div>
        <div className="use-case">
          <h3>Small Business Logistics</h3>
          <p>Efficient logistics solutions for small-scale shipments under 1 pallet.</p>
        </div>
        <div className="use-case">
          <h3>Returns</h3>
          <p>Hassle-free returns to retailers, ensuring your items reach their destination promptly and securely.</p>
        </div>
        <div className="use-case">
          <h3>Package Drop-Offs</h3>
          <p>Convenient drop-offs at carriers like UPS, FedEx, or USPS, saving you time and effort.</p>
        </div>
        <div className="use-case">
          <h3>Junk Removal</h3>
          <p>Fast and reliable removal of unwanted items from your space.</p>
        </div>
        <div className="use-case">
          <h3>Donation Drop-Off</h3>
          <p>Convenient transportation of items to donation centers like Goodwill.</p>
        </div>
        <div className="use-case">
          <h3>Planning & Analysis</h3>
          <p>Expert assistance in logistics planning for moves, business operations, and efficient route optimization.</p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
