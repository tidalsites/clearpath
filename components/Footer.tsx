import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-foreground text-background shadow-[0_-2px_8px_hsl(0,0%,40%)]">
      <div className="text-sm py-2 w-full flex justify-between px-8">
        <span>&copy; 2025 ClearPath Consulting. All Rights Reserved</span>
        <span>
          Designed by{" "}
          <Link target="_blank" href="https://tidalsites.com">
            Tidal Sites
          </Link>
        </span>
      </div>
    </div>
  );
};
