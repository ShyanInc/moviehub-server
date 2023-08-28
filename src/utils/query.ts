export const parseQuery = (query: string | undefined) => {
  return query ? parseInt(query) : undefined;
};
