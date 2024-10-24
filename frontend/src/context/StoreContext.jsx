import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setcartItems] = useState([]);
  const host = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}`;

  const getItems = async () => {

    const response = await fetch(`${host}/api/items/fetchallitems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setcartItems(json);
  };

  const addtocart = async (name, price) => {
    const temp = cartitems;
    let items = cartitems.findIndex((product) => product.name == name);
    if (items < 0) {
      const obj = {
        name: name,
        num: 1,
        price: price,
      };
      temp.push(obj);
    } else {
      temp[items].num += 1;
    }
    setcartItems(temp);

    const response = await fetch(`${host}/api/items/additem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, price }),
    });
  };

  const removefromcart = async (name) => {
    const temp = cartitems;
    let items = cartitems.findIndex((product) => product.name == name);
    if (temp[items].num ==1) {
        const newitems = cartitems.filter((item) => { return item.name !== name })
        setcartItems(newitems);
    } else {
      temp[items].num -= 1;
      setcartItems(temp);
    }

    const response = await fetch(`${host}/api/items/deleteitem`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name }),
    });
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    cartitems.forEach(item => {
      if (item.num > 0) {
        let iteminfo = food_list.find((product) => product.name == item.name);
        totalamount += iteminfo.price * item.num;
      }
  }); 
    return totalamount;
  };

  const clearcart = async () => {
    // API Call
    const response = await fetch(`${host}/api/items/clearcart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    setcartItems([]);
  };

  const ContextValue = {
    food_list,
    cartitems,
    setcartItems,
    getItems,
    addtocart,
    removefromcart,
    gettotalcartamount,
    clearcart
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
