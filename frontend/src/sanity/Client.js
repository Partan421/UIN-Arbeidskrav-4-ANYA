import {createClient} from "@sanity/client"

const client = createClient({
    projectId: "9aknmk6z",
    dataset: "production",
    apiVersion: "2025-04-19",
    useCdn: true,
});

export default client