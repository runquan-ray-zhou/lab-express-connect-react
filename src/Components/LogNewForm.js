import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LogNewForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const addLog = () => {
    fetch("http://localhost:5555/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  console.log(log)

  return (
    <div className="New">
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
          onChange={handleTextChange}
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
      <Link to={`/logs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
