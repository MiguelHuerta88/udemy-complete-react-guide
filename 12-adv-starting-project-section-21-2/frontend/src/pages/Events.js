import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  /*if (data.isError) {
    return <p>{data.message}</p>;
  }*/
  // before when we wrent using defer.
  //return <EventsList events={data.events} />;
  // when we use defer we have to use Await component
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  // we can use any Client, browser APIs side code here. But we cant use react hooks i.e useState()
  // ie. localStorage, cookies
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // one way to handle errors
    //return { isError: true, message: "Could not fetch events" };
    // building responses like this can be cumbersome so react-router-dom has a utility function json
    /*throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });*/
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    // we can return it since browser supports Response() object responses.
    // then in page were we call it we extract the data
    // return response; // also this no longer works when using defer. We have to parse the data
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  // we moved the call that was blocking page loading into loadEvents() and we
  // used defer
  return defer({
    events: loadEvents(),
  });
}
