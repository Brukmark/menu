import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = ({ onMenuAdd }) => {
  const history = useHistory();
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a menu object using the state values
    const newMenu = { Food: a, price: b, place: c };

    // Call the callback function to update the state in App
    onMenuAdd(newMenu);

    //Optionally, you can reset the form after submission by clearing the state values
    seta("");
    setb("");
    setc("");
    history.push("/");
  };

  return (
    <div className="create">
      <h1>New Menu</h1>
      <form onSubmit={handleSubmit}>
        <label>Menu Title</label>
        <input
          type="text"
          required
          value={a}
          onChange={(e) => seta(e.target.value)}
        />
        <label>Menu price</label>
        <input
          type="text"
          required
          value={b}
          onChange={(e) => setb(e.target.value)}
        />
        <label>Menu place</label>
        <input
          type="text"
          required
          value={c}
          onChange={(e) => setc(e.target.value)}
        />

        <label>menu description</label>
        <textarea
          required
          value={d}
          onChange={(e) => setd(e.target.value)}
        ></textarea>

        <button>Add Menu</button>
        <p>{a}</p>
        <p>{b}</p>
        <p>{c}</p>
        {/* <button type="submit">Add Menu</button> */}
      </form>
    </div>
  );
};

export default Create;
