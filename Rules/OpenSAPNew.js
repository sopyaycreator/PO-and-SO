/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OpenSAPNews(clientAPI) {
    // Get the NativeScript utils module from the clientAPI
    const utils = clientAPI.nativescript.utilsModule;
    
    // Open the external URL
    return utils.openUrl("https://news.sap.com");
}