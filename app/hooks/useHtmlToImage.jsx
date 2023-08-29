import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import escapeHtml from "escape-html";

export async function loader({ request }: LoaderArgs) {
  const apiUrl = "https://hcti.io/v1/image";

  const json = {
    html: "<div class='test'>Hello, world!</div>",
    css: ".test { background-color: green; }"
  };

  const username = "8cbaa641-7825-4ba5-b109-8d649d4bfa10";
  const password = "ca03849c-eb30-415b-b54d-aa22bc33deae";

  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    }
  }


  const res = await fetch(apiUrl, options);

  const data = await res.json();

  console.log(data);
  const prunedData = data.map((record) => {
    console.log(data);
    return record;
    // return {
    //   id: record.id,
    //   title: record.title,
    //   formattedBody: escapeHtml(record.content),
    // };
  });
  return json(prunedData);
}
