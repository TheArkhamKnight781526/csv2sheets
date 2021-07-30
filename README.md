# **csv2sheets**

### This is a simple package that allows you to push a CSV file directly into a Google Spreadsheet.  

## Install

```npm install csv2sheets```

```yarn add csv2sheets```
<br></br>
## Setup

To use this package, you will need the following:
* A Google Developer account
* A Service Account (with email and private key - I would reccommend storing your credentials in a .env for safety reasons)
* An existing spreadsheet

Information on how to setup a Service Account can be found here:

https://cloud.google.com/iam/docs/creating-managing-service-accounts

Please note that the spreadsheet you use must either be **public** or **shared with your service account email.**

## How to use 

The function takes two parameters: auth and config.

The first parameter, auth, should look like this:
```
{
    email: 'your_service_account_email',
    private_key: 'your_service_account_private_key'
}
```

And the second parameter, config, should look like this:
```
{
    path: 'path/to/csv'
    id: 'spreadsheet_id'
    sheet: 'specific_sheet_in_spreadsheet'
}
```

## Example:

```
const csv2sheets = require("csv2sheets");

csv2sheets(
  {
    email: '*****',
    private_key: '*****'
  },
  {
    path: 'path/to/csv',
    id: '*****',
    sheet: 'Sheet1'
  }
);
```

## That's it! Happy Coding!
