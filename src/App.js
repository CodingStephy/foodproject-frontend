import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Display from './Display'
import Form from './Form'

function App() {
  const url = "https://food-sl-api.herokuapp.com"
  const [foods,setFoods] = useState([])
  const emptyFood ={
    name:"",
    img:"",
    taste:""
 }
 const [selectedFood,setSelectedFood] =useState(emptyFood);

  const getFoods = () => {
    fetch(url + "/foods")
    .then((response) => response.json())
    .then((data) => setFoods(data))
  }

  useEffect(() => getFoods(), []);
  
  const handleCreate = (newFood) => {
    fetch(url + "/foods", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFood)
    })
    .then(() => {
      getFoods()
    })
  }
// handleUpdate
  const handleUpdate = (food) => {
    fetch(url + "/foods/"+ food._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(food)
    })
    .then(() => {
      getFoods()
    })
  }
  const selectFood = (food) => {
    setSelectedFood(food)
  }
  //can delete
  const deleteFood = (food) => {
    fetch(url + "/foods/"+ food._id, {
      method: "delete",
    })
    .then(() => {
      getFoods()
    })
  }

  return (
    <div className="App">
    <img className ="logo" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629235302/Orange_Minimalist_Food_Festival_Logo_iadv6y.png"></img>
     <hr/>
     <Link to="/create">
        <button>Add a Dish</button>
      </Link>
     <main>
        <Switch>
        <Route exact path="/"
            render={(rp) => <Display {...rp} foods={foods} selectFood={selectFood}
            deleteFood = {deleteFood}
            />}
        />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="Submit" food={emptyFood} handleSubmit={handleCreate} />
            )}
          />
           <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" food={selectedFood} handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
        </main>
    </div>
  );
}

export default App;
