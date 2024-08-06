import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";

import ManageLogin from './ManageLogin';
    

const LoginNavBar = ({ loggedInUser, onUserTypeSelect, selectedUserType }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
      setIsOpen(!isOpen);
    };
  
    const handleUserTypeClick = (userType) => {
      onUserTypeSelect(userType);
      setDropdownOpen(false);
    };
    const [isOpen, setIsOpen] = useState(false);

    
  
    return (
    <div>
      <header className="header">
        <a href="#" className='logo'>
          <img src={Logo} alt='logo' />
        </a>
        <nav className='navbar' >
        <button onClick={toggleDropdown} style={{alignItems: 'center', backgroundColor: 'transparent', color: '#fff', border: 'none',fontSize:'2.5rem' , fontWeight:'bold' }}>
            Login As {selectedUserType}
          </button>
          {dropdownOpen && (
            <ul style={{ position: 'absolute',
              top: '100%',
              backgroundColor: '#F4A460',
              color: '#fff',
              listStyle: 'none',
              padding: '2rem',
              paddingBottom:'1.5rem',
              fontSize: '2rem', 
              fontWeight: 'bold',
              maxWidth: '400px', 
              minWidth: '300px', // Set a minimum width
              width: '90%', // Set width to 100% of the parent container
              boxSizing: 'content-box',
              borderRadius:'0px 0px 10px 10px' }}>
              <li onClick={() => handleUserTypeClick('Pet Owner')} style={{ cursor: 'pointer', padding: '0.5rem' }}>Pet Owner Login</li>
              <li onClick={() => handleUserTypeClick('Vet')} style={{ cursor: 'pointer', padding: '0.5rem' }}>Vet Login</li>
              <li onClick={() => handleUserTypeClick('Admin')} style={{ cursor: 'pointer', padding: '0.5rem' }}>Admin Login</li>
            </ul>
          )}
           
           {loggedInUser && <span>Welcome, {loggedInUser}!</span>}
        </nav>
                  



      </header>
    </div>
  );
};

export default LoginNavBar
