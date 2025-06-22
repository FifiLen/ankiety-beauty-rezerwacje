export interface Salon {
  slug: string;
  name: string;
  description?: string;
}

export const salons: Salon[] = [
  {
    slug: "beauty-heaven",
    name: "Beauty Heaven",
    description: "Luxurious spa in the city center.",
  },
  {
    slug: "nail-experts",
    name: "Nail Experts",
    description: "Professional manicure and pedicure salon.",
  },
];
