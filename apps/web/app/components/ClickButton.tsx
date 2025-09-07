"use client";

import { Button } from "@repo/ui/button";

export function ClickButton() {
  return (
    <Button onClick={() => alert("Button clicked!")}>
      Click me
    </Button>
  );
}
