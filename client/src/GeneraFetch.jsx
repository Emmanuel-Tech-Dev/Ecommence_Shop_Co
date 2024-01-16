import { useState, useEffect, useContext } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { database } from './firebase/config';
import { UserContext } from './UserContext';

//A function to fetch data from firestore by passing in the table name
const useFetchAllData = (tableName) => {
  const [data, setData] = useState([]);
  const { setIsLoading } = useContext(UserContext);

  useEffect(() => {
    const collectionRef = collection(database, tableName);

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const querySnapshot = await getDocs(collectionRef);
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribe = onSnapshot(collectionRef, fetchData);

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [tableName, setData, setIsLoading]);

  return data;
};


export default useFetchAllData;


