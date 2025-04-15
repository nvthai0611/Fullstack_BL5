import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await fetch("http://localhost:9999/api"); // return 1 promise
        const datares = await resData.json();
        setData(datares);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  // optional training
  return <>Hello backend {data?.message}</>;
}

export default App;
