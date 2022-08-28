import styles from './form.module.css'

export default function FormStep1() {
    return (
        <div className={styles.container}>
        <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Director Name: </label>
          <input type="text" id="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Director Email: </label>
          <input type="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Director Phone: </label>
          <input type="tel" id="phone" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="businessName">Business Name: </label>
          <input type="text" id="businessName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="businessAddress">Business Address: </label>
          <input type="text" id="businessAddress" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="businessPhone">Business Phone: </label>
          <input type="tel" id="businessPhone" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="businessEmail">Business Email: </label>
          <input type="email" id="businessEmail" />
        </div>
        <div className={styles.formGroup}>
          {/*
              This field would contain a validator to ensure the number is a valid year.
           */}
          <label htmlFor="yearEstablished">Year Established</label>
          <input type="number" id="yearEstablished" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="loanAmount">Loan Amount</label>
          <input type="number" id="loanAmount" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="accountingProvider">Accounting Provider</label>
          <select id="accountingProvider">
            {/*
              These would be populated by a request to the server. That request would return a list of accounting providers.
            */}
            <option value="xero">Xero</option>
            <option value="myob">MYOB</option>
          </select>
        </div>
        </form>
        {/*
            This button sends data to the server and invokes the next step of the form.
            It would also be a good place to add a validator to ensure the data is valid.
            Also, it would authenticate the user depending on the provider.
         */}
        <button className={styles.button}>Load Accounts and Review</button>
        </div>
    )
}