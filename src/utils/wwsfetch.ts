import { PUBLIC_AUTH_SERVER_ORIGIN } from "$env/static/public";
import { browser } from "$app/environment";

async function wwsfetch(
  path: string,
  url?: string,
  params?: Record<string, string>
) {
  const endPoint = new URL(path, url ? url : PUBLIC_AUTH_SERVER_ORIGIN);

  if (params) {
    Object.entries(params).forEach((entry) => {
      endPoint.searchParams.append(entry[0], entry[1]);
    });
  }

  const res = await fetch(endPoint);

  if (res.status === 401) {
    if (browser) {
      window.location.href = "/auth/login";
    }
  }

  return res;
}

export default wwsfetch;
