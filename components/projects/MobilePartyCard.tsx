export default function MobilePartyCard() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
          {/* 오른쪽 텍스트 영역 */}
          <div className="md:w-1/2 w-full p-8 order-2 md:order-1">
            <h3 
              className="text-3xl font-bold text-black dark:text-white mb-4"
              style={{ textTransform: 'uppercase' }}
            >
                Party Card
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
              This application is mobile invitation for special occasions such as party.
              This web application built with Next.js, Tailwind CSS.
            </p>

            {/* 버튼 링크 */}
            <div className="space-x-4">
              <a
                href="https://mobile-invitation-rouge.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-black dark:text-white font-semibold hover:bg-white hover:text-black transition rounded-full"
              >
                LIVE DEMO
              </a>
              <a
                href="https://github.com/hyeri0903/mobile-invitation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-black dark:text-white font-semibold hover:bg-white hover:text-black transition rounded-full"
              >
                VIEW CODE
              </a>
            </div>
          </div>
           {/* 오른쪽 이미지 영역 */}
           <div className="md:w-1/2 w-full hover:cursor-pointer order-1 md:order-2">
            <a href="https://mobile-invitation-rouge.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/pink.jpg" // public 폴더에 이미지 넣고 경로 지정
                alt="project screenshot"
                className="w-[450px] h-[300px] object-cover mx-auto transition-transform duration-1000 ease-out hover:scale-110"
              />
              </a>
          </div>
        </div>
    </div>
  );
}