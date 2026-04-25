"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    BrandMark,
    DesktopNavigation,
    MobileNavigation,
    PromoBanner,
} from "./index";
import { AnimatedMenuIcon } from "./AnimatedMenu";

export function Header() {
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        function handleScroll() {
            const isAtTop = window.scrollY <= 50;
            setIsScrolledToTop(isAtTop);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => setIsModalOpen(false);

    return (
        <header
            className={`w-full bg-white sticky top-0 z-40 drop-shadow-md duration-500 ease-in-out transition opacity transform text-navy-blue`}
        >
            <PromoBanner />
            <div className="flex justify-between items-center mr-4">
                <Link
                    href={"/"}
                    className={`duration-500 ease-out relative ${
                        isScrolledToTop
                            ? "w-[214px] md:w-[240px] lg:w-[280px]"
                            : "w-[190px] md:w-[220px] lg:w-[250px]"
                    }`}
                    aria-label="kastillo cleaners"
                >
                    <BrandMark className="duration-500 ease-out hover:scale-105 scale-100" />
                </Link>

                <nav className="relative">
                    <DesktopNavigation
                        isScrolledToTop={isScrolledToTop}
                        pathName={pathName}
                    />
                    <span
                        className={`lg:hidden hover:cursor-pointer duration-300 ease-out ${
                            isModalOpen
                                ? "relative z-50 *:absolute bottom-4 right-11"
                                : ""
                        }`}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        <AnimatedMenuIcon
                            isModalOpen={isModalOpen}
                            isScrolledToTop={isScrolledToTop}
                            setIsModalOpen={setIsModalOpen}
                        />
                    </span>

                    {isModalOpen && (
                        <MobileNavigation
                            pathName={pathName}
                            closeMenu={closeMenu}
                        />
                    )}
                </nav>
            </div>
        </header>
    );
}
