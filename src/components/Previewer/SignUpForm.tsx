"use client";

import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const SignUpForm = () => {
    return (
        <div>
            <form>
                <Input placeholder="Email" className="pt-2" />
                <Input placeholder="Username" className="pt-2" />
                <Input placeholder="Password" type="password" className="pt-2" />
                <Input placeholder="Confirm Password" type="password" className="pt-2" />
                <Button type="submit" className="w-full">Sign Up</Button>
            </form>
        </div>
    )
}