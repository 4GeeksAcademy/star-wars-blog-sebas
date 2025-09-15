import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { AppConfig } from "../config/config.js";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import { fetchWithCache } from "../services/SwapiTech.jsx";
import { SingleCard } from "../components/SingleCard.jsx";
import { useState, useEffect } from "react";
import { MyLoader } from "../components/MyLoader.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const downloadData = async () => {
      for (const endpoint of AppConfig.api.endpoints) {
        for (const id of AppConfig.values.items) {
          const res = await fetchWithCache(endpoint, id);
          if (res) {
            dispatch({ type: "add_data", endpoint, payload: res });
            console.log("descargado y despachado", res);
          }
        }
      }
      setLoading(false);
    };

    if (loading !== false) {
      downloadData();
    }
  }, []);

  if (loading !== false) {
    return <MyLoader />;
  }

  return (
    <div className="bg-dark">
      {AppConfig.api.endpoints.map((endpoint) => (
        <ScrollContainer key={endpoint} title={endpoint.toUpperCase()}>
          {store[endpoint].map((item, i) => {
            const fields = AppConfig.fieldsToShowInCard[endpoint];
            const images = AppConfig.images[endpoint];
            return (
              <SingleCard
                key={`${endpoint}_${i}`}
                name={item.properties.name}
                item1={`${fields[0].label}: ${item.properties[fields[0].key]}`}
                item2={`${fields[1].label}: ${item.properties[fields[1].key]}`}
                item3={`${fields[2].label}: ${item.properties[fields[2].key]}`}
                imglink={`${images[i]}`}
                uid={item.uid}
                endpoint={endpoint}
                linkTo={`/${endpoint}/${item.uid}`}
              />
            );
          })}
        </ScrollContainer>
      ))}
    </div>
  );
};
