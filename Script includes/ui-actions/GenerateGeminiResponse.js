if (!current.u_prompt) {
    gs.addErrorMessage("Please enter a prompt first");
    action.setRedirectURL(current);

} else {

    current.u_status = 'Requested';
    current.update();

    var gemini = new GeminiIntegration();
    var result = gemini.getResponse(current.u_prompt);

    if (result.success) {

        current.u_gemini_response = result.text;
        current.u_status = "Success";
        gs.addInfoMessage("Gemini response generated successfully.");

    } else {

        current.u_status = 'Failed';
            current.u_error = result.error;
        gs.addErrorMessage('Failed to generate Gemini response.');
    }

    current.update();
    action.setRedirectURL(current);
}
