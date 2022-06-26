import React, { useContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  onSnapshot,
  collection,
  getFirestore,
  addDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { firebaseConfig } from "../../firebase";

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const colRef = collection(db, "expenses");

const AppProvider = React.createContext();

const Context = ({ children }) => {
  const [currentuser, setcurrentuser] = useState("");

  const [loading, setloading] = useState(true);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setloading(true);
        if (user == null) {
          setloading(false);
        } else {
          setcurrentuser(user.email);
          console.log(currentuser);
          setloading(false);
        }
      }),
    [currentuser]
  );
  const [form, setForm] = useState({
    productName: "",
    price: "",
    date: "",
    month: new Date().toLocaleDateString("en-us", { month: "long" }),
    productNo: "",
    category: "",
    description: "",
    email: currentuser,
    createdAt: serverTimestamp(),
  });
  const [results, setResults] = useState([]);

  const [signIn, setSignIn] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [loading1, setloading1] = useState(true);
  const q = query(
    colRef,
    where("email", "==", currentuser),
    orderBy("createdAt")
  );

  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setloading1(true);
        setResults(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setloading1(false);
      }),
    [results, q]
  );

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    return signOut(auth)
      .then(() => {
        console.log("user is out");
      })
      .catch((err) => console.log(err.message));
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const reduceFunction = (group) => {
    const percent = group.reduce((acc, real) => {
      const { productNo, price } = real;
      const productNum = parseInt(productNo);
      const productPrice = parseInt(price);
      const realTotal = productNum * productPrice;
      return acc + realTotal;
    }, 0);
    return percent;
  };

  return (
    <AppProvider.Provider
      value={{
        form,
        setForm,
        results,
        setResults,
        signIn,
        setSignIn,
        sidebar,
        setSidebar,
        signup,
        currentuser,
        login,
        signout,
        reduceFunction,
        loading,
        resetPassword,
        loading1,
        addDoc,
        colRef,
        serverTimestamp,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;
