const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" maxLength={20}></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" maxLength={2}></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
