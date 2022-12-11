export class SetWalletAmount {
  static readonly type = '[WALLET] Set';
  constructor(public totalAmount: number) { }
}

export class DecreaseWalletAmount {
  static readonly type = '[WALLET] Decrease';
  constructor(public amount: number) { }
}