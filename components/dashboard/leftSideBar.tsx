"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const LeftSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant={'outline'} className="md:hidden m-4">
                    <LayoutDashboard className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className="w-[250px]">
                <DashboardSideBar />
            </SheetContent>
        </Sheet>

        <div className="hidden md:block h-screen w-[250px] border-r bg-background">
            <DashboardSideBar />
        </div>
        </>
    )
}

export default LeftSideBar;

const DashboardSideBar = () => {
    return (
        <div className="h-full px-4 py-6">
            <div className="flex items-center gap-2 mb-8 px-2">
                <Link href={"/"}>
                    <span className="text-xl font-bold">ByteCode</span>
                </Link>
            </div>

            <nav>
                <Link href={'/dashboard'}>
                    <Button className="w-full justify-start cursor-pointer" variant={"ghost"}>
                        <LayoutDashboard className="w-5 h-5 mr-2" />
                        Overview
                    </Button>
                </Link>
                <Link href={'/dashboard/articles/create'}>
                    <Button className="w-full justify-start cursor-pointer" variant={"ghost"}>
                        <FileText className="w-5 h-5 mr-2" />
                        Articles
                    </Button>
                </Link>
            </nav>
        </div>
    )
}
