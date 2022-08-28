import styles from './form.module.css'

export default function FormStep1() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      businessName: event.target.businessName.value,
      businessAddress: event.target.businessAddress.value,
      businessPhone: event.target.businessPhone.value,
      businessEmail: event.target.businessEmail.value,
      yearEstablished: event.target.yearEstablished.value,
      loanAmount: event.target.loanAmount.value,
      accountingProvider: event.target.accountingProvider.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    // We would make an additional request to updateApplication with the newly received data.
    // But for this example, we won't have a database to store the data.
    const endpoint = '/api/getBalanceSheet'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
  }
    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Director Name: </label>
          <input type="text" id="name" />
          <label htmlFor="email">Director Email: </label>
          <input type="email" id="email" />
          <label htmlFor="phone">Director Phone: </label>
          <input type="tel" id="phone" />
          <label htmlFor="businessName">Business Name: </label>
          <input type="text" id="businessName" />
          <label htmlFor="businessAddress">Business Address: </label>
          <input type="text" id="businessAddress" />
          <label htmlFor="businessPhone">Business Phone: </label>
          <input type="tel" id="businessPhone" />
          <label htmlFor="businessEmail">Business Email: </label>
          <input type="email" id="businessEmail" />
          {/*
              This field would contain a validator to ensure the number is a valid year.
           */}
          <label htmlFor="yearEstablished">Year Established</label>
          <input type="number" id="yearEstablished" />
          <label htmlFor="loanAmount">Loan Amount</label>
          <input type="number" id="loanAmount" />
          <label htmlFor="accountingProvider">Accounting Provider</label>
          <select id="accountingProvider">
            {/*
              These would be populated by a request to the server. That request would return a list of accounting providers.
            */}
            <option value="xero">Xero</option>
            <option value="myob">MYOB</option>
          </select>
                {/*
            This button sends data to the server and invokes the next step of the form.
            It would also be a good place to add a validator to ensure the data is valid.
            Also, it would authenticate the user depending on the provider.
         */}
        <button className={styles.button} type="submit">Load Accounts and Review</button>
        </form>
        </div>
    )
}