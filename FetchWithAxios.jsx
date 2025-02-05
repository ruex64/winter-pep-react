import { useState, useEffect } from "react";
import axios from "axios";

const FetchResources = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resourceType]);

  return (
    <div>
      <h2>Fetching: {resourceType}</h2>

      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {items.slice(0, 10).map((item) => (
          <li key={item.id}>
            {resourceType === "users"
              ? `${item.name} (Email: ${item.email})`
              : JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchResources;
