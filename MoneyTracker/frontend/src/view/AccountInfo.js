import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionCard = ({ transaction }) => {
  return (
    <tr>
      <th class="row">{transaction.TransactionId}</th>
      <td class="col">{transaction.Amount.Amount}</td>
      <td class="col">{transaction.Amount.Currency}</td>
      <td class="col">{transaction.BookingDateTime}</td>
    </tr>
  );
};

const TransactionCardBox = ({ transaction }) => {
    return (
      <div className="card">
        <p>Transaction Id: {transaction.TransactionId}</p>
        <p>Amount: {transaction.Amount.Amount}</p>
        <p>Currency: {transaction.Amount.Currency}</p>
        <p>BookingDateTime: {transaction.BookingDateTime}</p>
      </div>
    );
  };

const AccountInfo = ({accountId}) => {
  const [accountInfo, setAccountInfo] = useState({});
  const [transactionsInfo, setTransactionsInfo] = useState([]);
  //const [balancesInfo, setBalancesInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
            axios.get(`http://localhost:5000/aisp/accounts/${accountId}/account`),
            axios.get(`http://localhost:5000/aisp/accounts/${accountId}/transactions`),
            //axios.get(`http://localhost:5000/aisp/accounts/${accountId}/balances`)
          ]);
        setAccountInfo(response1.data.Data.Account);
        setTransactionsInfo(response2.data.Data.Transaction)
        //setBalancesInfo(response3.data.Data.Balance)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [accountId]);

  const isMobile = window.matchMedia("(max-width: 768px)").matches
  
  return (
    <div className="account-info">
        {accountInfo[0] && (
            <div>
                <h3>Account Information</h3>
                <div>
                    <p>Account Number: {accountInfo[0].AccountId}</p>
                    <p>Account Type: {accountInfo[0].AccountType}</p>
                    <p>Description: ${accountInfo[0].Description}</p>
                    <p>SubType: ${accountInfo[0].AccountSubType}</p>
                    <p>Currency: ${accountInfo[0].Currency}</p>
                </div>
            </div>
        )}
      <div>
        <h3>Transactions</h3>
        {isMobile
            ? (
                transactionsInfo.map((transaction) => (
                    <TransactionCardBox key={transaction.TransactionId} transaction={transaction} />
                ))
            )
            : (
                <table class="table table-striped">
                <thead class="thead-dark">   
                    <tr>
                        <th scope="col">Transaction Id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Currency</th>
                        <th scope="col">BookingDateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsInfo.map((transaction) => (
                        <TransactionCard key={transaction.TransactionId} transaction={transaction} />
                    ))}
                </tbody>
            </table>
            )
        }
       
      </div>
    </div>
  );
};

export default AccountInfo;
