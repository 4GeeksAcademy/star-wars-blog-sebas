import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/detail.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { AppConfig } from "../config/config.js";
import { fetchWithCache } from "../services/SwapiTech.jsx";

export const Detail = () => {
  const { endpoint, uid } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const images = AppConfig.images[endpoint];
  const fields = AppConfig.fieldsToShowInDetails[endpoint];

  useEffect(() => {
    const fetchData = async () => {
      let found = store[endpoint]?.find((el) => el.uid === uid);
      if (found) {
        setItem(found);
        setLoading(false);
      } else {
        const res = await fetchWithCache(endpoint, uid);
        if (res) {
          dispatch({ type: "add_data", endpoint, payload: res });
          setItem(res);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint,uid]);

  if (loading) {
    return <div className="text-light p-5">Loading...</div>;
  }

  return (
    <div className="w-75 container bg-dark p-5 ">
      <div className="row">
        <div className="col-6">
          <img src={`${images[uid - 1]}`} className="card-img-top"></img>
        </div>
        <div className="col-6 border-start border-custom">
          <h3 className="text-light">{item.properties.name}</h3>
          <p className="text-light">{item.description}</p>
        </div>
      </div>
      <div className="row pt-2 mt-4 border-top border-custom">
        {fields.slice(0, 7).map((field) => (
          <div className="col border-start border-custom" key={field.key}>
            <h5 className="text-light">{field.label}</h5>
            <p className="text-light">{item.properties[field.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
