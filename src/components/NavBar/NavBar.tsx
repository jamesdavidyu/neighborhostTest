import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export const NavBar = () => {
  return (
    <div className="fixed w-full z-10">
      <Card className="h-16 rounded-none grid grid-cols-3 p-3 border-b-black">
        <Button variant={"link"} className="flex justify-start text-2xl">neighorhost</Button>
        <div className="flex">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button variant={"blue"}>Log In</Button>
          <Button variant={"link"} className="text-red-500">Forgot password?</Button>
        </div>
        {/* <div>
          <Button className="w-full">+ Plan an Event</Button>
        </div> */}
        <div className="flex justify-end">
          <button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </button>
        </div>
      </Card>
    </div>
  );
};
