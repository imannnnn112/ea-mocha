export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface Topping {
  id: string;
  name: string;
  description: string;
  price: number;
  iconName: string;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  sweetness: '100%' | '75%' | '50%' | '25%';
  iceLevel: 'Normal Ice' | 'Less Ice' | 'Extra Ice';
  selectedToppings: Topping[];
  notes: string;
  unitTotalPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}
