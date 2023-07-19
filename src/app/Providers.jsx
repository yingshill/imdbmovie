"use client"

import React from 'react'
import { ThemeProvider } from "next-themes";

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark: bg-gray-700 dark: text-gray-200 light: text-gray-700 light: bg-gray-200
            transition-colors duration-300 min-h-screen select-none" >
            {children}
        </div>
        
    </ThemeProvider>
  )
}
