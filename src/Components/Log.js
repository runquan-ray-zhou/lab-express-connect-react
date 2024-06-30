import { Link } from "react-router-dom";

export default function Log({ log, id }) {
  return (
    <tr>
    <Link to={`/logs/${id}`}>
      <td>
        <p>{id}</p>
      </td>
      <td>
         {log.captainName}
      </td>
      <td>
        <p>{log.title}</p>
      </td>
      </Link>
    </tr>
  );
}
