import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [myPizzas, setMyPizzas]= useState([])
  const [pizzaToUpdate, setPizzaToUpdate] = useState([])

  useEffect (() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(resp => resp.json())
    .then(pizzas => {
      setMyPizzas(pizzas)
    })
  }, [])

const grabPizza = (pizza) => {
  setPizzaToUpdate(pizza)
}

function handleUpdatePizza (pizza) {
  fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
    method: 'PATCH',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(pizza)
  })
  .then(resp => resp.json()) 
  .then(pizza => {
    setMyPizzas(myPizzas.map((pie) => {
      if(pie.id === pizza.id) {
        return pizza
      } else {
        return pie
      }
    }))
  })
  .catch(error => {
    console.error('Error updating pizza', error)
  })
}

  return (
    <>
      <Header />
      <PizzaForm pizzaToUpdate={pizzaToUpdate} handleUpdatePizza={handleUpdatePizza}/>
      <PizzaList pizzas={myPizzas} handleClick={grabPizza}/>
    </>
  );
}

export default App;
