import React, { useState } from 'react';
import './App.css';
import { NavLink } from 'react-bootstrap';

function Crudoperations() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // Handle input change
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    // Add item to the list
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex === null) {
            setItems([...items, input]);
        } else {
            const updatedTasks = items.map((task, index) =>
                index === editIndex ? input : task
            );
            setItems(updatedTasks);
            setEditIndex(null);
        }
        setInput('');
    };
    // Edit an item from the list
    const handleEditItem = (index) => {
        setInput(items[index]);
        setEditIndex(index);
    };

    // Delete an item from the list
    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <h1 style={{
                color: "black",
                padding: "10px 5px",
                borderRadius: "2px",
                backgroundColor: "pink"
            }}>michael's arts & crafts</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="please enter product name "
                    style={{
                        color: "black",
                        padding: "8px 16px",
                        borderRadius: "5px",
                    }}
                /> &nbsp;
                <button onClick={handleSubmit} style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    {editIndex !== null ? 'Update Item' : 'Add Item'}
                </button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <b>{item}</b> &nbsp;
                        <button onClick={() => handleEditItem(index)} style={{
                            color: "black",
                            padding: "8px 16px",
                            borderRadius: "5px",
                            backgroundColor: "pink",

                        }}>Edit</button>&nbsp;
                        <button onClick={() => handleDeleteItem(index)} style={{
                            color: "black",
                            padding: "8px 16px",
                            borderRadius: "5px",
                            backgroundColor: "orange"

                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Crudoperations;