export default function BloomDiary() {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
            {/* 왼쪽 이미지 영역 */}
            <div className="md:w-1/2 w-full transition-transform duration-300 hover:cursor-pointer">
              <a href="https://bloom-english-diary.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/bloomdiary.png" // public 폴더에 이미지 넣고 경로 지정
                  alt="project screenshot"
                  className="w-[450px] h-[300px] object-cover mx-auto transition-transform duration-1000 ease-out hover:scale-110"
                />
              </a>
            </div>
  
            {/* 오른쪽 텍스트 영역 */}
            <div className="md:w-1/2 w-full p-8">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4 font-sans"
                  style={{ textTransform: 'uppercase' }}
              >
                Bloom English Diary
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-6">
                This project lets you write an English diary entry, select your CEFR level, and receive instant AI-powered feedback on grammar and vocabulary.
                It is built with React.js and Tailwind CSS, using Claude Code.
              </p>
  
              {/* 버튼 링크 */}
              <div className="space-x-4">
                <a
                  href="https://bloom-english-diary.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-white text-black dark:text-white font-semibold hover:bg-white hover:text-black transition rounded-full"
                >
                  LIVE DEMO
                </a>
                <a
                  href="https://github.com/hyeri0903/bloom-diary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-white text-black dark:text-white font-semibold hover:bg-white hover:text-black transition rounded-full"
                >
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
