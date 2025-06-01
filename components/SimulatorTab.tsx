import React from "react";
import { VimSimulator } from "./VimSimulator";

export const SimulatorTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Interactive Simulator */}
      <VimSimulator />
    </div>
  );
};
