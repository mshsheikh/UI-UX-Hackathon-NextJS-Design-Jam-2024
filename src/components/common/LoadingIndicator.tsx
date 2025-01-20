"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LoadingIndicator() {
  return (
    <ProgressBar height="2px" color="#B88E2F" options={{ showSpinner: true }} />
  );
}
