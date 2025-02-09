import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function submit(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const requestJson = await request.json();

  return {
    status: 201,
    jsonBody: { fromRequest2: requestJson },
  };
}

app.http("submit", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: submit,
});
