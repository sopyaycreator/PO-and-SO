export default function GetDetailedError(context) {
    let actionResult = context.getActionResult('CreateMaterialDoc');
    let errorMessage = "Transaction Failed";

    if (actionResult && actionResult.error) {
        let error = actionResult.error;
        let a = error.
        
       
        errorMessage = `Technical Details:\n`;
        
          errorMessage += `• Message: ${error.message || 'No message'}\n`;

        // 3. Try to parse backend OData error messages (if available)
        if (error.responseBody) {
            try {
                let body = JSON.parse(error.responseBody);
                if (body.error && body.error.message) {
                    errorMessage += `• Server: ${body.error.message.value || body.error.message}`;
                }
            } catch (e) {
                errorMessage += `• Body: ${error.responseBody.substring(0, 100)}`;
            }
        }
    }
    console.log(error.responseBody);
   
    return context.executeAction({
        "Name": "/BusinessPartner/Actions/GenericError.action",
        "Properties": {
            "Message": errorMessage,
            "Title": "Transaction Failed",
            "OKCaption": "Close"
        }
    });
}