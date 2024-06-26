import Articles from "../components/Articles";
import Email from "../components/Email";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Roadmaps from "../components/Roadmaps";
import Visions from "../components/Visions";

export function sectionRenderer(section: any, index: number) {
    console.log(section);

    switch (section.__component) {
        case "sections.hero":
            return <Hero key={index} data={section} />;
        case "sections.features":
            return <Features key={index} data={section} />;
        case "sections.visions":
            return <Visions key={index} data={section} />;
        case "sections.roadmaps":
            return <Roadmaps key={index} data={section} />;
        case "sections.articles":
            return <Articles key={index} data={section} />;
        case "sections.lead-form":
            return <Email key={index} data={section} />;
        default:
            return null;
    }
}
