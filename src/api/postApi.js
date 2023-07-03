import { postEndpoint } from "../endpoints/endpoints";

export async function fetchAllPosts() {
    const res = await fetch(postEndpoint.fetchAll);
    return res.json();
  }