import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function LogEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleNumberChange = (event) => {
    setLog({ ...log, [event.target.id]: Number(event.target.value) })
  }

  const updateLog = () => {
    fetch(`http://localhost:5555/logs/${id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/logs/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`http://localhost:5555/logs/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setLog(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  console.log(log)

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:
        <br />
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          required
        />
        </label>
        <br />
        <label htmlFor="title">Title
        <br />
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          required
        />
        </label>
        <br />
        <label htmlFor="post">Post
        <br />
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
          required
          >
        </textarea>
        </label>
        <br />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis
        <br />
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleNumberChange}
          placeholder="0"
          required
        />
        </label>
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:
        <br />
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`http://localhost:5555/logs${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
