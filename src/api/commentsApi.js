import { commentsEndpoint } from "../endpoints/endpoints";


export async function fetchAllComments() {
    const res = await fetch(commentsEndpoint.fetchAll);
    return res.json();
  }; 
  