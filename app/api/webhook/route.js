// src/app/api/webhook/route.js

export async function POST(req) {
  try {
    // Step 1: Parse the incoming JSON data from the webhook
    const data = await req.json();
    console.log('Received webhook data:', data); // Log the data for debugging

    // Step 2: Define the n8n webhook URL or any external service URL
    const webhookUrl =
      'https://otherwise.app.n8n.cloud/webhook/12fd167b-7740-4f77-aafe-cf499bc31504'; // Replace with your actual URL

    console.log('Sending data to n8n webhook:', webhookUrl);

    // Step 3: Send the received data to an external service (e.g., n8n webhook)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Sending the received data to n8n
    });

    // Step 4: Handle the response from the external service (e.g., n8n)
    if (response.ok) {
      // If the data was successfully sent to n8n
      return new Response(
        JSON.stringify({ message: 'Data successfully sent to n8n webhook' }),
        { status: 200 }
      );
    } else {
      // If sending to n8n failed
      const errorText = await response.text(); // Capture error message from n8n
      return new Response(
        JSON.stringify({
          message: 'Failed to send data to n8n',
          error: errorText,
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    // Catch any unexpected errors
    console.error('Error occurred while processing webhook data:', error);
    return new Response(
      JSON.stringify({
        message: 'Error occurred while processing webhook data',
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// // src/app/api/webhook/route.js

// export async function POST(req) {
//   try {
//     const data = await req.json(); // Get data from the incoming request
//     console.log('Data is', data);

//     // Replace with your actual n8n webhook URL
//     const webhookUrl =
//       'https://otherwise.app.n8n.cloud/webhook/12fd167b-7740-4f77-aafe-cf499bc31504';

//     console.log('webhookUrl is', webhookUrl);

//     // Send the data to n8n's webhook
//     const response = await fetch(webhookUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data), // Sending the collected data
//     });
//     console.log('response is', response);

//     if (response.ok) {
//       return new Response(
//         JSON.stringify({ message: 'Data sent to n8n webhook successfully' }),
//         { status: 200 }
//       );
//     } else {
//       return new Response(
//         JSON.stringify({ message: 'Failed to send data to n8n webhook' }),
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         message: 'Error occurred while sending data to n8n webhook',
//         error,
//       }),
//       { status: 500 }
//     );
//   }
// }
