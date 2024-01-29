import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3009/users/${id}`)
      .then((res) => setData(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>{data.name}</h1>
      <Link to={`/update/${id}`}>update </Link>
      <Link to={"/"} >go back </Link>
    </div>
  );
}

export default Read;