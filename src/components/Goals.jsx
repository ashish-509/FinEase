
import React, { useState, useEffect } from "react";

function Goals() {
  // Load goals from local storage on component mount
  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // State variables for managing goals
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    name: "",
    amount: 0,
    targetDate: "",
    category: "",
    priority: "",
    collectedAmount: 0, // Changed to collectedAmount
  });

  
  const addGoal = () => {
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    // Store updated goals in local storage
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
    setNewGoal({
      name: "",
      amount: 0,
      targetDate: "",
      category: "",
      priority: "",
      collectedAmount: 0, // Reset collectedAmount when adding a new goal
    });
  };


  const deleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
    // Store updated goals in local storage
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  
  const updateProgress = (index) => {
    const saved = prompt("How much more have you saved?");
    if (saved === null || isNaN(saved)) return; // If canceled or not a valid number, do nothing

    const savedAmount = parseFloat(saved);
    const updatedGoals = [...goals];
    updatedGoals[index].collectedAmount += savedAmount; // Update the collected amount
    setGoals(updatedGoals);
    // Store updated goals in local storage
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };


  const calculateRemainingDays = (targetDate) => {
    const currentDate = new Date();
    const target = new Date(targetDate);
    const differenceInTime = target.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <div className="container mx-auto mt-10 max-w-lg">
      <h1 className="text-3xl font-semibold mb-4 text-center p-7">
        Financial Goals
      </h1>

      {/* Add new goal */}
      <div className="mb-6">
        <h3>Goal Name : </h3>
        <input
          type="text"
          placeholder="Goal name"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3>Goal Amount : </h3>
        <input
          type="text"
          inputMode="numeric"
          placeholder={
            newGoal.amount === 0 || isNaN(newGoal.amount) ? "Amount" : ""
          }
          onFocus={() => setNewGoal({ ...newGoal, amount: "" })}
          value={newGoal.amount === 0 ? "" : newGoal.amount}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setNewGoal({ ...newGoal, amount: isNaN(value) ? 0 : value });
          }}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3>Collected Amount : </h3>
        <input
          type="text"
          inputMode="numeric"
          placeholder={
            newGoal.collectedAmount === 0 || isNaN(newGoal.collectedAmount)
              ? "Collected Amount"
              : ""
          }
          onFocus={() => setNewGoal({ ...newGoal, collectedAmount: "" })}
          value={newGoal.collectedAmount === 0 ? "" : newGoal.collectedAmount}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setNewGoal({
              ...newGoal,
              collectedAmount: isNaN(value) ? 0 : value,
            });
          }}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3>Goal Due Date : </h3>
        <input
          type="date"
          placeholder="Target date"
          value={newGoal.targetDate}
          onChange={(e) =>
            setNewGoal({ ...newGoal, targetDate: e.target.value })
          }
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3>Goal Category : </h3>
        <select
          value={newGoal.category}
          onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
          className="w-full border rounded-md px-4 py-2 mb-2"
        >
          <option value="">Select category</option>
          <option value="short">Short Term Goal (Weekly)</option>
          <option value="mid">Mid Term Goal (Monthly)</option>
          <option value="long">Long Term Goal (Yearly)</option>
        </select>

        <select
          value={newGoal.priority}
          onChange={(e) => setNewGoal({ ...newGoal, priority: e.target.value })}
          className="w-full border rounded-md px-4 py-2 mb-2"
        >
          <option value="">Select priority</option>
          <option value="High">High Priority</option>
          <option value="Mid">Medium Priority</option>
          <option value="Low">Low Priority</option>
          <option value="No">No Priority</option>
        </select>
        <button
          onClick={addGoal}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
        >
          Add Goal
        </button>
      </div>

      {/* Display goals */}
      <div>
        {goals.map((goal, index) => (
          <div key={index} className="mb-4 border rounded-md p-4">
            <h3>{goal.name}</h3>
            <p>Amount: {goal.amount}</p>
            <p>Collected Amount: {goal.collectedAmount}</p>
            {goal.collectedAmount >= goal.amount && (
              <p className="text-xl font-bold">
                HURRAY! You reached your goal 🎉🥳
              </p>
            )}
            <p>
              Remaining Amount:{" "}
              {goal.amount > goal.collectedAmount
                ? goal.amount - goal.collectedAmount
                : 0}
            </p>
            {/* Display remaining amount */}
            <p>
              Remaining Days: {calculateRemainingDays(goal.targetDate)}
            </p>{" "}
            {/* Display remaining days */}
            <p>Target Date: {goal.targetDate}</p>
            <p>Category: {goal.category}</p>
            <p>Priority: {goal.priority}</p>
            <button
              onClick={() => deleteGoal(index)}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600"
            >
              Delete Goal
            </button>
            {goal.collectedAmount < goal.amount && ( // Display update progress button conditionally
              <button
                onClick={() => updateProgress(index)}
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
              >
                Update Progress
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
