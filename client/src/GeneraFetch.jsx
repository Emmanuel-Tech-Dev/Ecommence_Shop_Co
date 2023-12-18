import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from './firebase/config';


//A function to fetch data from firestore by passing in the table name 
const useFetchAllData = (tableName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, tableName);

    const fetchData = async () => {
      const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({ id: doc.id, ...doc.data() });
        });
        setData(newData);
      });
      return () => unsubscribe();
    };

    fetchData();
  }, [tableName, setData]);

  return data;
};

export default useFetchAllData;
