import {
  Await,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { json } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { defer } from "react-router-dom";
import { Suspense } from "react";

export default function EventDetailPage() {
  // when we had single loadEvent call.
  const params = useParams();
  //const data = useRouteLoaderData("event-detail");
  //return <EventItem event={data.event} />;

  // showing how using defer can be good when multiple things must load
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense
        fallback={() => <p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={() => (
          <p style={{ textAlign: "center" }}>Loading events...</p>
        )}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function eventDetailLoader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id), // @NOTE adding await will force react router and defer to not navigate until event details are ready
    events: loadEvents(),
  });
}

export async function eventDetailDeleteAction({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}

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

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
