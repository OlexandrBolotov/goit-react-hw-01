import Profile from './Profile/Profile';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import './App.css';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <h2>Завдання 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Завдання 2</h2>
      <FriendList friends={friends} />
      <h2>Завдання 3</h2>
      <TransactionHistory items={transactions} />
    </>
    
        
    
  );
};

export default App;
