export async function handler(event) {
  const sign = event.queryStringParameters.sign || "aries";
  const apiKey = "nklQsAiR/RBkp3IP/7MGiQ==fYyUf2"; // your actual key
  const url = `https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`;

  try {
    const res = await fetch(url, {
      headers: { 'X-Api-Key': apiKey }
    });

    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.toString() })
    };
  }
}
