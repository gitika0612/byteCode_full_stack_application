import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-950">
            <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl "></div>
            <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32 ">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Explore the World Through
                        <span className="bg-gradient-to-r from-violet-400 bg-clip-text text-transparent ">{" "} Words</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">Discover insightfull articles, thought-provoking stories, and expert perespectives on technology, lifestyle andinnovation</p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                        <Button className="rounded-full">Start Reading</Button>
                        <Button className="rounded-full" variant={"outline"}>Explore Topics</Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
                        <div className="space-y-2">
                            <div className="text-2xl font-bold  text-white">1K+</div>
                            <div className="text-sm text-gray-400"> Published articles</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold  text-white">50+</div>
                            <div className="text-sm text-gray-400">Expert Writers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold  text-white">10M</div>
                            <div className="text-sm text-gray-400">Monthly Readers</div>
                        </div>
                    </div>
                </div>

                 {/* Image frame  */}
                 <div className="mt-12 flex-1 md:mt-0">
                        <div className={cn("relative mx-auto w-64 h-64 rounded-2xl overflow-hidden", "bg-gradient-to-br from-white/5 to-transparent", "border border-primary/20 backdrop-blur-lg", "shadow-2xl shadow-indigo-500/10")}>
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                                fill
                                alt="hero-image"
                                className="object-cover"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default HeroSection