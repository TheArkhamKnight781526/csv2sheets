const { google } = require('googleapis');
const csv = require('@fast-csv/parse');

async function csv2sheets(auth, options) {
    //Authorize the sheets API
    const { email, private_key } = auth;
    const sheetsAuth = new google.auth.JWT(
        email,
        null,
        private_key,
        ["https://www.googleapis.com/auth/spreadsheets"]
    )
    await sheetsAuth.authorize();
    google.options({ auth: sheetsAuth });
    const sheetsClient = google.sheets({version: 'v4'})

    //Read CSV
    const { path, id, sheet } = options;

    var result = [];

    await csv.parseFile(path, { escape: '\\' })
    .on('error', error => { console.error(error); })
    .on('data', async data => {
        result.push(data)
    })
    .on('end', async function() {
        var data = [
            {
                range: sheet,
                values: result
            }
        ];

        var updateConfig = {
            spreadsheetId: id,
            requestBody: {
                data: data,
                valueInputOption: "USER_ENTERED"
            }
        }

        sheetsClient.spreadsheets.values.batchUpdate(updateConfig);
    })
}

module.exports = csv2sheets;