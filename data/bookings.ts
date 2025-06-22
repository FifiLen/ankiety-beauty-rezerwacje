export interface Booking {
  id: number;
  salonSlug: string;
  clientId: number;
  date: string; // ISO string
}

export const bookings: Booking[] = [];
