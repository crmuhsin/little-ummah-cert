"use client";

import Link from "next/link";
import React from "react";
import { activeParticipants, participants, prizeWinners } from "./pupil-list";


export default function Page() {
    return (
        <div className="bg-gray-50 text-black font-medium min-h-screen">
            <h1 className="text-[30px] pt-6 pl-6 md:pt-20 md:pl-20 text-center">Little Ummah Online Academy</h1>
            <div className="flex flex-col md:flex-row justify-center size-full gap-10 p-6 md:pl-20 md:pt-10">
                <div className="flex flex-col md:w-1/3">
                    {prizeWinners.map((p, i) =>
                        <Link key={i} href={`/${p.name.toLowerCase().replace(/\s/g, "-")}`}>
                            <h5>{p.name}</h5>
                        </Link>
                    )}
                </div>
                <div className="flex flex-col md:w-1/3">
                    {activeParticipants.map((p, i) =>
                        <Link key={i} href={`/${p.name.toLowerCase().replace(/\s/g, "-")}`}>
                            <h5>{p.name}</h5>
                        </Link>
                    )}
                </div>
                <div className="flex flex-col md:w-1/3">
                    {participants.map((p, i) =>
                        <Link key={i} href={`/${p.name.toLowerCase().replace(/\s/g, "-")}`}>
                            <h5>{p.name}</h5>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
