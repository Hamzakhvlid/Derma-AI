"use client";
import * as Ariakit from "@ariakit/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation.js";
import path from "path";

export default function ChackPaymentType({
    searchParams,
}: {
    searchParams: {
        id: string;
        patientName: string,
        patientPhoneNo: string,
        doctorname: string;
        appointmentTime: string;
        hospitalPhone: string;
        hospital: string;
        place: string;
        date: string;
    };
}) {
    const router = useRouter();
    const pathname = usePathname();


    const close = () => router.push("/doctors");

    return (
        <Ariakit.Dialog
            open
            onClose={close}
            portal={false}
            backdrop={<div className="backdrop" />}
            className="dialog"
            autoFocusOnHide={(element) => {
                if (!element) {
                    const selector = `[href="${pathname}"]`;
                    const finalFocus = document.querySelector<HTMLElement>(selector);
                    finalFocus?.focus();
                }
                return true;
            }}
        >
            <Ariakit.DialogHeading className="text-lg font-bold ">Select Payment Type:</Ariakit.DialogHeading>
            <form
                className="form"
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >

                <div className="flex justify-center items-center flex-col ">
                    <label>
                        <input type="radio" name="paymentSelect" id="online" /> Online Payment
                    </label>
                    <label>
                        <input type="radio" name="paymentSelect" id="offline" /> At Hospital Payment
                    </label>

                </div>
                <Link
                    href={{
                        pathname: "/appointmentdone",
                        query: {
                            id: searchParams.id,
                            patientName: searchParams.patientName,
                            patientPhoneNo: searchParams.patientPhoneNo,
                            doctorname: searchParams.doctorname,
                            appointmentTime: searchParams.appointmentTime,
                            hospitalPhone: searchParams.hospitalPhone,
                            hospital: searchParams.hospital,
                            place: searchParams.place,
                            date: searchParams.date,
                        }
                    }}
                    className="text-lg font-bold">
                    Proceed
                </Link>
            </form>
        </Ariakit.Dialog>
    )
}