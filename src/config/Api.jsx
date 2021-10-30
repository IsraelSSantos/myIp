import React from "react";

export default function getApiToken() {
  const apiToken = process.env.MAPBOX_ACCESS_TOKEN;
  return apiToken;
}
