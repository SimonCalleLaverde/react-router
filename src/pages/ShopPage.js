import '../App.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  // Use Effect
  useEffect(() => {
    fetchItems();
  },[]);

  // Use State
  const [itemsArr, setItemsArr] = useState([]);

  // Fetch Call ("async" As It Is Coming From A Database (Fortnite's For Now, Lol))
  const fetchItems = async () => {
    // Older: https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get
    // https://docs.fortniteapi.com/
    const dataApi = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");

    // Converting To JSON
    const dataToJson = await dataApi.json();

    // Set "itemsArr" State
    setItemsArr(dataToJson.data)//Saving An Array Of Objects, Of The 'data' (The 'items' Before)
    console.log(dataToJson.data);
  };

  return (
    <section className="clearfix">
      <h1>Shop Page</h1>

      {/* Looping Through The State (Array) Of "itemsArr" */}
      {/*<img src={ item.item.images.background } alt=""/>*/}
      {itemsArr.map(item => (
        <article key={ item.itemId }>
          <Link to={`/shop/${item.itemId}`}>
            <h3>
              { item.item.name }
            </h3>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default ShopPage;