import React from "react";
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        placeholder="tell us the dish you like" 
        onChange={handleChange}
      /><br></br>
      <label for="image">Dish Image:</label>
      <input
        type="text"
        name="img"
        value={formData.img}
        placeholder="Attach the link to a image of the dish"
        onChange={handleChange}
      /><br></br>
        <label for="description">Dish Taste:</label>
        <input
        type="text"
        name="taste"
        value={formData.taste}
        placeholder="e.g.sweet,salty,sour,spicy,bitter,etc."
        onChange={handleChange}
      /><br></br>
      <input className ="submit" type="submit" value={props.label} />
      <FormGroup className="bootstrap" tag="fieldset">
      <legend>YOUR RATINGS</legend>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
           Exceptional cuisine! Would order again and recommend to friends! 
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Food is satisfactory...
        </Label>
      </FormGroup>
      <FormGroup check disabled>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Awful food or service! Will not order again
        </Label>
      </FormGroup>
      </FormGroup>
    <Button>Submit Ratings</Button>
    </form>
  );
};

export default Form;