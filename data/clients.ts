export interface Client {
  id: number;
  salonSlug: string;
  name: string;
}

export const clients: Client[] = [
  { id: 1, salonSlug: "beauty-heaven", name: "Anna Kowalska" },
  { id: 2, salonSlug: "beauty-heaven", name: "Jan Nowak" },
  { id: 3, salonSlug: "nail-experts", name: "Katarzyna Malinowska" },
];
