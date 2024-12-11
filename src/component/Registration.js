import React, { useState } from "react";
// import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    yearOfPassout: "",
    collegeName: "Aditya College", // Default selected college
    customCollegeName: "", // For "Others" option
    HighestDegree: "",
    branch: "",
    cgpa: "",
    alreadyPlaced: "No",
    twelfthBranch: "",
    twelfthPercentage: "",
    twelfthPassout: "",
    tenthBranch: "",
    tenthPercentage: "",
    tenthPassout: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const finalCollegeName =
      formData.collegeName === "Others" ? formData.customCollegeName : formData.collegeName;
  
    const formDataToSubmit = { ...formData, collegeName: finalCollegeName };
  
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataToSubmit),
      });
  
      if (response.ok) {
        console.log("Form submitted successfully");
        alert("Form submitted successfully!");
        // Reset form here
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          yearOfPassout: "",
          collegeName: "Aditya College",
          customCollegeName: "",
          HighestDegree: "",
          branch: "",
          cgpa: "",
          alreadyPlaced: "No",
          twelfthBranch: "",
          twelfthPercentage: "",
          twelfthPassout: "",
          tenthBranch: "",
          tenthPercentage: "",
          tenthPassout: "",
        });
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {/* Form */}
      <h3>Form</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}  
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year of Passout:</label>
        <input
          type="number"
          name="yearOfPassout"
          value={formData.yearOfPassout}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>College Name:</label>
        <select
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required
        >
          <option value="Aditya College">Aditya College</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="IIT Bombay">IIT Bombay</option>
          <option value="IIT Madras">IIT Madras</option>
          <option value="BITS Pilani">BITS Pilani</option>
          <option value="NIT Trichy">NIT Trichy</option>
          <option value="NIT Warangal">NIT Warangal</option>
          <option value="Anna University">Anna University</option>
          <option value="JNTU Hyderabad">JNTU Hyderabad</option>
          <option value="VIT Vellore">VIT Vellore</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {formData.collegeName === "Others" && (
        <div>
          <label>Custom College Name:</label>
          <input
            type="text"
            name="customCollegeName"
            value={formData.customCollegeName}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div>
        <label>Highest Degree:</label>
        <input
          type="text"
          name="HighestDegree"
          placeholder="B.Tech"
          value={formData.HighestDegree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Branch:</label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>CGPA:</label>
        <input
          type="number"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Already Placed:</label>
        <select
          name="alreadyPlaced"
          value={formData.alreadyPlaced}
          onChange={handleChange}
          required
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* 12th Details */}
      <h3>12th Details</h3>
      <div>
        <label>Branch:</label>
        <input
          type="text"
          name="twelfthBranch"
          value={formData.twelfthBranch}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Percentage:</label>
        <input
          type="number"
          name="twelfthPercentage"
          value={formData.twelfthPercentage}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year of Passout:</label>
        <input
          type="number"
          name="twelfthPassout"
          value={formData.twelfthPassout}
          onChange={handleChange}
          required
        />
      </div>

      {/* 10th Details */}
      <h3>10th Details</h3>
      <div>
        <label>Branch:</label>
        <input
          type="text"
          name="tenthBranch"
          value={formData.tenthBranch}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Percentage:</label>
        <input
          type="number"
          name="tenthPercentage"
          value={formData.tenthPercentage}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year of Passout:</label>
        <input
          type="number"
          name="tenthPassout"
          value={formData.tenthPassout}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Registration;
