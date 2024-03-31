import clsx from "clsx";
import css from "./TransactionHistory.module.css"
export default function TransactionHistory({items}) {
    
    return <table className={css.table}>
   <thead>
    <tr>
      <th className={css.tdHeader}>Type</th>
      <th className={css.tdHeader}>Amount</th>
      <th className={css.tdHeader}>Currency</th>
    </tr>
  </thead>
    <tbody>
  
        
        {items.map((items,idx) => {
            const amountClasses = clsx(css.td, idx % 2 === 0 ? css.tdLight : css.tdDark)
            return <tr key={items.id}>
                    <td className={amountClasses}>{items.type}</td>
                    <td className={amountClasses}>{items.amount}</td>
                    <td className={amountClasses}>{items.currency}</td>
                  </tr>
  
        })}
    </tbody>
</table>

        

}