import React from "react";
import OrderCard from "../../common/OrderCard";
function Order({ result }) {
  return (
    <>
      <OrderCard
        orderNumber={result.transactionNo}
        // orderDate="Mon, Nov 12, 6:26 PM"
        deliveredDate={result.paymentTime}
        // orderTitle="Gus's World Famous Fried Chicken"
        PhoneNumber={result.customPhone}
        address={result.customAddress}
        addressCity={result.customCity}
        orderProducts={result.orderDetails}
        orderTotal={result.refund}
        // helpLink="#"
      />
    </>
  );
}

export default Order;
