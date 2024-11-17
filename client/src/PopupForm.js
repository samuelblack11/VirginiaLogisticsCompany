import React, { useState, useEffect } from 'react';
import './PopupForm.css'; // Separate CSS file for popup styles

const PopupForm = ({ showForm, handleCloseForm }) => {
  const [freightSize, setFreightSize] = useState('');
  const [showPictureUpload, setShowPictureUpload] = useState(false);
  const [additionalServices, setAdditionalServices] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTimes, setPickupTimes] = useState([]);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validLocations = ['Arlington', 'Alexandria', 'Falls Church'];

  // Validate Location
  const validateLocation = (location, fieldName) => {
    const isValid = validLocations.some((validLocation) =>
      location.toLowerCase().includes(validLocation.toLowerCase())
    );

    if (!isValid) {
      setErrorMessage(`We do not operate in the area entered for ${fieldName}.`);
      alert(`We do not operate in the area entered for ${fieldName}.`);
    } else {
      setErrorMessage(''); // Clear the error message if valid
    }
  };

  // Handle Freight Size Selection
  const handleFreightSizeChange = (e) => {
    const size = e.target.value;
    setFreightSize(size);
    setShowPictureUpload(size === 'large'); // Show picture upload only for large items
  };

  // Handle Pickup Date Logic
  useEffect(() => {
    if (!pickupDate) return;

    const selectedDate = new Date(pickupDate);
    const day = selectedDate.getDay();
    const isWeekend = day === 5 || day === 6; // 0 = Sunday, 6 = Saturday

    // Update available times based on the day of the week
    setPickupTimes(
      isWeekend
        ? [
            'Early Morning (5-7 AM)',
            'Mid Morning (8-10 AM)',
            'Late Morning (10-12 PM)',
          ]
        : ['Early Morning (5-7 AM)', 'Evening (6-8 PM)']
    );
  }, [pickupDate]);

  // Return null if the form is not open
  if (!showForm) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Schedule an Appointment</h2>
        <form>
          {/* Basic Information */}
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your phone number" required />

          {/* Pickup Location */}
          <label>Pickup Address:</label>
          <input
            type="text"
            placeholder="Enter the pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            onBlur={() => validateLocation(pickupLocation, 'Pickup Address')}
            required
          />

          {/* Drop-Off Location */}
          <label>Drop-Off Address:</label>
          <input
            type="text"
            placeholder="Enter the drop-off location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            onBlur={() => validateLocation(dropoffLocation, 'Drop-Off Address')}
            required
          />

          {/* Error Message */}
          {errorMessage && <p className="error">{errorMessage}</p>}


          {/* Pickup Date */}
          <label>Preferred Pickup Date:</label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            max={new Date(new Date().setDate(new Date().getDate() + 14))
              .toISOString()
              .split('T')[0]}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />

          {/* Pickup Time Dropdown */}
          <label>Preferred Pickup Time:</label>
          <select required>
            <option value="">Select a time</option>
            {pickupTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>

          {/* Freight Details */}
          <label>Freight Description:</label>
          <textarea placeholder="Describe the freight (e.g., office chair, small pallet of boxes)" required></textarea>

          <label>Freight Size:</label>
          <select value={freightSize} onChange={handleFreightSizeChange} required>
            <option value="">Select a size</option>
            <option value="small">Small (e.g., a crate of apples, up to 3 cubic feet)</option>
            <option value="medium">Medium (e.g., a washing machine, up to 15 cubic feet)</option>
            <option value="large">Large (e.g., a couch or large wardrobe, over 15 cubic feet)</option>
          </select>

          {/* Picture Upload */}
          {showPictureUpload && (
            <div>
              <label>Upload Picture (Required for Large Items):</label>
              <input type="file" accept="image/*" required />
            </div>
          )}

          <label>Freight Weight:</label>
          <input type="number" placeholder="Enter weight in pounds" required />

          {/* Special Instructions */}
          <label>Special Instructions:</label>
          <textarea placeholder="Any special handling instructions"></textarea>

          {/* Additional Services */}
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
              <textarea placeholder="Provide details about additional services required"></textarea>
              <p className="note">
                Note: The price of additional services will range between $10-$50
                and will be added to the below quote after review by our team.
              </p>
            </div>
          )}

          {/* Quote Information */}
          <label>Automatic Quote:</label>
          <p>(Coming soon: auto-generated quote based on freight details)</p>

          {/* Submit and Close Buttons */}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCloseForm}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
