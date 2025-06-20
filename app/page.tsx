import {Hero} from "@/components/Hero";
import {CardProject} from "@/components/CardProject";
import CardSkill from "@/components/CardSkill";
import {WorkExperience} from "@/components/WorkExperience";
import {ContactMe} from "@/components/ContactMe";
import Heading from "@/components/Heading";
import {ContainerTextFlip} from "@/components/ContainerTextFlip";

export default function Home() {
    return (
        <main>
            <Hero/>
            <div className="grid md:grid-cols-3 gap-6">
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>

            <div className="">
                <h2>Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/*<CardSkill/>*/}
                </div>
            </div>

            <div>
                <h2>Work experience</h2>
                <WorkExperience/>
            </div>

            <div className="">
                <ContactMe/>
            </div>

            <div className="">
                <Heading
                    tag="h1"
                    size="h1"
                    color="primary"
                    text="Welcome to my site"
                    cssClasses="uppercase"
                    attributes={{ id: "hero-title", "data-foo": "bar" }}
                />

                <ContainerTextFlip />

            </div>

        </main>
    );
}
