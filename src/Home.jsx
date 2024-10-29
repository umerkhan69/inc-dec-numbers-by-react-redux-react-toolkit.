// problem ?
//1-start with a big project like number of components or element are huge.
//for example e-commerce store ===> lie context api
//soltion is state mangement

//problem is also prop drilling we are discuss ;ast class context api

//2- when have alot of components that we need to access the same state
//solution is also import { connect } from 'react-redux'
//you dont use state in root level like app you are store your store

//Redux Arecture//
//https:redux-cool.js org/docs/introduction/
//for image only
//-----------------------
//react-redux vs redux-toolkit
//we are perfer reudux toolkit all is depericate  not longer available
//========================
// store === variable dat storage
//reducer === help we are change thwe state a = 2 then a =21 avbility of change the state the help of reducer we are proform add del etc...
//action & state ===== triger point we are click than reducer is active like add to cart button inc or dec button than start state manupilation

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const { c } = useSelector((state) => state.custom); //problrm((()))

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handledecrement = () => {
    dispatch({ type: "decrement" });
  };

  const incbyvalue = () => {
    dispatch({ type: "incrementByValue", payload: 25 });
  };
  return (
    <div>
      <h1>{c}</h1>

      <button onClick={handleIncrement}>increment</button>
      <button onClick={incbyvalue}>inc by value</button>
      <button onClick={handledecrement}>decrement</button>
    </div>
  );
}

export default Home;
