import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import HandWave from "./HandWave";

export default function Simple() {
  const STATE_MACHINE = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "eaglenarxoz (5).riv",
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const isWaveInput = useStateMachineInput(rive, STATE_MACHINE, "isWave");

  const toggleWave = () => {
    if (isWaveInput) {
      isWaveInput.value = !isWaveInput.value;
    } else {
      console.warn("⚠️ isWaveInput пока недоступен");
    }
  };

  return (
    <div className="size-fit relative">
      <div className="size-80">
        <RiveComponent />
      </div>

      <button
        onClick={toggleWave}
        className="flex absolute right-0 top-12 outline-none animate-float cursor-pointer size-11 items-center justify-center rounded-full bg-slate-50/50 shadow-md transition-all duration-200 ease-in-out hover:bg-slate-100 hover:shadow-lg active:scale-95  ">
        <HandWave className="size-4.5 fill-slate-500" />
      </button>
    </div>
  );
}
