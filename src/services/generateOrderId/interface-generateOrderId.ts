interface IOrderIdResponse{
    orderId: string
}
export interface IGenerateOrderId{
    generate(): Promise<IOrderIdResponse>
}