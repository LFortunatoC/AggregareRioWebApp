export interface IOrder{
    id: number,
    table_number: number,
    canceled: boolean,
    deliveredAt: Date,
    created_at: Date,
    updated_at: Date
    items
  
}

export interface ItemOrdered {
    id: number,
    order_id: number,
    item_id: number,
    qty: number,
    currPrice: number,
    canceled: boolean,
    created_at: Date,
    updated_at: Date
}

export type items= [ItemOrdered]