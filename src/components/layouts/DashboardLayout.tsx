import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {authenticatedUserData} from "../../states/userStates";
import {ModifiedUserData} from "../../utils/randomTypes";
import MainContentNav from ".././dashboard/DashboardNav";
import Sidebar from ".././dashboard/Sidebar";
import {useSessionStorage} from "../../hooks/useSessionStorage";

interface DashboardLayoutProps {
    data: ModifiedUserData;
}

const DashboardLayout: React.FC<DashboardLayoutProps> =
    ({
         data,
         children,
     }) => {
        const router = useRouter();
        const [, setUserData] = useRecoilState(authenticatedUserData);

        const [mounted, setMounted] = useState(false);
        useEffect(() => {
            setUserData(data);
            setMounted(true)
        }, []);

        const [verifyWarning, setVerifyWarning] = useSessionStorage(
            'verify-warning',
            data.verified === 'unverified' ? 'unverified' : 'verified'
        );

        return (
            <div className="grid grid-cols-5 h-screen">
                <Sidebar role={data?.role}/>
                <div className="col-span-4 bg-gray-300">
                    <MainContentNav/>
                    {mounted && verifyWarning === 'unverified' && (
                        <div className="flex justify-center items-center mt-5 text-center">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg bg-primary flex items-center focus:outline-none focus:ring-0"
                            >
                                <span
                                    className="text-white font-semibold"
                                    onClick={() => router.push("/verify")}
                                >
                                    Please Verify Your Account Now{" "}
                                </span>
                                <span
                                    className="text-red px-4"
                                    onClick={() => setVerifyWarning("verified")}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    )}
                    <div className="grid grid-cols-3 gap-8 mx-16">
                        <div className="col-start-1 col-span-4">
                            <div className="text-gray-900 p-5">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default DashboardLayout;
