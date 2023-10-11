// Generated by https://quicktype.io

export interface Orders {
    orders: Order[];
}

export interface Order {
    id: string;
    name: string;
    address: string;
    city: string;
    size: string;
    delivered: string;
    toppings: Topping[];
    notes: Note[];
}

export interface Note {
    note: string;
}

export interface Topping {
    topping: string;
}
