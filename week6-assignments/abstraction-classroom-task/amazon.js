import { CanaraBank } from "./canaraBank-abstract.js";
class Amazon extends CanaraBank {
    recordPaymentDetails() {
        console.log("Payment details are recorded in the Amazon system");
    }
}
const amazonObj = new Amazon();
amazonObj.cashOnDelivery();
amazonObj.upiPayment();
amazonObj.cardPayments();
amazonObj.internetBanking();
amazonObj.recordPaymentDetails();
