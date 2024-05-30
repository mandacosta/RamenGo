export class ProteinIdAndBrothIdRequired extends Error {
    constructor() {
      super('both brothId and proteinId are required')
    }
  }