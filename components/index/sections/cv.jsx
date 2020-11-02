import ExperienceSubsection from './subsections/experience';
import EducationSubsection from './subsections/education';
import SkillsSubsection from './subsections/skills';
import LanguageSubsection from './subsections/language';
import PublicationsSubsection from './subsections/publications';
import CoursesSubsection from './subsections/courses';

const order = {
    education: { id: "education", class: "page one", page_href: "#education" },
    experience: { id: "experience", class: "page two", page_href: "#experience" },
    skills: { id: "skills", class: "page three", page_href: "#skills" },
    language: { id: "languages", class: "page four", page_href: "#languages" },
    courses: { id: "courses", class: "page five", page_href: "#courses" },
    publications: { id: "publications", class: "page six", page_href: "#publications" }

}
const CVSection = () => (
    <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
        <div className="container">
            <div className="row no-gutters justify-content-center pb-5">
                <div className="col-md-12 heading-section text-center ftco-animate">
                    <h1 className="big big-2">Resume</h1>
                    <h2 className="mb-4">My Resume</h2>
                    <p>A detailed description about all my education and job experience along with my different skills</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                    <nav id="navi">
                        <ul>
                            <li><a href={order.education.page_href}>Education</a></li>
                            <li><a href={order.experience.page_href}>Experience</a></li>
                            <li><a href={order.skills.page_href}>Skills</a></li>
                            <li><a href={order.language.page_href}>Languages</a></li>
                            <li><a href={order.courses.page_href}>Courses</a></li>
                            <li><a href={order.publications.page_href}>Publications</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-9">
                    <EducationSubsection class={order.education.class} id={order.education.id} />
                    <ExperienceSubsection class={order.experience.class} id={order.experience.id} />
                    <SkillsSubsection class={order.skills.class} id={order.skills.id} />
                    <LanguageSubsection class={order.language.class} id={order.language.id} />
                    <CoursesSubsection class={order.courses.class} id={order.courses.id} />
                    <PublicationsSubsection class={order.publications.class} id={order.publications.id} />
                </div>
            </div>
        </div>
    </section>
)

export default CVSection;