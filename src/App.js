
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";
import Goals from "./components/Goals";
import Alerts from './components/Alerts';
import Emergency from './components/Emergency'
import Support from './components/Support'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div>
      <Navbar
        showHome={showHome}
        setShowHome={setShowHome}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
        showExpenses={showExpenses}
        setShowExpenses={setShowExpenses}
        showGoals={showGoals}
        setShowGoals={setShowGoals}
        showAlerts={showAlerts}
        setShowAlerts={setShowAlerts}
        showEmergency={showEmergency}
        setShowEmergency={setShowEmergency}
        showSupport={showSupport}
        setShowSupport={setShowSupport}
      />
      {showHome && <Home />}
      {showDashboard && <Dashboard />}
      {showExpenses && <Expenses />}
      {showGoals && <Goals />}
      {showAlerts && <Alerts />}
      {showEmergency && <Emergency />}
      {showSupport && <Support />}
    </div>
  );
}

export default App;
