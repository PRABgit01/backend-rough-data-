import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3009/users", value);
      console.log("Data submitted successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Create;
