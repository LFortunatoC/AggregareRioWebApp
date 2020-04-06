// Here we Have the Interfaces used for the whole App

// Using This interfaces along the app, we can load the information and get specific variables when needed
// the use of those interfaces allows the reusage of code and saves a lot of time.

export interface IData{
    lang_id: number,
    category_id: number
    subCategory_id: number,
    menu_id : number,
    client_id: number,
    order_id:number,
    tableNumber: number,
    hasOrdertoPlace: boolean,
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
    order_id: number,
    tableNumber: number,
    deliveredAt: Date,
    canceled: boolean,
    itemList: Array <IPreOrderItem>
}

export interface IPreOrderItem {
    item_id: number,
    title: String,
    qty: number,
    currPrice: number
}



export type OrderedItems= [ItemOrdered];
export type ItemList = [IItem];