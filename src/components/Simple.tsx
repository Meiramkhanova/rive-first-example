import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function Simple() {
  const STATE_MACHINE = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "theeaglenarxoz (15).riv",
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const wave = useStateMachineInput(rive, STATE_MACHINE, "isWave");
  const stopWave = useStateMachineInput(rive, STATE_MACHINE, "stopWave");

  const isRead = useStateMachineInput(rive, STATE_MACHINE, "isRead");
  const stopRead = useStateMachineInput(rive, STATE_MACHINE, "stopRead");

  const isThinking = useStateMachineInput(rive, STATE_MACHINE, "isThinking");
  const stopThinking = useStateMachineInput(
    rive,
    STATE_MACHINE,
    "stopThinking"
  );

  const [message, setMessage] = useState("");

  const handleUserTyping = (e: React.FormEvent<HTMLInputElement>) => {
    if (!isRead || !stopRead) return;

    const value = e.currentTarget.value;
    setMessage(value);

    if (value.trim().length > 0) {
      isRead.fire();
    } else {
      stopRead.fire();
    }
  };

  const handleSend = async () => {
    if (!isThinking || !stopThinking) return;

    stopRead?.fire();

    isThinking.fire();

    setMessage("");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    stopThinking.fire();
  };

  useEffect(() => {
    if (!rive || !wave || !stopWave) return;

    wave.fire();

    const timer = setTimeout(() => {
      stopWave.fire();
    }, 7000);

    return () => clearTimeout(timer);
  }, [rive, wave, stopWave]);

  return (
    <div className="relative size-fit bg-transparent">
      <div className="size-80 bg-transparent">
        <RiveComponent />
      </div>

      <input
        type="text"
        value={message}
        onInput={handleUserTyping}
        className="border p-2 mt-4"
        placeholder="Начни печатать..."
      />

      <button
        onClick={handleSend}
        className={`mt-2 ml-4 px-4 py-2 rounded 
    ${
      message.trim().length === 0
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-200 cursor-pointer"
    }`}>
        Отправить (симуляция ИИ)
      </button>
    </div>
  );
}
