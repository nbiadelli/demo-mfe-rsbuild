export const fetchData = async <T>(
  url: string,
  traverseData?: (data: any) => T,
): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network has problems');
    }
    const data = await response.json();
    if (traverseData) {
      return traverseData(data);
    }
    return data as T;
  } catch (error) {
    console.error('There was a problem fetching products:', error);
    return {} as T;
  }
};
