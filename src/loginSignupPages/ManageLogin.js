import React, { useState } from 'react';
import LoginAsAdmin from './LoginAsAdmin';
import LoginAsPetOwner from './LoginAsPetOwner';
import LoginAsVet from './LoginAsVet';
import LoginNavBar from './LoginNavBar';

const ManageLogin = () => {
  const [selectedUserType, setSelectedUserType] = useState('Pet Owner');

  const handleUserTypeSelection = (userType) => {
    setSelectedUserType(userType);
  };

  const renderLoginComponent = () => {
    switch (selectedUserType) {
      case 'Vet':
        return <LoginAsVet />;
      case 'Admin':
        return <LoginAsAdmin />;
      default:
        return <LoginAsPetOwner />;
    }
  };

  return (
    <div>
      <LoginNavBar
        onUserTypeSelect={handleUserTypeSelection}
        selectedUserType={selectedUserType}
      />
      {renderLoginComponent()}
    </div>
  );
}

export default ManageLogin;

