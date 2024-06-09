In the project directory, you can run:

### Setup

    1.Clone the repo
    2.run npm install command
    3.run npm start

## How the app is designed

    The app's main focus is to manage beneficiary.
    1.Beneficiary Data for any user will not be a heavy one and let us assume a maximum of 100 beneficiaries are there.
    So the App is designed to hold List of Beneficiaries.

    The app can also be designed to have Object of Beneficiary.
    {
        id: {
            name,
            address,
            country,
            pincode
        }
    }
    but as mentioned, the beneficiary data is not heavy and so Array of Beneficiary is enough.

    2.Also the App is mimic to have hit API endpoints.
    So there is no reducers in slice.
    all the CRUD operations are done using CreateAsyncThunk operation.
