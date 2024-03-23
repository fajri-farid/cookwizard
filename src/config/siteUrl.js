export const siteUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_APP_URL_DEV
    : process.env.NEXT_PUBLIC_APP_URL_PROD;
