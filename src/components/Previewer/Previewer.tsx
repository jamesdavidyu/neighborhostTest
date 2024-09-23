import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { SignUpForm } from "./SignUpForm";

export const Previewer = () => {
  return (
    <div className="pl-4">
      <Card className="fixed w-[31%] z-0 mt-20 h-[85%] p-4">
        <h1 className="flex font-semibold justify-center pb-2">Looking for your neighbors?</h1>
        <SignUpForm />
      </Card>
    </div>
  );
};
