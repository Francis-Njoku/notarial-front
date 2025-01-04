import { UserButton } from "@clerk/nextjs";
import React, { ReactNode} from "react";
import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function layout({ children }: {children: ReactNode}) 
{
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
                <Logo />
                <div className="flex gap-4 items-center">
                <ThemeSwitcher />
                <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {children}
            </main>
        </div>    
            
    )
}

export default layout