import Link from "next/link";
import MaxWithWrapper from "./MaxWithWrapper"
import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 full border-b border-gray-200 bg-white/75 backdrop-blur-lg  transition-all">
            <MaxWithWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold "> prime.</Link>

                    {/* todo : mobile navbar */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/pricing' className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}>Pricing</Link>
                            <LoginLink
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                Sign In
                            </LoginLink>
                            <RegisterLink
                                className={buttonVariants({
                                    size: 'sm',
                                })}>let&apos;s start 
                                <ArrowRight className="ml-0.5 h-5 w-5"/></RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWithWrapper>
        </nav>
    )
}
export default Navbar;