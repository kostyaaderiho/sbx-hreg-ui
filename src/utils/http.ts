export const encodeQueryParams = (params: Record<string, any>) => {
    return encodeURIComponent(JSON.stringify(params));
};
