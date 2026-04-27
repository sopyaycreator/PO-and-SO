export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _Business_Partner = context.executeAction('/BusinessPartner/Actions/Business_Partner/Service/InitializeOffline.action');
    let _Material_Stock =
        context.executeAction('/BusinessPartner/Actions/Material_Stock/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_Business_Partner,  _Material_Stock]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/BusinessPartner/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}