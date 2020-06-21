import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = `pk_test_Io258r65K9UuRCRaUn6YVCUw00LNHKWySs`

   const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successfull')
        }).catch(error => {
            console.log('Payment error: ', error);
            alert(
                'There was an issue with your payment. Please sure you use provided credit card'
            )
        })
    }

    return (
        <StripeCheckout 
            label='PayNow'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton