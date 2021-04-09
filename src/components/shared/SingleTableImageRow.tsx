import React from "react";
import Image from "next/image";
import {downloadImage} from "../../utils/functions";
import {BASE_URL} from "../../utils/constants";

interface SingleTableRowProps {
    tdClass?: string;
    d0: string;
    d1: string;
    i: number;
}

const SingleTableRow: React.FC<SingleTableRowProps> =
    ({
         d0,
         d1,
         i,
         tdClass = "font-semibold border px-8 py-3 capitalize",
     }) => {
        return (
            <tr className={`${i % 2 !== 0 && "bg-gray-300"}`}>
                <td className={tdClass}>{d0}</td>
                <td className={tdClass}>
                    <Image
                        height="100"
                        width="100"
                        alt={d0}
                        src={`/uploads/verificationPapers/${d1}`}
                    />
                </td>
                <td
                    className={`font-semibold border px-8 py-3 text-primary cursor-pointer`}
                    onClick={() =>
                        downloadImage(
                            BASE_URL + `/uploads/verificationPapers/${d1}`, d1
                        )
                    }>
                    Download
                </td>
            </tr>
        );
    };

export default SingleTableRow;