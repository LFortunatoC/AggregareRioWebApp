export interface IData{
    lang_id: number,
    category_id: number
    subCategory_id: number,
    menu_id : number,
    client_id: number,
    order_id:number,
    tableNumber: number,
    OrderTotalValue: number,
    OrderedItems
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

export type OrderedItems= [ItemOrdered]