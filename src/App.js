import React from 'react';

import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json"

import Statistics from "./components/statistics/Statistics"
import statisticalData from "./components/statistics/statistical-data.json"

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';


const App = () => {
  return (
    <div>
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        url={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};


export default App;