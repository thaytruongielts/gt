
import React, { useState, useEffect, useCallback } from 'react';
import { EXPRESSIONS, CATEGORIES } from './constants';
import { QuizStatus, Question, Expression } from './types';

// Components
const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6 overflow-hidden">
    <div 
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

const QuizHeader = () => (
  <header className="py-8 px-4 text-center bg-white shadow-sm border-b border-slate-100 mb-8">
    <h1 className="text-3xl font-bold text-slate-900 mb-2">English Mastery Quiz</h1>
    <p className="text-slate-500 max-w-md mx-auto">Master common daily expressions through 60 intensive questions.</p>
  </header>
);

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>(QuizStatus.IDLE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const QUESTION_COUNT = 60; // User requested 60 questions

  const generateQuiz = useCallback(() => {
    // Shuffle expressions and take 60
    const shuffled = [...EXPRESSIONS].sort(() => Math.random() - 0.5);
    // Ensure we don't try to take more than available, though we have 100+ now
    const subset = shuffled.slice(0, Math.min(shuffled.length, QUESTION_COUNT));

    const quizQuestions: Question[] = subset.map(exp => {
      // Get 3 random WRONG answers
      const otherExpressions = EXPRESSIONS.filter(e => e.vietnamese !== exp.vietnamese);
      const randomWrongOnes = [...otherExpressions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(e => e.vietnamese);
      
      const options = [exp.vietnamese, ...randomWrongOnes].sort(() => Math.random() - 0.5);
      
      return {
        expression: exp,
        options
      };
    });

    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setCorrectCount(0);
    setStatus(QuizStatus.PLAYING);
    setFeedback(null);
    setSelectedOption(null);
  }, []);

  const handleSelectOption = (option: string) => {
    if (feedback) return;

    setSelectedOption(option);
    const isCorrect = option === questions[currentIndex].expression.vietnamese;
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setFeedback({ isCorrect: true, message: 'Chính xác! Làm tốt lắm.' });
    } else {
      setFeedback({ isCorrect: false, message: 'Rất tiếc, câu trả lời chưa đúng.' });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFeedback(null);
      setSelectedOption(null);
    } else {
      setStatus(QuizStatus.FINISHED);
    }
  };

  const finalScore = questions.length > 0 ? (10 * correctCount / questions.length).toFixed(1) : "0";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <QuizHeader />

      <main className="flex-grow container mx-auto px-4 pb-12">
        {status === QuizStatus.IDLE && (
          <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-2xl shadow-xl border border-slate-100 mt-10">
            <div className="mb-6 inline-flex p-4 rounded-full bg-blue-50 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Thử thách 60 câu hỏi</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Bạn sẽ làm bài trắc nghiệm với 60 mẫu câu ngẫu nhiên từ kho dữ liệu hơn 100 câu. 
              Hệ thống sẽ không hiển thị đáp án đúng nếu bạn chọn sai. Chúc bạn may mắn!
            </p>
            <button 
              onClick={generateQuiz}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
            >
              Bắt đầu ngay
            </button>

            <div className="mt-12 text-left grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-8">
               {CATEGORIES.slice(0, 12).map(cat => (
                 <div key={cat.id} className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                   • {cat.translation}
                 </div>
               ))}
            </div>
          </div>
        )}

        {status === QuizStatus.PLAYING && questions.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4 px-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Tiến độ: {currentIndex + 1} / {questions.length}
              </span>
              <span className="text-xs font-bold text-blue-600 uppercase">
                Điểm: {(10 * correctCount / questions.length).toFixed(1)} / 10
              </span>
            </div>
            <ProgressBar current={currentIndex + 1} total={questions.length} />

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="mb-8 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase mb-4 tracking-widest">
                  {questions[currentIndex].expression.category}
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  "{questions[currentIndex].expression.english}"
                </h3>
              </div>

              <div className="grid gap-3 mb-8">
                {questions[currentIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={!!feedback}
                    onClick={() => handleSelectOption(option)}
                    className={`
                      w-full p-4 text-left rounded-xl border-2 font-medium transition-all
                      ${selectedOption === option 
                        ? (feedback?.isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                        : 'border-slate-50 hover:border-blue-100 hover:bg-slate-50 text-slate-700'}
                      ${feedback && option !== selectedOption ? 'opacity-40' : ''}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mr-3 text-xs font-bold text-slate-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              {feedback && (
                <div className={`p-5 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300 ${feedback.isCorrect ? 'bg-green-50 text-green-800 border border-green-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <p className="font-bold text-lg">{feedback.message}</p>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors text-sm"
                    >
                      {currentIndex === questions.length - 1 ? 'Kết thúc' : 'Câu tiếp theo'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {status === QuizStatus.FINISHED && (
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Kết quả cuối cùng</h2>
            <p className="text-slate-500 mb-10">Bạn đã hoàn thành thử thách 60 câu</p>

            <div className="flex flex-col items-center mb-10">
              <div className="relative mb-6">
                <svg className="w-48 h-48">
                  <circle className="text-slate-100" strokeWidth="8" stroke="currentColor" fill="transparent" r="80" cx="96" cy="96" />
                  <circle
                    className="text-blue-600 transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={2 * Math.PI * 80 * (1 - (Number(finalScore) / 10))}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="96"
                    cy="96"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-5xl font-black text-slate-900">{finalScore}</span>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Điểm 10</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
                <div className="text-center">
                  <p className="text-xs font-medium text-slate-400 uppercase">Đúng</p>
                  <p className="text-2xl font-bold text-green-600">{correctCount}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-slate-400 uppercase">Sai</p>
                  <p className="text-2xl font-bold text-red-500">{questions.length - correctCount}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={generateQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95"
              >
                Làm lại (60 câu mới)
              </button>
              <button 
                onClick={() => setStatus(QuizStatus.IDLE)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-10 rounded-xl transition-all"
              >
                Trang chủ
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-slate-400 text-[10px] border-t border-slate-100 bg-white">
        <p>Ứng dụng luyện tập 100+ mẫu câu giao tiếp • Mỗi lượt 60 câu ngẫu nhiên</p>
      </footer>
    </div>
  );
};

export default App;
