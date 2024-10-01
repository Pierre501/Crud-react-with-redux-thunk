export async function fetchData(url, method) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(url, { method: method, headers: headers });
    const jsonData = response.json();
    return {
      status: response.status,
      ok: response.ok,
      data: jsonData,
    };
  } catch (error) {
    console.error("Error retrieving data from API:", error);
    throw error;
  }
}

export async function createData(url, data, method) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return {
      status: response.status,
      ok: response.ok,
      data: jsonData,
    };
  } catch (error) {
    console.error("Error retrieving data from API:", error);
    throw error;
  }
}
