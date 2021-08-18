import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.food);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label for="name">Dish Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      /><br></br>
      <label for="image">Dish Image:</label>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      /><br></br>
        <label for="description">Dish Taste:</label>
        <input
        type="text"
        name="taste"
        value={formData.taste}
        onChange={handleChange}
      /><br></br>
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;