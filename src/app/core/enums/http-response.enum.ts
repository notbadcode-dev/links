export const enum EHttpResponseCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export const enum EHttpResponseMessage {
    OK = 'Request operation successfully processed',
    CREATED = 'Created operation successfully processed',
    NO_CONTENT = 'No content',
    BAD_REQUEST = 'Bad request',
    UNAUTHORIZED = 'Unauthorized',
    FORBIDDEN = 'Forbidden',
    NOT_FOUND = 'not found',
    INTERNAL_SERVER_ERROR = 'Internal server error',
    CRITICAL_ERROR = 'Critical error',
}
