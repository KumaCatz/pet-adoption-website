import React from "react";

export default function MyPetsLayout ({
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