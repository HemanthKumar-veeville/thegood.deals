import React from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { useTranslation } from "react-i18next";

export const InstallModal = ({ isOpen, onClose }) => {
  const { getInstallInstructions, deviceInfo } = usePWAInstall();
  const { t } = useTranslation();
  const { title, steps, images } = getInstallInstructions();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2a4e4a] bg-opacity-30 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-xl bg-whitewhite text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-darkdark-5 hover:text-darkdark-3"
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-whitewhite px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-color sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-whitewhite"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-lg font-semibold leading-6 text-primary-color">
                  {t("pwa.install.modal_title")}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-primary-text-color">
                    {t("pwa.install.modal_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-primary-background px-4 py-4 sm:px-6">
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-color text-whitewhite text-sm">
                    {index + 1}
                  </span>
                  <span className="ml-3 text-sm text-primary-text-color">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Footer */}
          <div className="bg-primary-background px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-graygray-3">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1b4f4a] sm:ml-3 sm:w-auto"
              onClick={onClose}
            >
              {t("pwa.install.got_it")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
