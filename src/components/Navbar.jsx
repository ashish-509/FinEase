import logo from "../images/logo.png";
import { FaCog } from "react-icons/fa";

const Navbar = ({
  showHome,
  setShowHome,
  showDashboard,
  setShowDashboard,
  showExpenses,
  setShowExpenses,
  showGoals,
  setShowGoals,
  showAlerts,
  setShowAlerts,
  showEmergency,
  setShowEmergency,
  showSupport,
  setShowSupport,
}) => {
  const handleClickHome = () => {
    setShowHome(true);
    setShowDashboard(false);
    setShowExpenses(false);
    setShowGoals(false);
    setShowAlerts(false);
    setShowEmergency(false);
    setShowSupport(false);
  };

  const handleClickDashboard = () => {
    setShowHome(false);
    setShowDashboard(true);
    setShowExpenses(false);
    setShowGoals(false);
    setShowAlerts(false);
    setShowEmergency(false);
    setShowSupport(false);
  };

  const handleClickExpenses = () => {
    setShowHome(false);
    setShowDashboard(false);
    setShowExpenses(true);
    setShowGoals(false);
    setShowAlerts(false);
    setShowEmergency(false);
    setShowSupport(false);
  };

  const handleClickGoals = () => {
    setShowHome(false);
    setShowDashboard(false);
    setShowExpenses(false);
    setShowGoals(true);
    setShowAlerts(false);
    setShowEmergency(false);
    setShowSupport(false);
  };

  const handleClickAlerts = () => {
    setShowHome(false);
    setShowDashboard(false);
    setShowExpenses(false);
    setShowGoals(false);
    setShowAlerts(true);
    setShowEmergency(false);
    setShowSupport(false);
  };

  const handleClickEmergency = () => {
    setShowHome(false);
    setShowDashboard(false);
    setShowExpenses(false);
    setShowGoals(false);
    setShowAlerts(false);
    setShowEmergency(true);
    setShowSupport(false);
  };

  const handleClickSupport = () => {
    setShowHome(false);
    setShowDashboard(false);
    setShowExpenses(false);
    setShowGoals(false);
    setShowAlerts(false);
    setShowEmergency(false);
    setShowSupport(true);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold flex flex-row p-0 m-0">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <h3 className="pl-1 flex items-center">FinEase</h3>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickHome}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickDashboard}
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickExpenses}
          >
            Expenses
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickGoals}
          >
            Goals
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickAlerts}
          >
            Alerts
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickEmergency}
          >
            Emergency
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 pl-10 text-lg"
            onClick={handleClickSupport}
          >
            Support
          </a>
          <a href="#" className="text-white hover:text-gray-700 pl-9 pr-0 mr-0">
            <FaCog className="inline-block w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
