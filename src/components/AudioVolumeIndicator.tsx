import {
  Icon,
  createSoundDetector,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

function AudioVolumeIndicator() {
  const { useMicrophoneState } = useCallStateHooks();
  const { isEnabled, mediaStream } = useMicrophoneState();
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    if (!isEnabled || !mediaStream) return;
    const disposeSoundDetector = createSoundDetector(
      mediaStream,
      ({ audioLevel: al }) => setAudioLevel(al),
      { destroyStreamOnStop: false, detectionFrequencyInMs: 80 },
    );
  }, [isEnabled, mediaStream]);
  if (!isEnabled) return null;
  return (
    <div className="flex w-72 items-center gap-3 rounded-md bg-slate-900 p-4">
      <Icon icon="mic" />
      <div className="h-1.5 flex-1 rounded-md bg-white">
        <div
          className="h-full w-full origin-left bg-blue-500"
          style={{ transform: `scaleX(${audioLevel / 100})` }}
        />
      </div>
    </div>
  );
}

export default AudioVolumeIndicator;
