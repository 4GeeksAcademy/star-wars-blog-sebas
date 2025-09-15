import { AppConfig } from "../config/config";

export async function DownloadItem(item, id) {
  try {
    const response = await fetch(`${AppConfig.api.baseUrl}/${item}/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function DownloadGroupItem(item) {
  try {
    const response = await fetch(`${AppConfig.api.baseUrl}/${item}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchWithCache = async (endpoint, id, ttlMs = 86400000) => {
  const cacheKey = `${endpoint}_${id}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    const parsed = JSON.parse(cached);
    if (Date.now() < parsed.expiry) {
      return parsed.value;
    }
    localStorage.removeItem(cacheKey);
    console.log(
      "Data expirada para: ",
      `${endpoint}_${id}`,
      ", descargando nueva data desde la API"
    );
  }

  try {
    const res = await fetch(`${AppConfig.api.baseUrl}/${endpoint}/${id}`);
    const data = await res.json();

    if (data) {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          value: data.result,
          expiry: Date.now() + ttlMs,
        })
      );
      return data.result;
    }
  } catch (err) {
    console.error(`Error fetching ${endpoint}/${id}:`, err);
    return null;
  }
};
