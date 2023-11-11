import {
  PUBLIC_AUTH_SERVER_ORIGIN,
  PUBLIC_FOR_DEVELOPER_ORIGIN,
} from "$env/static/public";
import { browser } from "$app/environment";

async function wwsfetch(
  path: string,
  baseUrl?: string,
  params?: Record<string, string>
) {
  const endPoint = new URL(path, baseUrl ? baseUrl : PUBLIC_AUTH_SERVER_ORIGIN);
  if (params) {
    Object.entries(params).forEach((entry) => {
      endPoint.searchParams.append(entry[0], entry[1]);
    });
  }

  const res = await fetch(endPoint, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });

  if (res.status === 401) {
    if (browser) {
      window.location.href =
        PUBLIC_AUTH_SERVER_ORIGIN +
        `/auth/login?continue=${PUBLIC_FOR_DEVELOPER_ORIGIN}/login`;
    }
  }

  return res;
}

export default wwsfetch;
