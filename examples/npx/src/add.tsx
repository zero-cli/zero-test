import React from "react";

interface Props {
  a: number;
  b: number;
}

export function Add({ a, b }: Props) {
  return <span>{a + b}</span>;
}
