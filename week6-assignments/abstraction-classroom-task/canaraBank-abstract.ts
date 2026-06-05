import { Payments } from "./payments-interface.js";
export abstract class CanaraBank implements Payments {
    cashOnDelivery(): void {
        console.log("Cash on delivery payment option is available")
    }

    upiPayment(): void {
        console.log("UPI payment option is available")
    }

    cardPayments(): void {
        console.log("Card payment option is available")
    }       

    internetBanking(): void {
        console.log("Internet banking payment option is available")
    }

    recordPaymentDetails() : void {
        console.log("Payment details are recorded in the system")
    }
}