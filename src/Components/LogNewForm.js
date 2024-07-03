import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LogNewForm.css"

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

  const handleNumberChange = (event) => {
    setLog({ ...log, [event.target.id]: Number(event.target.value) })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <div className="newLog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName" >
        <div className="newLog__label">
          Captain's Name:
        </div>  
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
        <label htmlFor="title">
        <div className="newLog__label">
          Title
        </div> 
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
        <label htmlFor="post">
        <div className="newLog__label">
          Post
        </div> 
        <br />
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
          required
          rows="10" 
          cols="50"
          >
        </textarea>
        </label>
        <br />
        <label htmlFor="daysSinceLastCrisis">
        <div className="newLog__label">
          Days Since Last Crisis
        </div>  
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
        <label htmlFor="mistakesWereMadeToday">
        <div className="newLog__label">
          Mistakes were made today:
        </div> 
        <br />
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        </label>
        <br />
        <button type="submit" className="newLog__button">Submit</button>
      </form>
      <br />
      <Link to={`/logs`}>
        <button className="newLog__button">Nevermind!</button>
      </Link>
    </div>
  );
}
