export async function handler(event) {
  const zodiac = event.queryStringParameters.zodiac || "aries";
  const apiKey = "nklqSaiR/RBkp3IP/7MGiQ==fYyUf2ZPFARjzogQ";
  const url = `https://api.api-ninjas.com/v1/horoscope?sign=${zodiac}`;

  try {
    const res = await fetch(url, { headers: { 'X-Api-Key': apiKey }});
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: "Error: " + err.toString() };
  }
}
