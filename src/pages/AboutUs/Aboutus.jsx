import { ContactUs } from '../../components/ContactUs';

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center pt-20 max-w-5xl px-2 m-auto">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="py-5 my-5">
            <h1 className="text-3xl font-bold p-6">Tentang Kami</h1>
            <p className="mx-auto text-lg">
              GreenWorldWare adalah sebuah website yang berisikan tentang artikel, video edukasi, kuis seputar dampak pencemaran lingkungan dan tempat bagi para pengguna website berkontribusi untuk membagikan kegiatannya tentang peduli
              lingkungan seperti langkah-langkah apa yang dapat diambil oleh masyarakat dan pemerintah untuk mengatasi masalah sampah dan lain-lain.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-5 h-auto max-w-5xl m-auto">
        <div className="md:w-1/2">
          <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/hero-aboutus.png?updatedAt=1697193730049" alt="Image" className="w-[800px] h-[700px] sm:w-full object-cover mb-4" />
        </div>
        <div className="md:w-1/2 text-[15px]">
          <div className="md:px-6 lg:px-8 xl:px-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Visi</h2>
            <p className="mb-4">
              Visi kami adalah menciptakan dunia di mana lingkungan alam dapat berkembang dengan seimbang, tanpa terpengaruh oleh pencemaran dan kerusakan yang tidak perlu. Kami ingin melihat generasi masa depan menikmati alam yang indah,
              udara bersih, air yang sehat, dan lingkungan yang lestari.
            </p>
          </div>
          <div className="md:px-8 lg:px-10 xl:px-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Misi</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                Pendidikan dan Kesadaran: Kami berupaya meningkatkan kesadaran masyarakat tentang pentingnya menjaga kebersihan lingkungan. Kami menyelenggarakan seminar, lokakarya, dan kampanye pendidikan untuk memberikan pengetahuan dan
                keterampilan yang diperlukan untuk bertindak secara bertanggung jawab terhadap lingkungan.
              </li>
              <li>
                Aksi Lingkungan: Kami tidak hanya berbicara, kami juga bertindak. Kami secara aktif terlibat dalam proyek-proyek pembersihan dan pelestarian lingkungan. Mulai dari membersihkan pantai hingga penanaman pohon, kami bekerja
                bersama komunitas lokal untuk menciptakan perubahan nyata.
              </li>
              <li>Inovasi Berkelanjutan: Kami selalu mencari solusi inovatif untuk permasalahan lingkungan. Dengan bekerja sama dengan ahli lingkungan dan teknologi, kami berusaha mengembangkan produk dan layanan yang ramah lingkungan.</li>
              <li>
                Kemitraan dan Kolaborasi: Kami percaya bahwa perubahan besar hanya bisa dicapai melalui kerja sama. Kami bekerja sama dengan organisasi lingkungan, pemerintah, bisnis, dan masyarakat sipil untuk mencapai tujuan bersama.
              </li>
              <li>
                Keterbukaan dan Akuntabilitas: Kami bertanggung jawab atas tindakan kami dan selalu berusaha untuk tetap terbuka terhadap umpan balik dari masyarakat. Kami ingin memastikan bahwa setiap tindakan kami berkontribusi pada
                keberlanjutan dan kebersihan lingkungan.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-black text-3xl sm:text-4xl font-bold leading-[60px] py-12">
          <h2 className="py-3">Temui Tim</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 ">
          <div className="border rounded-lg p-4 hover:shadow-lg">
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="w-80 h-80 object-cover rounded-full mb-4" alt="Hamzah Raihan Ikhsanul Fikri" />
            <div>
              <h3 className="font-medium text-xl">Hamzah Raihan Ikhsanul Fikri</h3>
              <p>Fullstack Web Development</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-lg">
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="w-80 h-80 object-cover rounded-full mb-4" alt="Irfan Hananto" />
            <div>
              <h3 className="font-medium text-xl">Irfan Hananto</h3>
              <p>Fullstack Web Development</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-lg">
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="w-80 h-80 object-cover rounded-full mb-4" alt="Alzi Rahmana Putra" />
            <div>
              <h3 className="font-medium text-xl">Alzi Rahmana Putra</h3>
              <p>Fullstack Web Development</p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default AboutUs;
