import { useState, useEffect } from "react";

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
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resourceType]);

  return (
    <div >
      <h2>Fetching: {resourceType}</h2>
      
      {/* Buttons for switching resources */}
      <div >
        <button  onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button  onClick={() => setResourceType("users")}>
          Users
        </button>
        <button  onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>

      {/* Loading and error handling */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* Data Display */}
      <ul >
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

// Basic inline styles
export default FetchResources;
