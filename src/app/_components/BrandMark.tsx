type BrandMarkProps = {
    className?: string;
    compact?: boolean;
};

export function BrandMark({
    className = "",
    compact = false,
}: BrandMarkProps) {
    return (
        <div
            className={`flex flex-col justify-center rounded-2xl border border-navy-blue/15 bg-white px-4 py-2 text-navy-blue shadow-sm ${className}`}
        >
            <span
                className={`font-bold uppercase tracking-[0.35em] text-yellow ${
                    compact ? "text-[0.55rem]" : "text-[0.65rem]"
                }`}
            >
                Professional Cleaning
            </span>
            <span
                className={`font-black leading-none ${
                    compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                }`}
            >
                kastillo
            </span>
            <span
                className={`font-semibold uppercase tracking-[0.28em] ${
                    compact ? "text-[0.7rem]" : "text-[0.8rem]"
                }`}
            >
                cleaners
            </span>
        </div>
    );
}
