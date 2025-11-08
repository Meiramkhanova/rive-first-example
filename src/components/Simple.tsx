import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function Simple() {
  const STATE_MACHINE = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "interactive_bunny_character (12).riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const isWaveInput = useStateMachineInput(rive, STATE_MACHINE, "isWave");

  useEffect(() => {
    if (rive && isWaveInput) {
      console.log("✅ Rive и isWave готовы");
    }
  }, [rive, isWaveInput]);

  const toggleWave = () => {
    if (isWaveInput) {
      isWaveInput.value = !isWaveInput.value;
    } else {
      console.warn("⚠️ isWaveInput пока недоступен");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "550px", height: "550px" }}>
        <RiveComponent />
      </div>

      <button
        onClick={toggleWave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}>
        Toggle Wave
      </button>
    </div>
  );
}
