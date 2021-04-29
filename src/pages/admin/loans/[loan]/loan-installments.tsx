import withAdminAuth from "../../../../utils/withAdminAuth";
import {ModifiedUserData} from "../../../../utils/randomTypes";
import React, {useEffect, useState} from "react";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import DashboardTitle from "../../../../components/shared/DashboardTitle";
import useSWR from "swr";
import ReadyMadeTable from "../../../../components/ReactTable/ReadyMadeTable";
import FullWidthReactLoader from "../../../../components/shared/FullWidthReactLoader";
import {AdminInstallmentTableHeader} from "../../installments";
import FetchError from "../../../../components/shared/FetchError";

interface LoanInstallmentsProps {
    user: ModifiedUserData
    loanId: string;
}

const LoanInstallments: React.FC<LoanInstallmentsProps> =
    ({user, loanId}) => {
        const [mounted, setMounted] = useState(false);
        useEffect(() => setMounted(true), []);
        const {data, mutate, error} = useSWR(mounted ? `/admin/user/loan-installments/${loanId}` : null)
        if (error) {
            return <FetchError user={user}/>
        }
        return (
            <DashboardLayout data={user} title={`Loan Installments`}>
                <DashboardTitle title={`User LoanInstallments`} backButton />
                {data ? (
                    <ReadyMadeTable
                        title={`All Installments By Loan ${data.id}`}
                        data={data.installments}
                        pagination
                        isValidating={!data}
                        header={AdminInstallmentTableHeader}
                        emptyMessage="No LoanInstallments Found"
                        mutateData={() => mutate()}
                    />
                ) : (
                    <FullWidthReactLoader/>
                )}
            </DashboardLayout>
        )
    }

export default LoanInstallments;

export const getServerSideProps = withAdminAuth(async (context) => {
    const {user, query} = context;

    const loanId: any = query.loan;

    return {
        props: {user, loanId},
    };
});