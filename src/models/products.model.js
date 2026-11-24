import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

export const getAllProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data()
  }));
};

export const getProductByIdModel = async (id) => {
  const productDoc = doc(db, 'productos', id);
  const snapshot = await getDoc(productDoc);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

export const createProductModel = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  return {
    id: docRef.id,
    ...productData
  };
};

export const deleteProductModel = async (id) => {
  const productDoc = doc(db, 'productos', id);
  const snapshot = await getDoc(productDoc);

  if (!snapshot.exists()) {
    return false;
  }

  await deleteDoc(productDoc);
  return true;
};