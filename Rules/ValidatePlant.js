export default function ValidatePlant(controlProxy) {

    let value = controlProxy.getValue();

    if (!value || value.trim() === '') {

        controlProxy.setValidationProperty(
            'ValidationMessage',
            'Plant is required'
        );

        controlProxy.applyValidation();

        return false;
    }

    controlProxy.clearValidation();

    return true;
}