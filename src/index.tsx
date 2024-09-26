import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <script
          src="https://unpkg.com/htmx.org@2.0.2"
          integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};

app.get("/", async (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

export default {
  port: 3001,
  fetch: app.fetch,
};
