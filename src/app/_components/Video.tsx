import Image from "next/image";

export function Video() {
    return (
        <figure className="overflow-hidden rounded-xl bg-blue-white shadow-lg">
            <div className="relative aspect-video w-full">
                <Image
                    src="/rolling-hills-video-poster.png"
                    alt="Kastillo Cleaners team at work"
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                />
            </div>
            <figcaption className="px-4 py-3 text-sm text-navy-blue sm:text-base">
                Kastillo cleaners at work.
            </figcaption>
        </figure>
    );
}
