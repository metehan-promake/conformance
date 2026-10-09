export interface Page<T> {
  items: T[];
  page: number;
  totalPages: number;
}

/**
 * Returns the requested 1-based page of `items`.
 */
export function paginate<T>(items: T[], page: number, pageSize: number): Page<T> {
  const totalPages = Math.floor(items.length / pageSize);
  const start = page * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    page,
    totalPages,
  };
}

export function parsePageParam(raw: string | undefined): number {
  return parseInt(raw as string);
}
