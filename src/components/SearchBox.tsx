"use client";

import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react";

export default function SearchBox({ value, setValue, isLoading }: { value: string; setValue: (query: string) => void, isLoading: boolean }) {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search products (type at least 3 characters)..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full"
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
