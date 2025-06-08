import React, { useState } from 'react';
import './App.css';
import {
  Bar,
  Pie,
  Line,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  FaUsers,
  FaChartBar,
  FaClipboardList,
  FaBoxOpen,
  FaHome,
  FaChartPie,
  FaCog,
  FaBell,
  FaUserCircle,
  FaBars,
  FaUserPlus,
} from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const barData = {
    labels: ['Dar', 'Dodoma', 'Arusha', 'Mwanza'],
    datasets: [{
      label: 'Candidates',
      data: [1200, 950, 800, 1100],
      backgroundColor: '#3b82f6',
    }],
  };

  const pieData = {
    labels: ['Dispatched', 'Pending'],
    datasets: [{
      label: 'Dispatch Status',
      data: [3300, 900],
      backgroundColor: ['#10b981', '#f59e0b'],
    }],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Issues Reported',
      data: [5, 9, 3, 7, 2],
      fill: false,
      borderColor: '#ef4444',
      tension: 0.3,
    }],
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo">{collapsed ? '📦' : '📦 Dashboard'}</div>
        <nav>
          <ul>
            <li><FaHome /> {!collapsed && <span>Home</span>}</li>
            <li><FaChartBar /> {!collapsed && <span>Reports</span>}</li>
            <li><FaChartPie /> {!collapsed && <span>Analytics</span>}</li>
            <li><FaCog /> {!collapsed && <span>Settings</span>}</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Top Nav */}
        <header className="topnav">
          <div className="topnav-left">
            <FaBars className="icon" onClick={() => setCollapsed(!collapsed)} />
            <h2>📊 School Dashboard</h2>
          </div>
          <div className="topnav-right">
            <button className="btn-register" onClick={() => setModalOpen(true)}>
              <FaUserPlus /> Register User
            </button>
            <span className="user">Welcome, Viper</span>
            <FaBell size={20} className="icon" />
            <FaUserCircle size={24} className="icon" />
          </div>
        </header>

        {/* Cards */}
        <div className="cards">
          <div className="card card-blue">
            <FaUsers size={30} />
            <h2>Total Candidates</h2>
            <p>4,200</p>
          </div>
          <div className="card card-green">
            <FaBoxOpen size={30} />
            <h2>Dispatched</h2>
            <p>3,300</p>
          </div>
          <div className="card card-yellow">
            <FaClipboardList size={30} />
            <h2>Pending</h2>
            <p>900</p>
          </div>
          <div className="card card-red">
            <FaChartBar size={30} />
            <h2>Issues</h2>
            <p>12</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts">
          <div className="chart"><Bar data={barData} /></div>
          <div className="chart"><Pie data={pieData} /></div>
          <div className="chart"><Line data={lineData} /></div>
        </div>
      </main>

      {/* Registration Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Register New User</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Full Name" required />
              <label>Email</label>
              <input type="email" placeholder="Email Address" required />
              <label>Password</label>
              <input type="password" placeholder="Password" required />
              <label>Role</label>
              <select required>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
              </select>
              <div className="modal-buttons">
                <button type="submit" className="btn-submit">Register</button>
                <button type="button" className="btn-cancel" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
