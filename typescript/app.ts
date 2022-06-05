enum PaymentStatus {
  Holded,
  Processed,
  Reversed
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded;
  createdAt: Date = new Date();
  updatedAt: Date; 

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifetime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status == PaymentStatus.Processed) {
      throw new Error('Payment cannot be unholded.');
    }
    this.status = PaymentStatus.Reversed; // cancelled
    this.updatedAt = new Date(); // renewed
  }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifetime();
console.log(time);
// payment.status = PaymentStatus.Reversed;
