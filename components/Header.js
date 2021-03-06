import { XIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import {useRef} from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
 
export default function Header() {
    const router = useRouter();
    const homePage = ()=>{
        router.push('/')
    }

    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`search?terms=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image
                src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                height={40}
                width={120}
                onClick={homePage}
                className="cursor-pointer"
            />

            <form className="flex px-6 py-3 flex-grow ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center" >
                <input type="text" ref={searchInputRef}
                className="flex-grow w-full focus:outline-none"
                defaultValue={router.query.terms}
                />
                <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                // onClick={searchInputRef.current.value=''}
                />

                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>

                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url='https://programmer-mahmudul.web.app/static/media/my-bg.2227de49.png' />

            
            </div>
            {/*Header Options */}
            <HeaderOptions/>
        </header>
    )
}
