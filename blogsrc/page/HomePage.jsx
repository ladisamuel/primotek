import React from "react";
import TravellingData from "../components/TravellingData";
import Header from "../components/Header";

const HomePage = () => {

  


   // Get existing data from localStorage or initialize an empty array
  //  const existingData = JSON.parse(localStorage.getItem(''));
  //  console.log(existingData);

   // Add the new data to the existing array
  //  const updatedData = [...existingData, TravellingData];

   // Store the updated array back in localStorage
  //  localStorage.setItem('myData', JSON.stringify(updatedData));

   // Clear the input field
  //  setInputValue('');

  return (
    <div>
      <Header />

      <div>
        <TravellingData />
      </div>
    </div>
  );
};

export default HomePage;
