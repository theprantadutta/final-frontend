import React, { useState } from "react";
import { trigger } from "swr";
import { mutateCallback } from "swr/dist/types";
import { laravelApi } from "../../utils/api";
import { isProduction } from "../../utils/constants";
import { notify } from "../../utils/toasts";
import FullWidthReactLoader from "../shared/FullWidthReactLoader";

interface SaveCancelButtonProps {
  setField: React.Dispatch<React.SetStateAction<boolean>>;
  submitUrl: string;
  postData: {};
  toastMsg: string;
  mutate: (
    data?: Promise<any> | mutateCallback | any,
    shouldRevalidate?: boolean
  ) => Promise<any | undefined>;
}

const SaveCancelButton: React.FC<SaveCancelButtonProps> = ({
  setField,
  submitUrl,
  postData,
  toastMsg,
  mutate,
}) => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  return isSubmitting ? (
    <FullWidthReactLoader />
  ) : (
    <div className="flex justify-end my-4">
      <button
        onClick={() => setField(false)}
        className="px-4 mx-2 bg-red-700 text-white w-1/5 py-2 rounded-lg font-semibold focus:ring-1 focus:outline-none focus:ring-primary"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={async () => {
          setSubmitting(true);
          try {
            const { data: asData } = await laravelApi().post(
              submitUrl,
              postData
            );
            if (!isProduction) console.log("data: ", asData);
            await mutate();
            notify(toastMsg, {
              type: "success",
            });
            setField(false);
          } catch (e) {
            console.log(e.response);
            notify("Something's Wrong, Please Try Again", {
              type: "warning",
            });
          }
          setSubmitting(false);
          await trigger("/user");
          // await mutate("/user/contact-verified");
        }}
        className="px-4 ml-2 bg-primary text-white w-1/5 py-2 rounded-lg font-semibold focus:ring-1 focus:outline-none focus:ring-primaryAccent"
      >
        Save
      </button>
    </div>
  );
};

export default SaveCancelButton;
