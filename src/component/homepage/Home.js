import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3009/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDel = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3009/users/${id}`)
        .then((res) => {
          console.log("Delete successful:", res.data);
          setData((prevData) => prevData.filter((item) => item.id !== id));
        })
        .catch((err) => console.log("Delete failed:", err));
    }
  };

  return (
    <div>
      <h1>card value</h1>

      <div>
        {data.map((d, i) => (
          <div key={i}>
            <h5>{d.id}</h5>
            <h5>{d.name}</h5>
            <h5>{d.email}</h5>
            <Link to={`/read/${d.id}`}>edit</Link>
            <button onClick={() => handleDel(d.id)}>delete</button>
            <button>
              <Link to="/create">create</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
