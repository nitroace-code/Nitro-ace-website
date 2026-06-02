import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ceaf7d12/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit team application
app.post("/make-server-ceaf7d12/team-application", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, major, year, message, documents, cars } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields: name, email, and message are required" }, 400);
    }

    // Create a unique ID for this application using timestamp + random string
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 9);
    const applicationId = `team-application-${timestamp}-${randomId}`;

    // Store application data
    const applicationData = {
      id: applicationId,
      name,
      email,
      major: major || "",
      year: year || "",
      message,
      documents: documents || "",
      cars: cars || "",
      submittedAt: new Date().toISOString(),
    };

    await kv.set(applicationId, applicationData);

    console.log(`Team application submitted: ${applicationId} by ${name} (${email})`);

    return c.json({
      success: true,
      message: "Application submitted successfully",
      applicationId
    });
  } catch (error) {
    console.error(`Error submitting team application: ${error}`);
    return c.json({ error: `Failed to submit application: ${error.message}` }, 500);
  }
});

// Get all team applications
app.get("/make-server-ceaf7d12/team-applications", async (c) => {
  try {
    const applications = await kv.getByPrefix("team-application-");
    
    // Sort by submission date (newest first)
    applications.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

    return c.json({ 
      success: true, 
      applications,
      count: applications.length 
    });
  } catch (error) {
    console.error(`Error fetching team applications: ${error}`);
    return c.json({ error: `Failed to fetch applications: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);