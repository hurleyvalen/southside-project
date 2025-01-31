"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function DialogMsg() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Important Note
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-red-500 font-bold">
                      Submitting a booking request does not guarantee a
                      confirmed reservation. All bookings are subject to
                      availability and approval by South Side Brews. Once your
                      request is received, our team will review it and send you
                      a confirmation text with payment details if your selected
                      slot is available. Your booking is only finalized once
                      payment is completed and you receive a confirmation from
                      our management. Thank you for your understanding!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-forestGreen px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-900 sm:ml-3 sm:w-auto"
              >
                Continue
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
