import React from 'react';

const AccountCard = ({ account }) => {
  return (
    <div className="card">
      <h3>{account.Nickname}</h3>
      <p>Account Number: {account.AccountId}</p>
      <p>Account Type: {account.AccountType}</p>
      <p>Balance: ${account.balance}</p>
    </div>
  );
};

export default AccountCard;