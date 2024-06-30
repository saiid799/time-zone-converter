import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-center sm:text-left text-muted-foreground">
        &copy; {new Date().getFullYear()} Time Zone Converter. All rights
        reserved.
      </p>
      <nav className="flex flex-wrap justify-center sm:ml-auto sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0">
        {["Terms of Service", "Privacy"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xs hover:underline underline-offset-4"
          >
            {item}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
