import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../Firebase/Firebase";
import { useStateValue } from "./../Stateprovider/Stateprovider";
import Order from './../Order/Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection(orders)
        .orderBy("create", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } 
    else {
      setOrders([]);
    }
  }, [user])
  console.log(orders)
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    
    </div>
  );
}

export default Orders;
