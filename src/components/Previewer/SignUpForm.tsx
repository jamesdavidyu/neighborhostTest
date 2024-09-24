"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SignUpForm = () => {
  return (
    <div>
      {/* TODO: make intro text dynamic so it switches from friends, rsvp events, neighborhood, etc. */}
      <h1 className="flex font-semibold justify-center pb-2">
        Looking for your neighbors?
      </h1>
      <form>
        <Input placeholder="Email" className="mb-2" />
        <Input placeholder="Username" className="mb-2" />
        <Input placeholder="Password" type="password" className="mb-2" />
        <Input
          placeholder="Confirm password"
          type="password"
          className="mb-2"
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
