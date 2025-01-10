import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import { AlignLeft, Moon, Search, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useTheme } from "./themeProvider";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  const { setTheme } = useTheme();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="flex justify-between w-full mb-8 items-center">
      <div className="flex items-center">
        <Button variant={"ghost"} onClick={toggleSidebar}>
          <AlignLeft />
        </Button>
        <Breadcrumb>
          <BreadcrumbList>
            {pathnames.map((value, i) => {
              const to = `/${pathnames.slice(0, i + 1).join("/")}`;
              const isLast = i === pathnames.length - 1;

              if (isLast) {
                return (
                  <BreadcrumbItem key={i}>
                    <BreadcrumbPage className="capitalize">
                      {decodeURIComponent(value)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                );
              }
              return (
                <Fragment key={i}>
                  <BreadcrumbItem>
                    <Link className="capitalize" to={to}>
                      {decodeURIComponent(value)}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex">
        <Toggle
          className="group"
          onPressedChange={(state) => {
            if (state) {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          <div className="relative flex items-center justify-center">
            <Sun className="absolute group-data-[state=on]:hidden data-[state=off]:block" />
            <Moon className="absolute group-data-[state=off]:hidden data-[state=on]:block" />
          </div>
        </Toggle>
      </div>
    </div>
  );
}
