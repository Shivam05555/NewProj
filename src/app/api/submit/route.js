export async function POST(request) {
    const data = await request.json();
    console.log('Received data:', data);
  
    // You can add your own logic to process the data here.
    return new Response(JSON.stringify({ message: 'Data received successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  