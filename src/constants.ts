export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  specs: {
    hp: number;
    zeroToSixty: string;
    topSpeed: number;
  };
  category: 'Supercar' | 'Luxury' | 'SUV';
}

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Revuelto',
    brand: 'Lamborghini',
    year: 2024,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 1001, zeroToSixty: '2.5s', topSpeed: 217 },
    category: 'Supercar'
  },
  {
    id: '2',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    year: 2023,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 986, zeroToSixty: '2.5s', topSpeed: 211 },
    category: 'Supercar'
  },
  {
    id: '3',
    name: '911 GT3 RS',
    brand: 'Porsche',
    year: 2024,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 518, zeroToSixty: '3.0s', topSpeed: 184 },
    category: 'Supercar'
  },
  {
    id: '4',
    name: 'Cullinan',
    brand: 'Rolls-Royce',
    year: 2023,
    price: 3500,
    image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 563, zeroToSixty: '4.8s', topSpeed: 155 },
    category: 'SUV'
  },
  {
    id: '5',
    name: 'G 63 AMG',
    brand: 'Mercedes-Benz',
    year: 2024,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 577, zeroToSixty: '4.5s', topSpeed: 149 },
    category: 'SUV'
  },
  {
    id: '6',
    name: 'DBS Volante',
    brand: 'Aston Martin',
    year: 2023,
    price: 2200,
    image: 'https://images.unsplash.com/photo-1603584173870-7f3ca993466d?auto=format&fit=crop&q=80&w=1920',
    specs: { hp: 715, zeroToSixty: '3.4s', topSpeed: 211 },
    category: 'Luxury'
  }
];
