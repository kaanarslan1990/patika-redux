import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  return (
    <div>
    {loading && <Loading />}
    {char && (
        <div className="characterContainer">
          <img src={char.img} alt={char.name} />
          <div className="characterInfo">
            <h3>Name:</h3>
            <p>{char.name}</p>
            <h3>Nickname:</h3>
            <p>{char.nickname}</p>
            <h3>Occupation:</h3>
            <ul className="characterOccupation">
              {char.occupation.map((job, index) => (
                <li key={'job' + index}>{job}</li>
              ))}
            </ul>
            <h3>Portrayed by:</h3>
            <p>{char.portrayed}</p>
            <h3>Status:</h3>
            <p>{char.status}</p>
          </div>
        </div>
      )}
      <hr />
      {!loading && <button onClick={() => navigate(-1)}>Go back</button>}
      
    </div>
  );
};
export default Detail;
