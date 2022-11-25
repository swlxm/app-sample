const FETCH_TIMEOUT = 60 * 1000;
export const TIMEOUT_ERROR_MESSAGE = `Timeout Error: ${FETCH_TIMEOUT / 1000} sec`;

export async function fetchDriver(...args: any[]) {
  const response = await Promise.race([
    fetch(...args),
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          reject({
            data: TIMEOUT_ERROR_MESSAGE,
            message: TIMEOUT_ERROR_MESSAGE,
            status: 408,
          }),
        FETCH_TIMEOUT,
      ),
    ),
  ]);

  return response;
}
