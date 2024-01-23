import {
  PUBLIC_AUTH_SERVER_ORIGIN,
  PUBLIC_FOR_DEVELOPER_ORIGIN,
} from "$env/static/public";
import { browser } from "$app/environment";

interface Option extends RequestInit {
  baseUrl?: string;
  params?: Record<string, string>;
}

async function wwsfetch(path: string, option?: Option) {
  const endPoint = new URL(
    path,
    option?.baseUrl ? option?.baseUrl : PUBLIC_AUTH_SERVER_ORIGIN
  );

  if (option?.params) {
    Object.entries(option.params).forEach((entry) => {
      endPoint.searchParams.append(entry[0], entry[1]);
    });
  }

  const res = await fetch(endPoint, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    ...option,
  });

  if (res.status === 401) {
    if (browser) {
      window.location.href =
        PUBLIC_AUTH_SERVER_ORIGIN +
        `/auth/login?continue=${PUBLIC_FOR_DEVELOPER_ORIGIN}/login`;
    }
  }

  const parsedBody = await res.json();

  // response of fetch api is non-enumerable, can not copy properties of response with spread syntax
  // and res.body is read-only
  // so, redefine body with parsedBody
  Object.defineProperty(res, "body", {
    value: parsedBody,
    writable: false,
  });

  return res;
}

export default wwsfetch;
