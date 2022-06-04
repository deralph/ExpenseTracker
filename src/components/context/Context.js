import React, {
  useContext,
  useCallback,
  useReducer,
  useEffect,
  useState,
} from "react";

// import reducer, { initialState } from "./Reducer";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  onSnapshot,
  getDocs,
  collection,
  getFirestore,
  addDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { firebaseConfig } from "../../firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBRLQ784OnYn9McWngXzWfxmXJjiWKHffA",
//   authDomain: "raphaeltrial-1b594.firebaseapp.com",
//   projectId: "raphaeltrial-1b594",
//   storageBucket: "raphaeltrial-1b594.appspot.com",
//   messagingSenderId: "610219183058",
//   appId: "1:610219183058:web:fd6641a166092ececdd60b",
//   measurementId: "G-QQRNF885T2",
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const colRef = collection(db, "expenses");

const AppProvider = React.createContext();

const Context = ({ children }) => {
  const [currentuser, setcurrentuser] = useState("");

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setcurrentuser(user.email);
      }),
    [setcurrentuser]
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
  const [loading, setloading] = useState(true);
  const q = query(colRef, where("email", "==", currentuser));

  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setResults(
          snapshot.docs.map((doc) => {
            return doc.data();
          })
        );
        setloading(false);
      }),
    [setResults, setloading]
  );

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setcurrentuser(cred);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signout = () => {
    return signOut(auth)
      .then(() => {
        console.log("user is out");
      })
      .catch((err) => console.log(err.message));
  };

  console.log(currentuser);
  console.log(results);

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
        addDoc,
        colRef,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;
