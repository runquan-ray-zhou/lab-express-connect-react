import { useState, useEffect } from "react";
import Log from "./Log";

// const URL = process.env.REACT_APP_API_BASE_URL; This does not work because the logs are not a json file

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/logs")
    .then((response) => response.json())
    .then((responseJSON) => setLogs(responseJSON))
    .catch((error) => console.error(error));
  }, []);

  console.log(logs)
  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => {
              return <Log key={log.id} log={log} id={log.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}