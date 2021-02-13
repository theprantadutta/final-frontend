import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import * as yup from "yup";
import { object } from "yup";
import { authenticatedUserData } from "../../states/userStates";
import {
  verificationFormValues,
  verificationStep,
} from "../../states/verificationStates";
import { ContactVerificationFormValues } from "../../utils/randomTypes";
import InputTextField from "../ReactHookForm/InputTextField";
import NextPreviousButton from "./NextPreviousButton";
import { laravelApi } from "../../utils/api";
import { notify } from "../../utils/toasts";
import ReactLoader from "../shared/ReactLoader";
import useSWR from "swr";
import { isProduction } from "../../utils/constants";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [verificationValues, setValues] = useRecoilState(
    verificationFormValues
  );
  const userData = useRecoilValue(authenticatedUserData);
  const [step, setStep] = useRecoilState(verificationStep);
  const {
    register,
    handleSubmit,
    errors,
  } = useForm<ContactVerificationFormValues>({
    resolver: yupResolver(
      object({
        email: yup
          .string()
          .email("Invalid email")
          .test(
            "Unique Email",
            "Email already been taken",
            async function (value) {
              try {
                await laravelApi().post("/user/unique-email-excluding-id", {
                  email: value,
                  id: userData?.id,
                });
                return true;
              } catch (e) {
                return false;
              }
            }
          )
          .required("Required"),
        mobileNo: yup
          .number()
          .typeError("Mobile No. must be a number")
          .test(
            "len",
            "Mobile No must be 11 characters",
            (val) => val?.toString().length === 10
          )
          .required("Required"),
      })
    ),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const onSubmit = async (values: ContactVerificationFormValues) => {
    // values.dateOfBirth = format(parseJSON(values.dateOfBirth), "MM/dd/yyyy");
    const { email, mobileNo } = values;
    // setValues({ ...verificationValues ? , email, address, mobileNo });
    setValues({
      ...verificationValues!,
      email,
      mobileNo,
    });
    setStep(step + 1);
  };
  const [sending, setSending] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);
  const { data: contactData } = useSWR(
    mounted ? "/user/contact-verified" : null
  );
  if (!isProduction) console.log(contactData);
  return (
    <div className="pb-3 px-2 md:px-0 mt-10">
      <main className="bg-white max-w-full mx-auto p-4 md:p-8 my-5 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Contact Information</h3>
        </section>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-end px-4">
            <InputTextField
              halfWidth
              defaultValue={
                verificationValues?.email
                  ? verificationValues?.email
                  : userData
                  ? userData.email
                  : ""
              }
              name="email"
              label="Your Email"
              error={errors.email?.message}
              placeholder="youremail@email.com"
              register={register}
            />
            <button
              className={`px-2 py-1 rounded-full bg-primary
                      text-xs text-gray-200 font-semibold capitalize mb-2 cursor-not-allowed`}
            >
              {mounted && contactData?.email ? "verified" : "unverified"}
            </button>
            <button
              onClick={async () => {
                setSending(true);
                await laravelApi().post(`/send-email`, {
                  email: userData?.email,
                });
                notify("Email Sent. Check Your Inbox", {
                  type: "success",
                });
                setSending(false);
              }}
              className={`px-2 mx-4 py-1 rounded-full bg-primaryAccent text-xs text-gray-200 font-semibold capitalize mb-2`}
            >
              {sending ? <ReactLoader /> : "Resend Email"}
            </button>
          </div>
          <div className="flex items-end px-4">
            <InputTextField
              defaultValue={verificationValues?.mobileNo}
              name="mobileNo"
              halfWidth
              label="Your Mobile No."
              error={errors.mobileNo?.message}
              register={register}
              placeholder="i.e. 017XXXXXXXX"
            />
            <button
              className={`px-2 py-1 rounded-full bg-primary
                      text-xs text-gray-200 font-semibold capitalize mb-2 cursor-not-allowed`}
            >
              {mounted && contactData?.mobileNo ? "verified" : "unverified"}
            </button>
            <button
              onClick={async () => {
                setSending(true);
                await laravelApi().post(`/send-sms`, {
                  email: userData?.email,
                });
                notify("SMS Sent. Check Your Inbox", {
                  type: "success",
                });
                setSending(false);
              }}
              className={`px-2 mx-4 py-1 rounded-full bg-primaryAccent text-xs text-gray-200 font-semibold capitalize mb-2`}
            >
              {sending ? <ReactLoader /> : "Resend SMS"}
            </button>
          </div>

          <NextPreviousButton nextDisabled={!errors} />
        </form>
      </main>
    </div>
  );
};

export default Contact;
