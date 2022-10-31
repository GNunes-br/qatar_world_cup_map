export type Country = {
  id: number;
  name: string;
  group: string;
  image: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};
