import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
    return (
        <form action="">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10 w-48 focus-visible:ring-1" type="text" name="search" placeholder="Search articles..." />
           </div>
        </form>
    )
}

export default SearchInput