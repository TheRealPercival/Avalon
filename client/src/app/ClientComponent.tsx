"use client";

import { Environment } from "@avalon/shared";

const ClientComponent = () => {
  return <div>{Environment.getPort()}</div>;
};

export default ClientComponent;
