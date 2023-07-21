import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

export default function NewsletterSignup() {
  // fetcher should be used when you want to trigger an action or loader without
  // loading or navigation to that page to which the action belongs to
  // useful when we have shared components that require same actions
  // with fetcher we dont navigate to a different route
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("Signup successful");
    }
  }, [data, state]);

  return (
    <fetcher.Form
      action="/newsletter"
      method="post"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}
