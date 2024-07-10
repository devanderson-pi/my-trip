export interface Trip {
  createdAt: Date;
  id: string;
  location: string;
  title: string;
  userId?: string;
}

export interface TripRegistration {
  location: string;
  title: string;
}
