import { Link } from "react-router-dom";

export default function Log({ log, id }) {
  return (
    <tr>
      <td>
        <Link to={`/logs/${id}`}> {log.title}</Link>
      </td>
    </tr>
  );
}
