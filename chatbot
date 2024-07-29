var API_KEY = '*****************************';

// Function to serve the HTML page
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

// Function to get response from the Google Generative AI API
function getChatbotResponse(userInput) {
  var url = "https://us-central1-aiplatform.googleapis.com/v1/projects/gghackathon/locations/us-central1/publishers/google/models/gemini-1.0-pro:streamGenerateContent";
  var payload = JSON.stringify({
    prompt: userInput
  });

  var options = {
    method: 'POST',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + API_KEY
    },
    payload: payload
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var json = response.getContentText();
    Logger.log('API Response: ' + json);  // Log the API response

    var data = JSON.parse(json);
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].text;
    } else {
      Logger.log('Unexpected API response structure: ' + json);
      return 'Sorry, I did not understand that. Could you please rephrase?';
    }
  } catch (error) {
    Logger.log('Error during API request: ' + error);
    return 'Sorry, there was an error processing your request. Please try again later.';
  }
}
