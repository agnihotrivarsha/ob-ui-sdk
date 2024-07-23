import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const AccountCard = ({ account }) => {
  return (
    <Link className="card" to={`/account/${account.AccountId}`} aria-label={`${account.Nickname} account details`} role="listitem" aria-roledescription="account card">
      <h3>{account.Nickname}</h3>
      <p>Account Number: {account.AccountId}</p>
      <p>Account Type: {account.AccountType}</p>
      <p>Balance: ${account.balance}</p>
    </Link>
  );
};

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/aisp/accounts');
        setAccounts(response.data.Data.Account);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="account-list" role="list" aria-labelledby="account-list-heading">
      <h2 id="account-list-heading">Account List</h2>
      {accounts.map((account) => (
        <AccountCard key={account.AccountId} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
