//
//  Instantiate IOTA
//
var iota = new IOTA({
  'provider'  : 'http://sandbox.iotatoken.com/api/v1/',
  'sandbox'   :  true,
  'token'     : 'EXAMPLE-TOKEN-HERE'
});

// we have a bank - so seed is static and secret!
// TODO one mainnet is back online - generate SEED
//Added a already Generated Seed (0 Iota)
//TODO add a security, otherwise you can read the var in Browser!
var seed = "RFAYKKOAHGMEUZ9IVJACGIWZEIMR9BDJUSJMULIWYWOITLOVYOBDINMXLGSOCRHBWEEGWISCEKJUDHZWJ";
var balance = 0;



    // Gets the addresses and transactions of an account
    // As well as the current balance
    //  Automatically updates the HTML on the site
    //
    function getAccountInfo() {
        // Command to be sent to the IOTA API
        // Gets the latest transfers for the specified seed
        iota.api.getAccountData(seed, function(e, accountData) {

            console.log("Account data", accountData);
            balance = accountData.balance;

            // Update total balance
            $("#iota__balance").html(balance);
        })
    }

    //
    //  Makes a new transfer for the specified seed
    //  Includes message and value
    //
    function sendTransfer(address, value, messageTrytes) {

        var transfer = [{
            'address': address,
            'value': parseInt(value),
            'message': "iota-faucet"
        }]

        console.log("Sending Transfer", transfer);
        console.log(iota);
        // We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
        iota.api.sendTransfer(seed, 4, 18, transfer, function(e) {

            if (e){
              console.log(e)
            } else {
                console.log("Successfully sent 1 IOTA to " + address)
                balance = balance - value;
                $("#iota__balance").html(balance);
            }
        })
    }
