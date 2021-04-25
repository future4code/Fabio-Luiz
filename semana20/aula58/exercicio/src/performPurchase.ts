export interface User {
  name: string;
  balance: number;
}

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance < value) {
    return undefined;
  }
  return { ...user, balance: user.balance - value };
}
