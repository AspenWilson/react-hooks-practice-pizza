import React, {useState, useEffect} from "react";

function PizzaForm({pizzaToUpdate, handleUpdatePizza}) {

  const [ pizzaId, setPizzaId ] = useState(pizzaToUpdate.id);
  const [ topping, setTopping ] = useState('');
  const [ size, setSize ] = useState('');
  const [ vegetarian, setVegetarian ] = useState(false);

  useEffect (() => {
    setPizzaId(pizzaToUpdate.id)
    setTopping(pizzaToUpdate.topping)
    setSize(pizzaToUpdate.size)
    setVegetarian(pizzaToUpdate.vegetarian)
  },[pizzaToUpdate])


  function handleSubmit(e) {
    e.preventDefault()
    const updatedPizza = {
      id: pizzaId,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }
    handleUpdatePizza(updatedPizza)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value ={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value = 'Vegetarian'
              checked = {vegetarian}
              onChange={(e) => setVegetarian(true)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value='Not Vegetarian'
              checked = {!vegetarian}
              onChange={(e) => setVegetarian(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
