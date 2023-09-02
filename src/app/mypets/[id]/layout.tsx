import React from "react";

export default function myPetsIdLayout ({
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