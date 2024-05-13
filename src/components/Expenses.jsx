// import React, { useState, useEffect } from "react";
// import { readString } from "react-papaparse";

// function Expenses() {
//   const [name, setName] = useState("");
//   const [budget, setBudget] = useState(0);
//   const [currencyName, setCurrencyName] = useState("NRs.");

//   const [expenses, setExpenses] = useState([]);
//   const [expenseName, setExpenseName] = useState("");
//   const [expenseCategory, setExpenseCategory] = useState("");
//   const [expenseAmount, setExpenseAmount] = useState(0);

//   const [totalExpenses, setTotalExpenses] = useState(0);
//   const [isExpenseAdded, setIsExpenseAdded] = useState(false);

//   useEffect(() => {
//     // Load user data when component mounts
//     loadUserData();
//   }, []);

//   const loadUserData = () => {
//     // Load user name from local storage
//     const storedName = localStorage.getItem("userName");
//     const storedBudget = localStorage.getItem("userBudget");

//     if (storedName) {
//       setName(storedName);
//     }

//     if (storedBudget) {
//       setBudget(parseFloat(storedBudget));
//     }

//     // Load expenses for the user if budget is set
//     if (storedName && storedBudget) {
//       loadExpenses(); // Reference to storedName is now valid
//     }
//   };

//   // Load expenses for the user if budget is set
//   useEffect(() => {
//     if (name && budget) {
//       loadExpenses();
//       setIsExpenseAdded(true);
//     }
//   }, [name, budget]);

//   const loadExpenses = () => {
//     // Check if user has a CSV file
//     const existingCSV = localStorage.getItem(`${name}.csv`);
//     if (existingCSV) {
//       // Read expenses from CSV file
//       const parsedCSV = readString(existingCSV).data;
//       const loadedExpenses = parsedCSV.map((row) => ({
//         name: row[0],
//         category: row[1],
//         amount: parseFloat(row[2]),
//       }));
//       setExpenses(loadedExpenses);
//       // Calculate total expenses
//       const total = loadedExpenses.reduce(
//         (acc, expense) => acc + expense.amount,
//         0
//       );
//       setTotalExpenses(total);
//     }
//   };

//   const handleAddExpense = () => {
//     if (
//       expenseName.trim() === "" ||
//       expenseCategory.trim() === "" ||
//       expenseAmount <= 0
//     ) {
//       alert("Please enter valid expense details.");
//       return;
//     }

//     // Check if adding this expense will make the remaining balance negative or zero
//     if (budget - totalExpenses - parseFloat(expenseAmount) <= 0) {
//       alert("Insufficient balance. Cannot add expense.");
//       return;
//     }

//     const newExpense = {
//       name: expenseName,
//       category: expenseCategory,
//       amount: parseFloat(expenseAmount),
//     };

//     // Append new expense to expenses state
//     setExpenses([...expenses, newExpense]);
//     // Calculate total expenses
//     const total = totalExpenses + parseFloat(expenseAmount);
//     setTotalExpenses(total);

//     // Serialize expenses to CSV format
//     const csvData = [...expenses, newExpense]
//       .map((expense) => [expense.name, expense.category, expense.amount])
//       .join("\n");

//     // Save or append expenses to CSV file
//     localStorage.setItem(`${name}.csv`, csvData);

//     // Clear expense input fields
//     setExpenseName("");
//     setExpenseCategory("");
//     setExpenseAmount(0);

//     // Set isExpenseAdded to true to display the expenses list, total expenses, and remaining budget
//     setIsExpenseAdded(true);
//   };

//   // function to group expense by categories :
//   const groupExpensesByCategory = () => {
//     const groupedExpenses = {};
//     expenses.forEach((expense) => {
//       if (!groupedExpenses[expense.category]) {
//         groupedExpenses[expense.category] = [];
//       }
//       groupedExpenses[expense.category].push(expense);
//     });
//     return groupedExpenses;
//   };

//   // Function to handle setting user name and storing it in local storage
//   const handleSetName = (value) => {
//     setName(value);
//     localStorage.setItem("userName", value);
//   };

//   // Function to handle setting user budget and storing it in local storage
//   const handleSetBudget = (value) => {
//     setBudget(value);
//     localStorage.setItem("userBudget", value);
//   };

//   return (
//     <div className="container mx-auto mt-10 max-w-lg px-4">
//       <h1 className="text-3xl font-semibold mb-4 text-center p-7">
//         Expenses Tracker
//       </h1>

//       {/* User information */}
//       <div className="mb-6">
//         <h3>Name:</h3>
//         <input
//           type="text"
//           placeholder="Enter your name here."
//           value={name}
//           onChange={(e) => handleSetName(e.target.value)}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         />

//         <h3 className="pt-5 pb-2">Monthly Budget:</h3>
//         <input
//           type="text"
//           inputMode="numeric"
//           placeholder="Enter your monthly budget here."
//           value={budget === 0 ? "" : budget}
//           onChange={(e) => {
//             const value = parseFloat(e.target.value);
//             handleSetBudget(isNaN(value) ? "" : value);
//           }}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         />

//         <h3 className="pt-5 pb-2">Currency:</h3>
//         <select
//           value={currencyName}
//           onChange={(e) => setCurrencyName(e.target.value)}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         >
//           <option value="NRS">NRs (रू)</option>
//           <option value="INR">INR (₹)</option>
//           <option value="USD">USD ($)</option>
//           <option value="EURO">EURO (€)</option>
//           {/* Add more currency options here */}
//         </select>
//       </div>

//       {/* Add new expense */}
//       <div className="mb-6">
//         <h3 className="pt-5 pb-2">Expense name:</h3>
//         <input
//           type="text"
//           placeholder="Expense name"
//           value={expenseName}
//           onChange={(e) => setExpenseName(e.target.value)}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         />

//         <h3 className="pt-5 pb-2">Expense category:</h3>
//         <select
//           value={expenseCategory}
//           onChange={(e) => setExpenseCategory(e.target.value)}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         >
//           <option value="">Select category</option>
//           <option value="Beauty">💄 Beauty</option>
//           <option value="Clothing">👗 Clothing</option>
//           <option value="Communication">📱 Communication</option>
//           <option value="Donate">🤝 Donate</option>
//           <option value="Electronics">📱 Electronics</option>
//           <option value="Entertainment">🎬 Entertainment</option>
//           <option value="Emergency Fund">⛑️ Emergency Fund</option>
//           <option value="Food">🍲 Food</option>
//           <option value="Health">💊 Health</option>
//           <option value="Home">🏠 Home</option>
//           <option value="Investment">💰 Investment</option>
//           <option value="Lifestyle">🌟 Lifestyle</option>
//           <option value="Learning">📚 Learning</option>
//           <option value="Lend">💸 Lend</option>
//           <option value="Miscellaneous">📦 Miscellaneous</option>
//           <option value="Shopping">🛍️ Shopping</option>
//           <option value="Sports">⚽ Sports</option>
//           <option value="Social">👫 Social</option>
//           <option value="Saving">💰 Saving</option>
//           <option value="Social Security">🔒 Social Security</option>
//           <option value="Telephone">☎️ Telephone</option>
//           <option value="Travel">✈️ Travel</option>
//         </select>

//         <h3 className="pt-5 pb-2">Expense amount:</h3>
//         <input
//           type="text"
//           inputMode="numeric"
//           placeholder="Expense amount"
//           value={expenseAmount === 0 ? "" : expenseAmount}
//           onChange={(e) => {
//             const value = parseFloat(e.target.value);
//             setExpenseAmount(isNaN(value) ? "" : value);
//           }}
//           className="w-full border rounded-md px-4 py-2 mb-2"
//         />

//         <button
//           onClick={handleAddExpense}
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mt-5"
//         >
//           Add Expense
//         </button>
//       </div>

//       {/* Display expenses, total expenses, and remaining budget after clicking the button */}
//       {isExpenseAdded && (
//         <>
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">List of Expenses:</h2>
//             <ul>
//               {expenses.map((expense, index) => (
//                 <li key={index}>
//                   {expense.name}: {expense.amount} ({expense.category})
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Display categorical expenses */}{" "}
//           <div>
//             {" "}
//             <h2 className="text-xl font-semibold mb-2">
//               Categorical Expenses:{" "}
//             </h2>{" "}
//             {Object.entries(groupExpensesByCategory()).map(
//               ([category, expenses], index) => (
//                 <div key={index}>
//                   <p>
//                     {category}:{" "}
//                     {expenses.reduce(
//                       (total, expense) => total + expense.amount,
//                       0
//                     )}
//                   </p>
//                 </div>
//               )
//             )}
//           </div>
//           {/* Total expenses and remaining budget */}
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Total Expenses:</h2>
//             <p>{totalExpenses}</p>
//             <h2 className="text-xl font-semibold mb-2">Remaining Budget:</h2>
//             <p className="mb-10">{budget - totalExpenses}</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Expenses;

import React, { useState, useEffect } from "react";
import { readString } from "react-papaparse";

function Expenses() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(0);
  const [currencyName, setCurrencyName] = useState("NRs.");

  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    const storedName = localStorage.getItem("userName");
    const storedBudget = localStorage.getItem("userBudget");

    if (storedName) {
      setName(storedName);
    }

    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }

    if (storedName && storedBudget) {
      loadExpenses();
    }
  };

  useEffect(() => {
    if (name && budget) {
      loadExpenses();
      setIsExpenseAdded(true);
    }
  }, [name, budget]);

  const loadExpenses = () => {
    const existingCSV = localStorage.getItem(`${name}.csv`);
    if (existingCSV) {
      const parsedCSV = readString(existingCSV).data;
      const loadedExpenses = parsedCSV.map((row) => ({
        name: row[0],
        category: row[1],
        amount: parseFloat(row[2]),
      }));
      setExpenses(loadedExpenses);
      const total = loadedExpenses.reduce(
        (acc, expense) => acc + expense.amount,
        0
      );
      setTotalExpenses(total);
    }
  };

  const handleAddExpense = () => {
    if (
      expenseName.trim() === "" ||
      expenseCategory.trim() === "" ||
      expenseAmount <= 0
    ) {
      alert("Please enter valid expense details.");
      return;
    }

    if (budget - totalExpenses - parseFloat(expenseAmount) <= 0) {
      alert("Insufficient balance. Cannot add expense.");
      return;
    }

    const newExpense = {
      name: expenseName,
      category: expenseCategory,
      amount: parseFloat(expenseAmount),
    };

    setExpenses([...expenses, newExpense]);
    const total = totalExpenses + parseFloat(expenseAmount);
    setTotalExpenses(total);

    const csvData = [...expenses, newExpense]
      .map((expense) => [expense.name, expense.category, expense.amount])
      .join("\n");

    localStorage.setItem(`${name}.csv`, csvData);

    setExpenseName("");
    setExpenseCategory("");
    setExpenseAmount(0);

    setIsExpenseAdded(true);
  };

  const groupExpensesByCategory = () => {
    const groupedExpenses = {};
    expenses.forEach((expense) => {
      if (!groupedExpenses[expense.category]) {
        groupedExpenses[expense.category] = [];
      }
      groupedExpenses[expense.category].push(expense);
    });
    return groupedExpenses;
  };

  const handleSetName = (value) => {
    setName(value);
    localStorage.setItem("userName", value);
  };

  const handleSetBudget = (value) => {
    setBudget(value);
    localStorage.setItem("userBudget", value);
  };

  return (
    <div className="container mx-auto mt-10 max-w-lg px-4">
      <h1 className="text-3xl font-semibold mb-4 text-center p-7">
        Expenses Tracker
      </h1>

      {/* User information */}
      <div className="mb-6">
        <h3>Name:</h3>
        <input
          type="text"
          placeholder="Enter your name here."
          value={name}
          onChange={(e) => handleSetName(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3 className="pt-5 pb-2">Monthly Budget:</h3>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Enter your monthly budget here."
          value={budget === 0 ? "" : budget}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            handleSetBudget(isNaN(value) ? "" : value);
          }}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3 className="pt-5 pb-2">Currency:</h3>
        <select
          value={currencyName}
          onChange={(e) => setCurrencyName(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-2"
        >
          <option value="NRS">NRs (रू)</option>
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EURO">EURO (€)</option>
          {/* Add more currency options here */}
        </select>
      </div>

      {/* Add new expense */}
      <div className="mb-6">
        <h3 className="pt-5 pb-2">Expense name:</h3>
        <input
          type="text"
          placeholder="Expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <h3 className="pt-5 pb-2">Expense category:</h3>
        <select
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-2"
        >
          <option value="">Select category</option>
          <option value="Beauty">💄 Beauty</option>
          <option value="Clothing">👗 Clothing</option>
          <option value="Communication">📱 Communication</option>
          <option value="Donate">🤝 Donate</option>
          <option value="Electronics">📱 Electronics</option>
          <option value="Entertainment">🎬 Entertainment</option>
          <option value="Emergency Fund">⛑️ Emergency Fund</option>
          <option value="Food">🍲 Food</option>
          <option value="Health">💊 Health</option>
          <option value="Home">🏠 Home</option>
          <option value="Investment">💰 Investment</option>
          <option value="Lifestyle">🌟 Lifestyle</option>
          <option value="Learning">📚 Learning</option>
          <option value="Lend">💸 Lend</option>
          <option value="Miscellaneous">📦 Miscellaneous</option>
          <option value="Shopping">🛍️ Shopping</option>
          <option value="Sports">⚽ Sports</option>
          <option value="Social">👫 Social</option>
          <option value="Saving">💰 Saving</option>
          <option value="Social Security">🔒 Social Security</option>
          <option value="Telephone">☎️ Telephone</option>
          <option value="Travel">✈️ Travel</option>
        </select>

        <h3 className="pt-5 pb-2">Expense amount:</h3>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Expense amount"
          value={expenseAmount === 0 ? "" : expenseAmount}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setExpenseAmount(isNaN(value) ? "" : value);
          }}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        <button
          onClick={handleAddExpense}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mt-5"
        >
          Add Expense
        </button>
      </div>

      {/* Display expenses, total expenses, and remaining budget after clicking the button */}
      {isExpenseAdded && (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">List of Expenses:</h2>
            <ul>
              {expenses.map((expense, index) => (
                <li key={index}>
                  {expense.name}: {currencyName} {expense.amount} (
                  {expense.category})
                </li>
              ))}
            </ul>
          </div>
          {/* Display categorical expenses */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Categorical Expenses:{" "}
            </h2>
            {Object.entries(groupExpensesByCategory()).map(
              ([category, expenses], index) => (
                <div key={index}>
                  <p>
                    {category}: {currencyName}{" "}
                    {expenses.reduce(
                      (total, expense) => total + expense.amount,
                      0
                    )}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Total expenses and remaining budget */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Total Expenses : {currencyName} {totalExpenses}
            </h2>
            {/* <p>{totalExpenses}</p> */}
            <h2 className="text-xl font-semibold mb-2">
              Remaining Budget: {currencyName} {budget - totalExpenses}
            </h2>
            {/* <p className="mb-10">{budget - totalExpenses}</p> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Expenses;
