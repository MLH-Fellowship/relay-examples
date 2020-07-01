import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";
import { createFetch } from 'relay-local-schema';

import schema from './data/schema'

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(createFetch({ schema })),
  store: new Store(new RecordSource()),
});
