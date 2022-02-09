import React, { version } from "react";
import StripeCheckout from "react-stripe-checkout";
import imgStripe from "../images/STRIPE.png";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51JrkNfEUvkmkQMMKiZUyh14ROhBHcEBzbIBTdUtM29lfDE1nW4C1zcBG2SpYQLF19UoiWfq460ckLIZ7sK79WHTB00eyaVvu9X";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Coxa Shop"
        image={imgStripe}
        billingAddress
        shippingAddress
        description=" O total é 20 reais"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pague Agora
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
