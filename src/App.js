import React, { Suspense } from "react";
import "./App.css";
import {
  RelayEnvironmentProvider,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

import GetTodos from './queries/getTodos'

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading"}>
        <GetTodos />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
