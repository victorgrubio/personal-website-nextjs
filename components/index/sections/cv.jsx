import ExperienceSubsection from './subsections/experience';
import EducationSubsection from './subsections/education';
import SkillsSubsection from './subsections/skills';
import LanguageSubsection from './subsections/language';
import PublicationsSubsection from './subsections/publications';
import CoursesSubsection from './subsections/courses';

const order = {
    education: {id: "page-1", class: "page one", page_href: "#page-1"},
    experience: {id: "page-2", class: "page two",  page_href: "#page-2"},
    skills: {id: "page-3", class: "page three",  page_href: "#page-3"},
    language: {id: "page-4", class: "page four",  page_href: "#page-4"},
    courses: {id: "page-5", class: "page five", page_href: "#page-5"},
    publications: {id: "page-6", class: "page six",  page_href: "#page-6"}

}
const CVSection = () => (  
    <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
        <div className="container">
            <div className="row">
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
                    <ExperienceSubsection class={order.experience.class} id={order.experience.id}/>
                    <SkillsSubsection class={order.skills.class} id={order.skills.id}/>
                    <LanguageSubsection class={order.language.class} id={order.language.id}/>
                    <CoursesSubsection class={order.courses.class} id={order.courses.id}/>
                    <PublicationsSubsection class={order.publications.class} id={order.publications.id}/>
                </div>
            </div>
        </div>
    </section>
)

export default CVSection;