import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.tHeader}>Type</th>
      <th className={styles.tHeader}>Amount</th>
      <th className={styles.tHeader}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td className={styles.tData}>{type}</td>
                    <td className={styles.tData}>{amount}</td>
                    <td className={styles.tData}>{currency}</td>
                </tr>))}
  </tbody>
    </table>
);  
export default
    TransactionHistory;