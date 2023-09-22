import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";

// import DevRegistrationForm from './components/DevRegistrationForm';
// import LoginDev from './components/LoginDev';
// import Start from './components/Start';

function App() {

  const getUser = async () => {
  try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await axios.get(url);
      console.log(response.data)

    }catch (error) {
      console.error(error);
    }
  };

  const createUser = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const body = {
          id: 1,
          title: 'Primer Usuario Creado',
          body: 'Exito en el post',
          userId: 1
        }

        const response = await axios.post(url, body);
        console.log(response);

    } catch (error){
      console.error(error);
    }
  };


  return (
      <div>
        <h1>REALIZAR PETCIONES HTTP- Axios</h1>
        <button onClick={getUser}>Get User</button>
        <button onClick={createUser}>Post User</button>

        {/* <DevRegistrationForm /> */}
        {/* <LoginDev />
        <Start /> */}
      </div>
  );
}

export default App;
