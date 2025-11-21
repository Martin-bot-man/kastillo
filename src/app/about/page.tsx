import { Banner } from "../_components";

export default function About() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <Banner
                backgroundImageUrl="/shiny-night-city.jpg"
                altText="Shiny night city"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-2 sm:py-3">
                        <h1>ABOUT</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 text-center w-full max-w-[1430px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        About Kastillo Cleaners
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Kastillo Cleaners has been locally owned and
                            serving Kenyan since 2022, and proudly
                            employee-owned since 2022! We don&apos;t require a
                            long-term contract with our customers. From 2,000
                            square foot dentist office to a 200,000 square foot
                            plant, no job is too big or too small for us to
                            handle.{" "}
                            <a
                                href="tel:+254-797-782614"
                                className="underline decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold"
                                aria-label="Kastillo cleaners for a free estimate"
                            >
                                Call us
                            </a>{" "}
                            for a FREE estimate today!
                        </p>
                        <p>
                            The team at Kastillo cleaners considers
                            customer service as our #1 priority. The entire team
                            has been trained and works at various janitorial
                            sites performing various janitorial services. Our
                            staff is familiar with the mottos/principles of the
                            company and their work is continually evaluated by
                            the Quality Inspection Team.
                        </p>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 text-center w-full max-w-[1430px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Why Choose Kastillo Cleaners?
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Cleaning and janitorial services are critical to our
                            commercial and industrial client, that is why
                            Kastillo cleaners is this region&apos;s most dependable
                            and professional business cleaning service. We serve
                            businesses and organizations in Nairobi,
                            Mombasa and surrounding counties. Whether large or
                            small, they all consider that a clean facility is
                            essential to the comfort, health and safety of their
                            customers and contributes to the productivity and
                            positive attitude of everyone on their staff.
                        </p>
                    </div>
                </article>
            </section>
           <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="w-full mt-2 mb-5 drop-shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8002236777784!2d36.79591097547594!3d-1.2943889986933097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10be73a40081%3A0xfb065d6f4464bc63!2sHurlingham%20Court%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1763696220584!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </main>
    );
}
