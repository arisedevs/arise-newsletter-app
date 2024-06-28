import { createContext, Dispatch, SetStateAction, useContext } from "react";

type SubmissionContextType = {
    submissionStatus: "success" | "fail" | null;
    setSubmissionStatus: Dispatch<SetStateAction<"success" | "fail" | null>>
}

export const SubmissionStatusContext = createContext<SubmissionContextType | undefined>(undefined);

export const useSubmissionStatusContext = () => {
    const submissionStatus = useContext(SubmissionStatusContext);

    if (submissionStatus === undefined) {
        throw new Error('useSubmissionStatusContext must be used with a SubmissionContextProvider');
      }
    
    return submissionStatus;
}