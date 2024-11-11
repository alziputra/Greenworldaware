import { ContactUs } from "../../components/ContactUs";
import { aboutContent, vision, missions, teamMembers } from "../../data/aboutData";

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center pt-20 max-w-5xl px-2 m-auto">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="py-5 my-5">
            <h1 className="text-3xl font-bold p-6">{aboutContent.title}</h1>
            <p className="mx-auto text-lg">{aboutContent.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-5 h-auto max-w-5xl m-auto">
        <div className="md:w-1/2">
          <img src={aboutContent.imageSrc} alt="Image" className="w-[800px] h-[700px] sm:w-full object-cover mb-4" />
        </div>
        <div className="md:w-1/2 text-[15px]">
          <div className="md:px-6 lg:px-8 xl:px-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{vision.title}</h2>
            <p className="mb-4">{vision.content}</p>
          </div>
          <div className="md:px-8 lg:px-10 xl:px-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Misi</h2>
            <ol className="list-decimal pl-6 mb-4">
              {missions.map((mission, index) => (
                <li key={index} className="mb-2">
                  {mission}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-black text-3xl sm:text-4xl font-bold leading-[60px] py-12">
          <h2 className="py-3">Temui Tim</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg">
              <img src={member.imageSrc} className="w-80 h-80 object-cover rounded-full mb-4" alt={member.name} />
              <div>
                <h3 className="font-medium text-xl">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default AboutUs;
