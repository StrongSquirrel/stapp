// @flow

export type Error = {
    message: string,
    errors: Array<{
        field: string,
        error: string
    }>
}
