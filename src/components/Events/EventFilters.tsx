import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FcCalendar } from "react-icons/fc";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export const EventFilters = () => {
  return (
    <div className="px-4">
      <Card className="fixed w-[31%] z-0 mt-20">
        <div className="px-2">
          <div className="flex justify-center py-6 space-x-6">
            <Button variant={"link"}>
              <FcCalendar size={50} />
            </Button>
            <Button variant={"link"}>
              <FaMapMarkedAlt size={50} />
            </Button>
          </div>
          <div className="pt-2">
            <Select>
              <SelectTrigger className="justify-center">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="my_city">My city</SelectItem>
                <SelectItem value="my_zipcode">My zipcode</SelectItem>
                <SelectItem value="my_neighborhood">My neighborhood</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-2">
            <form>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full" variant={"outline"}>
                    <IoCalendarOutline />
                    Pick a date
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Starts when?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on">On</SelectItem>
                      <SelectItem value="after">After</SelectItem>
                      <SelectItem value="before">Before</SelectItem>
                    </SelectContent>
                  </Select>
                  <Calendar />
                  <div className="flex justify-between">
                    <Select>
                      <SelectTrigger className="w-[50%]">
                        <SelectValue placeholder="Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1:00</SelectItem>
                        <SelectItem value="2">2:00</SelectItem>
                        <SelectItem value="3">3:00</SelectItem>
                        <SelectItem value="4">4:00</SelectItem>
                        <SelectItem value="5">5:00</SelectItem>
                        <SelectItem value="6">6:00</SelectItem>
                        <SelectItem value="7">7:00</SelectItem>
                        <SelectItem value="8">8:00</SelectItem>
                        <SelectItem value="9">9:00</SelectItem>
                        <SelectItem value="10">10:00</SelectItem>
                        <SelectItem value="11">11:00</SelectItem>
                        <SelectItem value="12">12:00</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[25%]">
                        <SelectValue placeholder="PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="am">AM</SelectItem>
                        <SelectItem value="pm">PM</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit">
                      <FaCheck />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </form>
          </div>
          <div className="flex pt-2">
            <Input
              placeholder="What kind of event are you looking for?"
              className="w-full"
            />
            <Button>
              <BsSearch />
            </Button>
          </div>
          <div className="py-2">
            <Button className="w-full">More Filters</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
