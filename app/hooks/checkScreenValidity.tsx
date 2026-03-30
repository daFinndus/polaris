import React from "react";

import { useWindowSize } from "@/app/hooks/useWindowSize";

/**
 * This component checks whether the current screen size is supported.
 * @param Supported The component to render if the screen size is supported.
 * @param Unsupported The component to render if the screen size is not supported.
 */
export const checkScreenValidity = ({
  Supported,
  Unsupported,
}: {
  Supported: React.ComponentType;
  Unsupported: React.ComponentType;
}) => {
  const size = useWindowSize();

  if (size.width! >= 328 && size.height! >= 256) return <Supported />;
  if (size.width! > 0) return <Unsupported />;

  return null;
};
