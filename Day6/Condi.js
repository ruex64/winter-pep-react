function StatusMessage({ status }) {
    if (status === "success") return <p>Operation was successful!</p>;
    if (status === "error") return <p>There was an error!</p>;
    if (status === "loading") return <p>Loading...</p>;
    return null;
  }
  
  export default StatusMessage;
  