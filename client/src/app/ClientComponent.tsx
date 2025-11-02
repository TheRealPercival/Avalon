"use client";

import { Environment } from "@avalon/shared";

const ClientComponent = () => {
  return <div>{Environment.current.port}</div>;
};

export default ClientComponent;
