export enum SortDirection {
  ASC,
  DESC,
}

export enum SortByOptions {
  deviceName = 'deviceName',
  osType = 'osType',
  countryIsoCode = 'countryIsoCode',
}

export type SortData = {
  sortBy: SortByOptions | null;
  direction: SortDirection | null;
};
