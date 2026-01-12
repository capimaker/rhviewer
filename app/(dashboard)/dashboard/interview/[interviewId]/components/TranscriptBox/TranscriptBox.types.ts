export type TranscriptMessage = {
    role: "user" | "system" | "assistant";
    content: string;
}
export type TranscriptBoxProps ={
    transcript: TranscriptMessage[];
}