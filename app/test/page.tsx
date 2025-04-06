import { cn } from "@/lib/utils";
import React from 'react'
import Card from "./card";
import {GeistSans} from "geist/font/sans"

const page = () => {
  return (
    <div className={cn(
      GeistSans.className,
      "h-screen flex items-center justify-center bg-gray-50"
    )}>
      < Card />
    </div>
  )
}

export default page