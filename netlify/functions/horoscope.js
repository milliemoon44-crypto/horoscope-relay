export async function handler(event) {
  const sign = event.queryStringParameters.sign || "aries";
  const res = await fetch(
    `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
    {
      method: "POST",
    }
  );

  const data = await res.json();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
