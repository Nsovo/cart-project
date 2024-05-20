import { useEffect } from 'react';
import config from '../../../config';

interface PayPalPaymentProps {
  totalAmount: number;
}

/**
 * Renders a PayPal payment component.
 * 
 * @param totalAmount - The total amount of the payment.
 * @returns The PayPal payment component.
 */
// TODO: Move this to an payment SDK and call it from npm
const PayPalPayment = ({ totalAmount }: PayPalPaymentProps) => {
  useEffect(() => {
    console.log('Loading PayPal');

    // Load the PayPal script dynamically
    const script = document.createElement("script");
    script.src = `${config.paypalUrl}?client-id=${config.paypalClientId}`;
    script.addEventListener("load", () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalAmount.toFixed(2)
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render('#paypal-button-container');
      }
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [totalAmount]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalPayment;
