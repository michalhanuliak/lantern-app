type DeviceMutationPayload = string | Device;

export enum DeviceMutationTypes {
  DELETE,
  CREATE,
}

export type DeviceMutation = {
  payload: DeviceMutationPayload;
  mutationType: DeviceMutationTypes;
};

export enum OsType {
  IPHONE = 'iPhone',
  ANDOROID = 'Android',
  WINDOWS = 'WindowsPhone',
}
export type Device = {
  objectId: string;
  deviceName: string;
  osType: OsType;
  countryIsoCode: string;
  createdAt: string;
  updatedAt: string;
};
