import { productsEndpoint } from "../endpoints/endpoints";


export async function fetchAllProducts() {
    const res = await fetch(productsEndpoint.fetchAll)
    return res.json();
}