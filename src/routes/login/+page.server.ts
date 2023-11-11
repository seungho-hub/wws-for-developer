import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ url }) => {
  const token = url.searchParams.get("jwt");

  return { token };
};
