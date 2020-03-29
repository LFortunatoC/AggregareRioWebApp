export interface IData{
    lang_id: number,
    category_id: number
    subCategory_id: number,
    menu_id : number,
    client_id: number,
    order_id:number,
    tableNumber: number,
    OrderTotalValue: number,
    OrderedItems,
    total
};

export interface ItemOrdered {
    id: number,
    order_id: number,
    item_id: number,
    qty: number,
    currPrice: number,
    canceled: boolean,
    created_at: Date,
    updated_at: Date
};



export interface IItem {
    id: number,
    category_id: number,
    subCategory_id: number,
    menu_id: number,
    picturePath : string,
    value: number,
    active: boolean,
    title: string,
    description: string,
    qty: number,
};

export interface IPreOrder {
    tableNumber: number,
    deliveredAt: Date,
    itemList: Array <IPreOrderItem>
}

export interface IPreOrderItem {
    item_id: number,
    qty: number,
    currPrice: number
}



export type OrderedItems= [ItemOrdered];
export type ItemList = [IItem];