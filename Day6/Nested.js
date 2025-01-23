function Child({ message }) {
    return <p>{message}</p>;
  }
  
  function Nestedd() {
    return (
      <div>
        <Child message="This is data from the parent!" />
      </div>
    );
  }
  
  export default Nestedd;