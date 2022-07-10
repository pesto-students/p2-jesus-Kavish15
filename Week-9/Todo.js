import React, { useState } from "react";
import "../App.css";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (ind) => {
    const temp = items.filter((elem, id) => id !== ind);

    setItems(temp);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">

        <div className="child-div">
        <div>

        <h1 className="title">Just <span>Do</span> It.</h1>
        </div>
          

          <div className="addItems">
            <input
              type="text"
              placeholder="Add a task"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, ind) => (
              <div className="eachItem" key={ind}>
                <h3>{elem}</h3>
                <i
                  className="fa fa-trash add-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(ind)}
                ></i>
              </div>
            ))}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CheckList</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
