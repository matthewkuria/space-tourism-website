import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}