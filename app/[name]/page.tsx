"use client";

import React, { useEffect, useState } from "react";
import { allPupils, Pupil } from "../pupil-list";
import Prize from "./prize";
import Active from "./active";
import Parti from "./parti";
import Head from "next/head";

type RouteParams = {
    params: Promise<{ name: string }>;
};

export default function Page({ params }: RouteParams) {
    const [pupil, setPupil] = useState<Pupil>({} as Pupil);
    const [error, setError] = useState<string>();

    const fetchData = async () => {
        const pupilName = await params.then((params) => params.name);
        const foundPupil = allPupils.find(
            (a) => a.name.toLowerCase().replace(/\s/g, "-") == pupilName
        );
        if (foundPupil) {
            setPupil(foundPupil);
        } else {
            setError("No certificate found for given name.");
        }
    };

    const handleDownload = () => {
        window.print()
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return (
            <div className="bg-gray-50 text-black font-medium min-h-screen">
                <Head>
                    <title>No certificate found</title>
                </Head>
                <div className="flex justify-center items-center size-full">
                    <h1 className="text-xl font-bold w-1/2 text-center mt-40">{error}</h1>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 font-medium min-h-screen">
            <Head>
                <title>{pupil.name}</title>
            </Head>
            <div className="flex flex-col justify-center items-center size-full gap-6">
                <div>
                    {
                        pupil.certificateType == "prize" ?
                            <Prize pupil={pupil} />
                            : pupil.certificateType == "active" ?
                                <Active pupil={pupil} /> :
                                <Parti pupil={pupil} />
                    }
                </div>
                <button
                    onClick={handleDownload}
                    className="w-full md:w-64 flex bg-lime-500 text-hc-black text-xl px-4 py-2 rounded-lg justify-center items-center hover:bg-lime-300 hover:text-slate-600"
                >
                    <span>Download</span>
                </button>
            </div>
        </section>
    );
}
