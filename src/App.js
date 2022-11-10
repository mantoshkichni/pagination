import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import { User } from "./User";
import ReactPaginate from "react-paginate";

export default function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const itemCount = 10;
  let startOffSet = count * itemCount + 0;
  let endOffSet = count * itemCount + 9;

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    startOffSet = count * itemCount + 0;
    endOffSet = count * itemCount + 9;
  }, [count]);
  const getData = async () => {
    const userData = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setData(userData?.data);
    console.log(data);
  };
  return (
    <>
      <div className="App">
        {data?.slice(startOffSet, endOffSet).map((item) => {
          return (
            <>
              <User item={item} />
            </>
          );
        })}
      </div>
      <div className="list">
        <ul>
          {}

          <li onClick={() => setCount(0)} style={{ cursor: "pointer" }}>
            1
          </li>
          <li onClick={() => setCount(1)} style={{ cursor: "pointer" }}>
            2
          </li>
          <li onClick={() => setCount(2)} style={{ cursor: "pointer" }}>
            3
          </li>
          <li onClick={() => setCount(3)} style={{ cursor: "pointer" }}>
            4
          </li>
          <li onClick={() => setCount(4)} style={{ cursor: "pointer" }}>
            5
          </li>
          <li onClick={() => setCount(5)} style={{ cursor: "pointer" }}>
            6
          </li>
          <li onClick={() => setCount(6)} style={{ cursor: "pointer" }}>
            7
          </li>
          <li onClick={() => setCount(7)} style={{ cursor: "pointer" }}>
            8
          </li>
          <li onClick={() => setCount(8)} style={{ cursor: "pointer" }}>
            9
          </li>
          <li onClick={() => setCount(9)} style={{ cursor: "pointer" }}>
            10
          </li>
        </ul>
      </div>
    </>
  );
}
