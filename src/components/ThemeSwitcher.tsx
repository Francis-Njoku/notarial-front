"use client";

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MoonIcon, SunIcon, Tv2Icon, TvIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // avoid rehydration errors

    return (
        <div>
            <Tabs defaultValue={theme}>
                <TabsList className="border">
                    <TabsTrigger value="light" onClick={() => setTheme("light")}>
                        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                    </TabsTrigger>
                    <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
                        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
                    </TabsTrigger>
                    <TabsTrigger value="system" onClick={() => setTheme("system")}>
                        <Tv2Icon className="h-[1.2rem] w-[1.2rem]" />
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}

export default ThemeSwitcher;
