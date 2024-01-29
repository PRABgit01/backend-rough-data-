import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3009/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3009/users/${id}`, data)
      .then((res) => {
        console.log("Update successful:", res.data);
        // You can redirect or perform other actions after successful update
      })
      .catch((err) => console.log("Update failed:", err));
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Update;
