import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function LogDetails() {
  const [log, setLog] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5555/logs/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setLog(responseJSON))
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);
  console.log(log)

  const handleDelete = () => {
    fetch(`http://localhost:5555/logs/${id}`, { method: "DELETE" })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((error) => console.error(error));
  };

return (
    <article>
        <div>
            <h1>{log.title} - By {log.captainName}</h1>
            <h4>{log.post}</h4>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        </div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
