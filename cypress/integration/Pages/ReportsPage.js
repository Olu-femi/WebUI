/// <reference types ="Cypress" />
/// <reference types="cypress-xpath" />

export class ReportsPage {

    static makeSearchCall() {
        cy.request({
            method: 'POST',
            url: 'https://passerelle.staging.vggdev.com/api/report/tripsReport',
            headers: {
                'Authorization': 'Bearer LgF-TA5fg-osy9XGuvHZh-VBe-6M6mxoYoHSqmLj3Gb0huQSExe40Sdogc2mjZHQEsFPs495CTMBwVfftmwk8dggelaRqE41WOHaW8Yu-T4G1FZZaM1khWh5X6loLAiYqq12it6v4LyJ3D1PJvhyt_XLHj6lsZ081emFnSkQEKZRlTZmQkJlQ1GQU1jXWJgrxUHAXVQE6f_sZfWi2gJaDd9qOAF16sbc-NI7vfeerfExmMmBu3ImrkEelDDju6LMMFLrG4s0zsQ3KdzXrlDBshj5MVvaL5Kk2TQBqf8xLBalZMUgZNaLkRGQdyBXjav2EiL-MDwUPnxHSiy_Au47n1v6vO9ErCT_kX4ZKXfut0uyvFKddGFAU2TZYa8B6G42pdeNygjiIs4wePJAhA1Dwe5WqCMZN8-Ad5E_MmzklbOZFGjRxzgZmcwnJucRG4IN13FOiTii5Jo6ZzBRvJ_U4JtynrUq9xbQtaYsKJDRgewkFS8mFUI4qj13w-ARNa3g7LgRXPa1YXmUDo4_PtPiT4ZPSKZAvE0ZjvE56n_kTAevMbLn_4iOfnmbqkU8X8UWdARwALEjbYiB6Pw4Uwo2ORJY6dsHMkg9P1WPxPGW-eF0jPS94g0ubnUo1JvkY1SNq2fkww',
                'Content-Type': 'application/json',
                'AppName': 'bsp trips',
                //'UserId':'{{userId}}'
            },
            body: {
                "From": 0,
                "Size": 229,
                "Parameters": {
                    "StartDate": "2021-01-23T07:49:12.703",
                    "EndDate": "2021-03-31T13:48:37.08",
                    "DateType": "booking",
                    //"TripType": 0,
                    //"AgentId": 19,
                    //"MerchantId": 10,
                    //"FlightType": 1
                }
            }

        }).then((res) => {
            expect(res.status).to.eq(200);
        })
    }
}