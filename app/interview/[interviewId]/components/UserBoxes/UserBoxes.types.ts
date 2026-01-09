import { Speaker, StatusCall } from "../../page.types";

export type UserBoxesProps = {
    toggleMicrophone: () => void;
    isMuted: boolean;
    startCall: () => void;
    endCall: () => void;
    callStatus: StatusCall
    speaking: Speaker;
}