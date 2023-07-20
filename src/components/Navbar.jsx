import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigation = useNavigate();

  const handleLogout = () => {
    try {
 
      sessionStorage.clear();

      navigation('/');

    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Chaitanya</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" onClick={handleLogout}>
            <div className="indicator">
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
