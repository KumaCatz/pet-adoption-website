import React from "react";

export default function SearchLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>

      <nav></nav>

      {children}
    </section>
  )
}