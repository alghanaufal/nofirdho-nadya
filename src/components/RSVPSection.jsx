import React, { useState } from "react";

const RSVPSection = ({
  ref9,
  inView9,
  posts,
  post,
  setPost,
  createPost,
  attending,
  notAttending,
  bgImage,
}) => {
  const { quantity, name, presence, address } = post;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Jumlah komentar per halaman

  // Hitung indeks untuk pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Fungsi untuk mengganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div
      ref={ref9} // Gunakan ref9 untuk memantau container
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={`p-6 rounded-lg shadow-lg max-w-md w-full text-center border border-gray-300 ${
          inView9 ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Judul */}
        <h2
          className={`text-2xl md:text-4xl charm-bold text-[#444444] drop-shadow-lg mb-2 ${
            inView9 ? "animate-letter-spacing delay-100" : "opacity-0"
          }`}
        >
          Wishes
        </h2>
        <p
          className={`text-[#3A3A3A] text-xs hedvig-letters-serif-text p-2 rounded-lg ${
            inView9 ? "animate-fade-in-scale delay-200" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa serta
          harapan kepada kedua mempelai. Atas kehadirannya kami ucapkan
          Terimakasih
        </p>

        {/* Statistik Hadir/Tidak Hadir
        <div
          className={`flex justify-center gap-4 my-4 ${
            inView9 ? "animate-fade-in-scale delay-300" : "opacity-0"
          }`}
        >
          <div className="bg-[#B6CFC4] px-4 py-2 rounded text-[#2F4F4F] font-semibold charm-regular">
            ✅ {attending} Hadir
          </div>
          <div className="bg-[#FADADD] px-4 py-2 rounded text-[#5C2A4C] font-semibold charm-regular">
            ❌ {notAttending} Tidak Hadir
          </div>
        </div> */}

        {/* Formulir */}
        <form className="space-y-3 my-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md bg-[#FDFBF7] charm-bold ${
              inView9 ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          />
          <input
            type="text"
            placeholder="Pesan"
            value={address}
            onChange={(e) => setPost({ ...post, address: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md bg-[#FDFBF7] charm-bold ${
              inView9 ? "animate-fade-in-up delay-600" : "opacity-0"
            }`}
          />
          {/* Tombol Hadir/Tidak Hadir */}
          <div
            className={`flex gap-2 ${
              inView9 ? "animate-fade-in-up delay-700" : "opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() => setPost({ ...post, presence: true })}
              className={`flex-1 py-2 rounded-md font-semibold charm-regular ${
                presence === true
                  ? "bg-green-500 text-white"
                  : "bg-[#B6CFC4] text-[#2F4F4F]"
              }`}
            >
              Hadir
            </button>
            <button
              type="button"
              onClick={() => setPost({ ...post, presence: false })}
              className={`flex-1 py-2 rounded-md font-semibold charm-regular ${
                presence === false
                  ? "bg-red-500 text-white"
                  : "bg-[#FADADD] text-[#5C2A4C]"
              }`}
            >
              Tidak Hadir
            </button>
          </div>
          {presence && (
            <input
              type="number"
              placeholder="Jumlah Tamu"
              value={quantity}
              onChange={(e) => setPost({ ...post, quantity: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md bg-[#FDFBF7] hedvig-letters-serif-text ${
                inView9 ? "animate-fade-in-scale delay-500" : "opacity-0"
              }`}
            />
          )}
          {/* Tombol Kirim */}
          <button
            type="submit"
            className={`w-full bg-[#D9C5B2] py-1 rounded-md text-3xl font-semibold text-white montecarlo-regular ${
              inView9 ? "animate-fade-in-up delay-800" : "opacity-0"
            }`}
            onClick={createPost}
          >
            Kirim
          </button>
        </form>

        {/* Daftar Komentar */}
        <div
          className={`mt-6 text-left ${
            inView9 ? "animate-fade-in-up delay-900" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-semibold mb-2 text-[#444444] tangerine-bold">
            Komentar:
          </h3>
          <div className="space-y-2 h-112 overflow-y-auto">
            {currentPosts.map((post) => (
              <div
                className="bg-[#FDFBF7] p-3 rounded-lg shadow border border-gray-300"
                key={post.id}
              >
                <p className="font-semibold text-[#444444] charm-bold">
                  {post.name} {post.presence ? "✅" : "❌"}
                </p>
                <p className="text-[#3A3A3A] hedvig-letters-serif-text">
                  {post.address}
                </p>
                <p className="text-[#3A3A3A] text-sm hedvig-letters-serif-text">
                  {new Date(post.time).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({
              length: Math.ceil(posts.length / postsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-md tangerine-regular ${
                  currentPage === index + 1
                    ? "bg-[#D9C5B2] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPSection;

{
  /* <h3 className="font-semibold mb-2 text-gray-700">Komentar:</h3> */
}
{
  /* <div className="max-h-80 overflow-y-auto space-y-2">
                {posts.map((post) => (
                  <div
                    className="bg-white p-3 rounded-lg shadow border border-gray-300"
                    key={post.id}
                  >
                    <p className="font-semibold text-gray-700">
                      {post.name} {post.presence ? "✅" : "❌"}
                    </p>
                    <p className="text-gray-600">{post.address}</p>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.time).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div> */
}
