import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(users);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    //  send data to server
    fetch("http://localhost:5000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const newUser = [...users, data];
        setData(newUser);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="App">
      <h1>My Own Data {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Your Name " />
        <input type="text" name="email" placeholder="Your email" />
        <input type="submit" value="Submit" />
      </form>
      {users.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
