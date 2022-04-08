import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Person name="Bishwojit Malo" ></Person>
      <Person name="Hacker Malo"></Person>
      <Counter></Counter>
      <Users></Users>
      
    </div>
      
  );

  // useState

  function Counter(){
    const [count, setcount] = useState(10);
    const handleDecreaser = () => setcount(count -1)
    const handleIncreaser = () => setcount(count+1)
    return (
      <div>
        <h1>Count: {count} </h1>
        <button onClick={handleDecreaser}>Decrease</button>
        <button onClick={handleIncreaser}>Increase</button>
      </div>
    )
  }

  
  //useEffect

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    },[])
    return (
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }


  //Props
  function Person (props){
    return (
      <div>
        <h1>Name: {props.name}</h1>
      </div>
    )
  }
  
}

export default App;
