export default function GetDetailedError(context) {
    // 1. Get the result of the action that just failed
    // Replace 'YourFailedAction' with the actual name of your OData action
    let actionResult = context.getActionResult('CreateMaterialDoc');
    let errorMessage = "An unexpected error occurred.";

    if (actionResult && actionResult.error) {
        let error = actionResult.error;
        
        // 2. Build a structured technical string
        errorMessage = `Technical Details:\n`;
        errorMessage += `• Code: ${error.code || 'N/A'}\n`;
        errorMessage += `• Status: ${error.statusCode || 'N/A'}\n`;
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

    // 4. Trigger a standard Message Action to show this string
    return context.executeAction({
        "Name": "/BusinessPartner/Actions/GenericError.action",
        "Properties": {
            "Message": errorMessage,
            "Title": "Transaction Failed",
            "OKCaption": "Close"
        }
    });
}