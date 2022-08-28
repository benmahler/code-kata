import styles from './form.module.css'

export default function FormStep2() {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead> Balance Sheets </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="assets">Assets</label>
                            <input type="number" id="assets" />
                        </td>
                        <td>
                            <label htmlFor="liabilities">Liabilities</label>
                            <input type="number" id="liabilities" />
                        </td>
                        <td>
                            <label htmlFor="equity">Equity</label>
                            <input type="number" id="equity" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit Application</button>
        </div>
    );
}