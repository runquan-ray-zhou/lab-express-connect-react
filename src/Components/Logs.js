import { useState, useEffect } from "react";
import Log from "./Log";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5555/logs`)
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
              <th>Mistakes</th>
              <th>Captain Name</th>
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