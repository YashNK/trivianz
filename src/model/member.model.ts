export type AllMembers = {
  id: number;
  name: string;
  storeName: string;
  group: string;
  profession: string;
  image?: string;
  phoneNumber: number;
}[];

export type Member = {
  id: number;
  name: string;
  storeName: string;
  group: string;
  profession: string;
  image?: string;
  phoneNumber: number;
};

export type FilterOptions = {
  search: string;
  group: string | null;
  profession: string | null;
};
