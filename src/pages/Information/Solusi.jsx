const Solusi = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className=" text-center text-5xl font-bold py-10">Solusi</h1>
        <p className=" md:px-80 text-center text-xl leading-loose ">
          Pelajari mengenai berbagai solusi untuk menjaga kebersihan dan kesehatan lingkungan kita. Seperti daur ulang, penggunaan energi terbarukan, konservasi air, dan pengurangan limbah.
        </p>

        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-36 max-w-[600px] items-center  py-40 px-4 md:px-0">
          <img src="https://i.imgur.com/68Co1kY.png" className="w-[650px]" alt="solusi 1" />

          <div>
            <h1 className="py-2 text-3xl font-semibold">Kurangi Limbah Rumah Tangga</h1>
            <p className="text-xl leading-loose text-justify">Mengurangi pencemaran lingkungan oleh sampah rumah tangga membutuhkan tindakan yang komprehensif. Berikut adalah langkah-langkah utama yang dapat diambil:</p>
            <ol className="list-decimal text-xl leading-loose text-justify ">
              <li>
                <p className="font-bold">Pengurangan Sampah di Sumber:</p>
                Menghindari penggunaan plastik sekali pakai seperti kantong plastik dan botol plastik dengan memilih alternatif yang dapat digunakan ulang. Selain itu, mengurangi penggunaan kemasan dan membeli produk dalam kemasan besar
                untuk mengurangi limbah kemasan
              </li>

              <li>
                <p className="font-bold"> Daur Ulang dan Pemanfaatan:</p>
                Mendaur ulang bahan seperti kertas, karton, logam, dan kaca adalah cara efektif untuk mengurangi sampah rumah tangga. Selain itu, peralatan elektronik bekas dapat didaur ulang atau didonasikan.
              </li>

              <li>
                <p className="font-bold"> Kompos dan Pengelolaan Limbah Organik:</p>
                Mengompos sisa makanan dan dedaunan membantu mengurangi volume sampah dan menghasilkan pupuk alami. Penggunaan penggilingan limbah untuk menghancurkan limbah organik sebelum memasukkannya ke dalam saluran air juga dapat
                membantu.
              </li>

              <li>
                <p className="font-bold">Pendidikan dan Kesadaran Masyarakat:</p>
                Kampanye kesadaran publik, seminar, dan program pendidikan penting untuk mengedukasi masyarakat tentang pengurangan sampah dan pengelolaan limbah yang bertanggung jawab. Mendorong partisipasi masyarakat dalam program
                pembersihan lingkungan juga berperan penting.
              </li>

              <li>
                <p className="font-bold">Penggunaan Produk Ramah Lingkungan:</p>
                label sertifikasi hijau atau yang memiliki dampak lingkungan yang lebih rendah merupakan langkah penting dalam mengurangi pencemaran lingkungan. Menggunakan tas belanja yang dapat digunakan ulang juga membantu menghindari
                penggunaan kantong plastik sekali pakai.
              </li>
            </ol>
          </div>
        </div>

        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-36 max-w-[600px] items-center px-4 md:px-0">
          <div className="md:pl-20">
            <h1 className="py-2 text-3xl font-semibold">Kurangi Limbah Industri</h1>
            <p className="text-xl leading-loose text-justify">
              Mengurangi pencemaran lingkungan, khususnya yang berasal dari limbah industri, merupakan tantangan serius yang memerlukan tindakan berkelanjutan dan kolaborasi antara pemerintah, industri, dan masyarakat. Berikut adalah solusi
              lengkap untuk mengurangi pencemaran lingkungan oleh limbah industri:
            </p>
            <ol className="list-decimal text-xl leading-loose text-justify ">
              <li>
                <p className="font-bold">Teknologi Bersih dan Bahan Baku Ramah Lingkungan:</p>
                Industri harus beralih ke teknologi produksi yang lebih bersih dan menggunakan bahan baku yang lebih ramah lingkungan untuk mengurangi limbah dan emisi berbahaya.
              </li>

              <li>
                <p className="font-bold"> Daur Ulang dan Pemanfaatan:</p>
                Mendorong penggunaan bahan daur ulang dengan mengembangkan pasar untuk produk daur ulang dan memproses limbah industri menjadi bahan baku yang dapat digunakan kembali.
              </li>

              <li>
                <p className="font-bold"> Pengelolaan Limbah yang Efisien:</p>
                Menggunakan sistem pengelolaan limbah yang aman dan efisien untuk menghindari pencemaran tanah dan air serta mematuhi peraturan yang ketat terkait limbah berbahaya.
              </li>

              <li>
                <p className="font-bold">Pemantauan dan Pelaporan:</p>
                Implementasi sistem pemantauan untuk memantau emisi dan dampak lingkungan secara real-time, serta melibatkan industri dalam pelaporan transparan kepada badan pengawas dan masyarakat.
              </li>

              <li>
                <p className="font-bold">Edukasi dan Kesadaran Masyarakat:</p>
                Mengedukasi masyarakat tentang dampak limbah industri pada lingkungan dan kesehatan mereka melalui kampanye informasi, serta mendorong partisipasi aktif masyarakat dalam pemantauan dan pengawasan aktivitas industri.
              </li>
            </ol>
          </div>
          <img src="https://i.imgur.com/xiKFa6Z.png" className="w-[650px]" alt="solusi 2" />
        </div>
      </div>
    </div>
  );
};

export default Solusi;
