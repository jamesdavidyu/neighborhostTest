import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export const NavBar = () => {
  return (
    <div className="fixed w-full z-10">
      <Card className="h-16 rounded-none grid grid-cols-3 p-3">
        <h1>neighborhost</h1>
        {/* <div className="flex">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div> */}
        <div>
          <Button className="w-full">+ Plan an Event</Button>
        </div>
        <div className="flex justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </Card>
    </div>
  );
};
