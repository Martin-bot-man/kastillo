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
                            serving Kenyan PA since 2022, and proudly
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
                    <iframe
                        className="aspect-video h-full min-h-[545px] lg:min-h-[650px] max-h-[800px] xl:max-h-[900px] rounded-xl"
                        src="https://www.google.com/maps/place/Hurlingham+Ct,+London,+UK/@51.4671782,-0.2106932,17z/data=!3m1!4b1!4m6!3m5!1s0x48760f738b09ce53:0x57622ecfe57ea418!8m2!3d51.4671782!4d-0.2081183!16s%2Fg%2F11x8_lm6ps?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                        width={"100%"}
                        height={"100%"}
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </article>
            </section>
        </main>
    );
}
