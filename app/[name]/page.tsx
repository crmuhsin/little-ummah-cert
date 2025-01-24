"use client";

import React, { useEffect, useState } from "react";
import { allPupils, Pupil } from "../pupil-list";
import Prize from "./prize";

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
                <div className="flex justify-center items-center size-full">
                    <h1 className="text-xl font-bold w-1/2 text-center mt-40">{error}</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 font-medium min-h-screen">
            <div className="flex justify-center items-center size-full">
                {
                    pupil.certificateType == "prize" &&
                    <Prize pupil={pupil} />
                }
            </div>
        </div>
    );
}
