import { useUser } from "@clerk/nextjs";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function useLoadRecordings(call: Call) {
  const { user } = useUser();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const [recordingsLoaded, setRecordingsLoaded] = useState(true);

  useEffect(() => {
    async function loadRecordings() {
      setRecordingsLoaded(true);
      if (!user?.id) return;
      const { recordings } = await call.queryRecordings();
      setRecordings(recordings || []);
      setRecordingsLoaded(false);
    }

    loadRecordings();
  }, [call, user?.id]);

  return { recordings, recordingsLoaded };
}
