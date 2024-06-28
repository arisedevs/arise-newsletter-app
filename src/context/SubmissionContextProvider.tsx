import { ReactNode, useState } from 'react';
import { SubmissionStatusContext } from './SubmissionStatusContext';

type SubmissionContextProviderProps = {
    children: ReactNode;
}

function SubmissionContextProvider({children}: SubmissionContextProviderProps) {

    const [submissionStatus, setSubmissionStatus] = useState<"success" | "fail" | null>(null);

    return (
        <SubmissionStatusContext.Provider value={{submissionStatus, setSubmissionStatus}}>
            {children}
        </SubmissionStatusContext.Provider>
    )
}

export default SubmissionContextProvider
