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
                <div id="screenshot-target">
                    {
                        pupil.certificateType == "prize" ?
                            <Prize pupil={pupil} />
                            : pupil.certificateType == "active" ?
                                <Active pupil={pupil} /> :
                                <Parti pupil={pupil} />
                    }
                </div>
            </div>
        </section>
    );
}
