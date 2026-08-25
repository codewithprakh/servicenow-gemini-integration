var GeminiIntegration = Class.create();

GeminiIntegration.prototype = {
    initialize: function() {},

    getResponse: function(promptText) {

        try {

            var rm = new sn_ws.RESTMessageV2('Google_Gemini', 'generate');

            rm.setStringParameterNoEscape('prompt', promptText);

            var response = rm.execute();
            var status = response.getStatusCode();
            var body = response.getBody();

            if (status != 200) {
                return {
                    success: false,
                    error: body
                };
            }

            var obj = JSON.parse(body);

            var text = obj.candidates[0].content.parts[0].text;

            return {
                success: true,
                text: text
            };

        } catch (ex) {

            return {
                success: false,
                error: ex.message
            };
        }
    },

    type: 'GeminiIntegration'
};
