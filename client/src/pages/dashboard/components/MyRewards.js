import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

const MyRewards = React.memo(() => {
  const student = useSelector((state) => state.student);

  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    API.fetchRewards(student._id)
      .then((res) => setRewards(res.data.rewards))
      .catch((err) => console.log(err));
  }, []);

  return rewards.length ? (
    <div className="py-4 px-2 d-flex flex-row">
      <h4>Mis logros:</h4>
      {rewards.map((r) => (
        <Image
          key={r.name}
          src={r.link}
          width="50"
          height="50"
          className="mx-2"
          title={r.name}
        />
      ))}
    </div>
  ) : null;
});

export default MyRewards;
