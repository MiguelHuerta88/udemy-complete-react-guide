import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  // depending on how the error was thrown it will contain diff fields.
  // if we threw Response we will have status field
  // if we threw and Error the error will be the object without status
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  // checking for status
  if (error.status === 500) {
    // if we use json utility we dont have to parse JSON anymore
    //message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
