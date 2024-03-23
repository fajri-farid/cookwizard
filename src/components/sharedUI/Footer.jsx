"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="h-[225px] bg-cw-background">
        <div className="flex justify-evenly">
          <div className="flex space-x-5 h-fit">
            <img src="/cw_logo.png" alt="" className="w-[40px] h-[56px] mt-5" />
            <div>
              <div className="font-cookWiz text-cw-primary text-7xl">
                Cook<span className="text-cw-secondary">Wizard.</span>
              </div>
              <div className="-mt-7 font-cookWiz text-5xl text-cw-secondary">
                Your Personal Cooking Master
              </div>
            </div>
          </div>
          <div className="flex w-[300px] justify-between">
            <div>
              <div className="text-5xl text-white font-cookWiz mt-3">
                Exlplore Us
              </div>
              <div className="text-[40px] text-cw-secondary font-cookWiz flex flex-col -space-y-7 -mt-3">
                <p>About</p>
                <p>Privacy Policy</p>
                <p>Term & Conditions</p>
              </div>
            </div>
            <div>
              <div className="text-5xl text-white font-cookWiz mt-3">
                Connect Us
              </div>
              <div className="text-[40px] text-cw-secondary font-cookWiz flex flex-col -space-y-7 -mt-3">
                <p>support@bitwiz.com</p>
                <p>265-2204-1406</p>
                <div>Bitwiz.Inc, Bandung</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit m-auto font-cookWiz text-cw-secondary text-[30px]">
          Copyright 2024 . All rights reserved . CookWizard
        </div>
      </div>
    </div>
  );
};
