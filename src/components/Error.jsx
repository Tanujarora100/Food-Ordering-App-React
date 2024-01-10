import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  // Access information about the unmatched route from the state
//   const { status, message } = navigate().state || {};
console.log(error);

  return (
    <div>
      <>
        <h1>OOPS!!!</h1>
        <h2>Something went wrong!!</h2>
        {/* {status && message && (
          <p>
            Route not found. Status: {status}, Message: {message}
          </p>
        )} */}
      </>
    </div>
  );
};

export default Error;
