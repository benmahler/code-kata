export default function initiateBusinessLoanApplication(req, res) {
    /*
        This function would give an application ID to the user.
        The application ID would be used to track the application.
    */
    res.status(200).json({
        businessLoanApplication: { 
            id: 'a955c346-efb5-4ade-acf3-776bdf355a5e'
        }
    });
}