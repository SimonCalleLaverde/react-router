import '../App.scss';
import { useState, useEffect } from "react";

const ArticlePage = ({ match }) => {//When we use <Link> we get access to {match} prop
  // Use Effect
  useEffect(() => {
    fetchItem();

    console.log(match)
    // eslint-disable-next-line
  },[]);

  // Use State
  const [itemObj, setItemObj] = useState({
    images: {}
  });

  // Fetch Call (Get: Specific Item Data)
  const fetchItem = async () => {
    // https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
    const internalItemApi = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

    // Converting To JSON
    const itemToJson = await internalItemApi.json();

    // Set "itemObj" State
    setItemObj(itemToJson.data.item);
    console.log(itemToJson.data.item);
  };

  return (
    <section className="article-page clearfix">
      {/* Iterating Through State (Object) Of "itemObj" */}
      <h1>
        {itemObj.name}
      </h1>

      <img src={ itemObj.images.information } alt=""/>
    </section>
  );
};

export default ArticlePage;