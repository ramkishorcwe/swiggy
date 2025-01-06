// import { useRouteError, Link } from "react-router-dom";

// function Error() {
//   const error = useRouteError();
//   console.log(error);
//   return (
//     <>
//       <h1>{error?.status}</h1>
//       <div>Ooops!</div>
//       <Link to="/">Go to Home</Link>
//     </>
//   );
// }

// export default Error;

import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
  data: string;
  status: number;
}

export default function Error() {
  const error = useRouteError() as RouteError;
  // console.error(error);

  return (
    <div id="error-page">
      <h1>
        {error.status} : {error.statusText}
      </h1>
      <h4>
        {error?.data ? error?.data : "Sorry, an unexpected error has occurred."}
      </h4>
    </div>
  );
}
