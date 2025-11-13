import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function VersionFour() {
  const STATE_MACHINE = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "theeaglenarxoz (13).riv",
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const startWave = useStateMachineInput(rive, STATE_MACHINE, "isThinking");

  useEffect(() => {
    if (startWave) {
      startWave.fire();
    }
  }, [startWave]);

  return (
    <div className="relative size-fit bg-transparent">
      <div className="size-80 bg-transparent">
        <RiveComponent />
      </div>
    </div>
  );
}
