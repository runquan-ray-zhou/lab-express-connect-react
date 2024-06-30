import { useState, useEffect } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_BASE_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/logs`)
      .then((response) => response.json())
      .then((responseJSON) => setLogs(responseJSON))
      .catch((error) => console.error(error));
  }, []);

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