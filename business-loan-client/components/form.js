import styles from './form.module.css'
import { useEffect, useState } from 'react'


export default function Form() {
    
    const [form, setForm] = useState({
        applicationId: '',
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessAddress: '',
        businessPhone: '',
        businessEmail: '',
        yearEstablished: '',
        loanAmount: '',
        accountingProvider: '',
        sheet: []
    });

    const [step, setStep] = useState(1); // Skipped state 0 because useEffect was not updating state for some reason. No time to fix for this demo.
 
    const [hasInitialized, setHasInitialized] = useState(false);

    useEffect( () => {
        async function initializeApplication() {
        if (!hasInitialized) {
            const endpoint = "/api/initiateBusinessLoanApplication";
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch(endpoint, options);
            const result = await response.json();
            
            setForm({
                ...form,
                applicationId: result.businessLoanApplication.id
            });

            setHasInitialized(true);
            setStep(1);
        }
        initializeApplication();
        }
    });

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleLoadAccounts = async (event) => {
        /* const data = {
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
        */
       // API endpoint where we send form data.
       // We would make an additional request to updateApplication with the newly received data.
       // But for this example, we won't have a database to store the data.
       
       // We would also authorise the user against the chosen accounting provider.
       // But for this example, we will use a mock token.
       const token = 'authToken';
       
       // Now we get the balance sheet. This uses a different API endpoint. It also has a different request format.
       const data = {
           accountingProvider: form.accountingProvider,
           authToken: token,
           businessName: form.businessName,
           startYear: form.yearEstablished
        };
        
        const JSONdata = JSON.stringify(data);
        
        const endpoint = '/api/getBalanceSheet';
        
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
        };
        
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);
    
        // Get the response data from server as JSON.
        const result = await response.json();
        
        // Update the form with the balance sheet.
        setForm({
            ...form,
            sheet: result.sheet
        });
        
        setStep(2);
    };
    
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


};

return (
    
    <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
        {step === 0 ? (
            <div>
                <p>Initializing business application form...</p>
            </div>
                    ): null}
        {step > 0 ? (
            <div>
            <label htmlFor="name">Director Name: </label>
            <input type="text" id="name" onChange={updateForm}/>
            <label htmlFor="email">Director Email: </label>
            <input type="email" id="email" onChange={updateForm}/>
            <label htmlFor="phone">Director Phone: </label>
            <input type="tel" id="phone" onChange={updateForm}/>
            <label htmlFor="businessName">Business Name: </label>
            <input type="text" id="businessName" onChange={updateForm}/>
            <label htmlFor="businessAddress">Business Address: </label>
            <input type="text" id="businessAddress" onChange={updateForm}/>
            <label htmlFor="businessPhone">Business Phone: </label>
            <input type="tel" id="businessPhone" onChange={updateForm}/>
            <label htmlFor="businessEmail">Business Email: </label>
            <input type="email" id="businessEmail" onChange={updateForm}/>
            {/*
            This field would contain a validator to ensure the number is a valid year.
        */}
        <label htmlFor="yearEstablished">Year Established</label>
        <input type="number" id="yearEstablished" onChange={updateForm}/>
        <label htmlFor="loanAmount">Loan Amount</label>
        <input type="number" id="loanAmount" onChange={updateForm}/>
        <label htmlFor="accountingProvider">Accounting Provider</label>
        <select id="accountingProvider" onChange={updateForm}>
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
<button className={styles.button} onClick={handleLoadAccounts}>Load Accounts and Review</button>
</div>
) : null}

{step === 2 ? (
    <div className={styles.container}>
            <table className={styles.table}>
                <thead> Balance Sheets 
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Profit or Loss</th>
                    <th>Assets</th>
                </tr>
                </thead>
                <tbody>
                {form.sheet.map((row, index) => (
                    <tr key={index}> 
                    {/* Not a good idea to use the index for a unique key, 
                    but we can get away with it because we are only ever going to replace the whole table, 
                not go in modifying individual rows. */}
                        <td>{row.year}</td>
                        <td>{monthToName(row.month)}</td>
                        <td>{row.profitOrLoss}</td>
                        <td>{row.assetsValue}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="submit">Submit Application</button>
        </div>
) : null}
</form>
</div>
)
}

function monthToName (month) {
  switch (month) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      return 'Unknown'
  }
}