"use client";

import React from "react";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { FontProvider } from "./components/providers/FontProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <FontProvider>
                {children}
            </FontProvider>
        </ThemeProvider>
    );
};