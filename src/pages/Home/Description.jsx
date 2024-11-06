import { Link } from 'react-router-dom';
import Button from '../../layout/Button';

const Description = () => {
  return (
    <div className="w-full bg-white max-w-5xl m-auto px-5">
      <h1 className="text-center text-2xl font-bold pb-10">Mengapa Kita Harus Menjaga Kebersihan</h1>
      <p className="text-center max-md:text-justify text-xl leading-8">
        Mencegah pencemaran limbah bukan sekedar pilihan; itu suatu keharusan. Dengan meminimalkan polusi, kita melindungi keseimbangan ekosistem,memastikan udara dan air lebih bersih, dan berupaya mewujudkan dunia di mana alam tumbuh subur
        bersama kita.
      </p>

      <div className="max-w-7xl m-auto grid md:grid-cols-2 items-center mt-10">
        <img className="flex justify-center m-auto items-center w-96 mb-10" src="https://ik.imagekit.io/irfantonov111/Dampak%20logo.png?updatedAt=1700499551044" />

        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold ">Memahami Dampak Polusi Limbah</h1>
          <p className="text-xl w-full pr-10 leading-8">
            Meningkatkan kesadaran mengenai dampak pencemaran lingkungan adalah langkah pertama menuju planet yang lebih bersih dan sehat. Dengan mempelajari bagaimana polusi mempengaruhi ekosistem, kesehatan manusia, dan masa depan kita
            bersama, kita memberdayakan diri kita sendiri untuk membuat pilihan yang tepat yang mendorong perubahan positif.
          </p>
          <div>
            <Link to="/dampak">
              <Button type="daftar" title="Dampak" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-auto mb-10 grid md:grid-cols-2 items-center mt-10">
        <img className="flex justify-center m-auto items-center w-96 order-2" src="https://i.imgur.com/0p2aRjX.png" />

        <div className="flex flex-col gap-5 max-[780px]:order-2">
          <h1 className="text-3xl font-semibold">Mengubah Polusi Limbah menjadi Solusi Berkelanjutan</h1>
          <p className="text-xl w-full pr-10 leading-8">
            Temukan solusi inovatif untuk mengatasi masalah mendesak polusi limbah dan bergabunglah dalam gerakan global menuju masa depan yang lebih bersih dan ramah lingkungan. Bersama-sama, kita dapat mengurangi sampah, mendaur ulang
            secara bertanggung jawab, dan mendorong praktik berkelanjutan untuk mengurangi dampak buruk pencemaran sampah terhadap lingkungan kita.
          </p>
          <div>
            <Link to="/solusi">
              <Button type="daftar" title="Solusi" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
