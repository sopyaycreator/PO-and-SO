export default function ProcessScanResult(context) {
    // 1. Try to grab the result
    let actionResult = context.getActionResult('BarcodeScanner');

    // DEBUG ALERT 1: Did we find the result object?
    if (!actionResult) {
        return context.executeAction({
            "Name": "/BusinessPartner/Actions/Messages/ToastMessage.action",
            "Properties": { "Message": "Error: Action Result 'BarcodeScanner' not found!" }
        });
    }

    // 2. Check if there is data inside
    if (actionResult.data) {
        let scannedResult = actionResult.data;
        
        return context.executeAction({
            "Name": "/BusinessPartner/Actions/Messages/ToastMessage.action",
            "Properties": {
                "Message": `Scanned Code: ${scannedResult}`,
                "Duration": 5
            }
        });
    } else {
        // DEBUG ALERT 2: Result found, but it's empty
        return context.executeAction({
            "Name": "/BusinessPartner/Actions/Messages/ToastMessage.action",
            "Properties": { "Message": "Scan cancelled or no data in result." }
        });
    }
}