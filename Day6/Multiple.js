function UserProfile({ firstName, lastName, age }) {
    return (
      <div>
        <h2>{firstName} {lastName}</h2>
        <p>Age: {age}</p>
      </div>
    );
  }
  
  export default UserProfile;
  