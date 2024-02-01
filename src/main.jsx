import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
const btnstyles = {
  color: 'white',
  backgroundColor: '#6c7a89',
  
}
export function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />;
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

import StarRating from "./StarRating";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}{" "}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    {/* <App/> */}{" "}
    <StarRating size={24} style={btnstyles} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);

