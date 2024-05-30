export class CouldNotPlaceOrderError extends Error {
    constructor() {
      super('could not place order')
    }
  }