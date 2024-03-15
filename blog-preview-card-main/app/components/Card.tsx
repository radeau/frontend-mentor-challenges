import illustrationArticle from '/assets/images/illustrationArticle.svg'; 
import imageAvatar from '/assets/images/imageAvatar.webp'; 
import Image from "next/image"; 
import Button from "../components/Button";

const Card = () => {
    return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-black ">
        <div className="p-6 bg-white">
            <Image src={illustrationArticle} alt="illustration art" className="w-full rounded-xl"/>
             <div className="py-4">
                <Button color="hsl(47, 88%, 63%)">{"Learning"}</Button>
                <p className="my-4">Published 21 Dec 2023</p>
                <div className="font-bold text-xl my-4 text-yellow-400">HTML & CSS foundations</div>
                <p className="text-gray-700 text-base">
                These languages are the backbone of every website, defining structure, content, and presentation.
                </p>
            </div>
            <div className="pt-4 flex items-center">
                <span className="inline-bloc rounded-full text-sm text-gray-700 mr-3">
                    <Image src={imageAvatar} alt="profile-avatar" />
                </span>
                <p className="font-extrabold">Greg Hopper</p>
            </div>
        </div>
    </div>
    );
}

export default Card;