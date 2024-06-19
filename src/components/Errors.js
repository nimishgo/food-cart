import { useRouteError } from "react-router-dom";

export default function Errors() {
  const err = useRouteError();
  return (
    <div>
      Errors
      <h1>{err.status}</h1>
    </div>
  );
}
