export interface IItemOrders{
    id: number,
    item_id: number,
    canceled: boolean,
    order_id:number,
    tableNumber:number,
    delivered_at: Date,
    created_at: Date,
    updated_at: Date 
    
}