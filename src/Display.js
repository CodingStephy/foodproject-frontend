import React from "react";

const Display = (props) => {
  const { foods } = props;

  const loaded = () => (
    <div className="display" style={{ textAlign: "center" }}>
      {foods.map((food) => (
        <article>
          <h1>{food.name}</h1>
          <img src={food.img} />
          <h1>{food.taste}</h1>
          <button onClick={()=> {
            props.selectFood(food);
            props.history.push("/edit")
          }}>Edit</button> 
          <button onClick={() => {
            props.deleteFood(food)
          }}>Delete</button> 
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>

  return foods.length > 0 ? loaded() : loading;
};

export default Display;