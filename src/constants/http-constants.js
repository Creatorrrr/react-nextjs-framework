console.debug("http-constants.js");

const prefixUrl =
  typeof window !== "undefined"
    ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    : process.env.NEXT_PUBLIC_HOST;

// 루트 URL
export const PREFIX_URL = prefixUrl;

// HTTP 타임아웃
export const HTTP_TIMEOUT = process.env.NEXT_PUBLIC_HTTP_TIMEOUT;
// 파일 전송 타임아웃
export const FILE_TIMEOUT = process.env.NEXT_PUBLIC_FILE_TIMEOUT;

// 상태코드
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
