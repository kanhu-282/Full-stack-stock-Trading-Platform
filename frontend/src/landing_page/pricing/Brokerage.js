import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-5">Brokerage calculator</h3>{" "}
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "11px" }}
            className="text-muted fs-6"
          >
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li>
              {" "}
              Gst Tax levied by the government on the services rendered. 18% of
              ( brokerage + SEBI charges + transaction charges)
            </li>
            <li>
              SEBI Charges Charged at ₹10 per crore + GST by Securities and
              Exchange Board of India for regulating the markets.
            </li>
            <li>
              Physical CMR request First CMR request is free. ₹20 + ₹100
              (courier charge) + 18% GST for subsequent requests.
            </li>
            <li>
              Margin Trading Facility UPI (MTF) MTF Brokerage: 0.3% or Rs.
              20/executed order, whichever is lower. MTF pledge charge: ₹30 +
              GST per pledge request per ISIN.
            </li>
            <li>
              Account with debit balance If the account is in debit balance, any
              order placed will be charged ₹40 per executed order instead of ₹20
              per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charge</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
