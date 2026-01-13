
import { Expression, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, name: "Hello", translation: "Xin chào" },
  { id: 2, name: "Goodbye", translation: "Tạm biệt" },
  { id: 3, name: "Thank you", translation: "Cảm ơn" },
  { id: 4, name: "Respond to thank you", translation: "Đáp lại lời cảm ơn" },
  { id: 5, name: "Sorry", translation: "Xin lỗi" },
  { id: 6, name: "Saying No", translation: "Nói không" },
  { id: 7, name: "Giving an opinion", translation: "Đưa ra quan điểm" },
  { id: 8, name: "Having a guess", translation: "Phỏng đoán" },
  { id: 9, name: "Advice and suggestions", translation: "Lời khuyên & đề nghị" },
  { id: 10, name: "Reminding people", translation: "Nhắc nhở" },
  { id: 11, name: "Like", translation: "Thích" },
  { id: 12, name: "Dislike", translation: "Không thích" },
  { id: 13, name: "Don't be worried", translation: "Trấn an" },
  { id: 14, name: "Good idea", translation: "Ý tưởng hay" },
  { id: 15, name: "Praising", translation: "Khen ngợi" },
  { id: 16, name: "Cheering", translation: "Khích lệ" },
  { id: 17, name: "Ask Information", translation: "Hỏi thăm tin tức" },
  { id: 18, name: "Health/Life", translation: "Sức khỏe/Cuộc sống" },
  { id: 19, name: "Well-being", translation: "Sức khỏe tốt" },
  { id: 20, name: "Don't know", translation: "Khi không biết" },
  { id: 21, name: "Surprise", translation: "Ngạc nhiên" },
  { id: 22, name: "Good/Impressive", translation: "Khen điều tốt" },
  { id: 23, name: "Angry", translation: "Khi tức giận" },
  { id: 24, name: "Suggestions", translation: "Gợi ý" },
  { id: 25, name: "Asking help", translation: "Xin giúp đỡ" },
  { id: 26, name: "Suggest giving help", translation: "Đề nghị giúp đỡ" },
  { id: 27, name: "Ask opinion", translation: "Hỏi quan điểm" },
  { id: 28, name: "Short comms", translation: "Giao tiếp ngắn" }
];

export const EXPRESSIONS: Expression[] = [
  // Previous Batch
  { category: "Hello", english: "Hey man.", vietnamese: "Ê anh bạn, hoặc Chào." },
  { category: "Hello", english: "How’s it going?", vietnamese: "Dạo này bạn thế nào?" },
  { category: "Hello", english: "What’s up?", vietnamese: "Có chuyện gì đó?" },
  { category: "Goodbye", english: "Bye!", vietnamese: "Tạm biệt!" },
  { category: "Thank you", english: "Thanks a lot.", vietnamese: "Cảm ơn rất nhiều." },
  { category: "Sorry", english: "My bad.", vietnamese: "Lỗi của tôi." },

  // Ask for information
  { category: "Ask Information", english: "Can you tell me...?", vietnamese: "Bạn có thể nói cho tôi biết...?" },
  { category: "Ask Information", english: "Could you tell me...?", vietnamese: "Làm ơn nói cho tôi...?" },
  { category: "Ask Information", english: "I'd like to know...", vietnamese: "Tôi muốn biết...?" },
  { category: "Ask Information", english: "Have you got any idea...?", vietnamese: "Bạn có ý tưởng nào cho...?" },
  { category: "Ask Information", english: "Would you mind + verb + ing...?", vietnamese: "Bạn có phiền khi...?" },

  // Ask about health/life
  { category: "Health/Life", english: "How are things?", vietnamese: "Mọi thứ ổn chứ?" },
  { category: "Health/Life", english: "How have you been?", vietnamese: "Dạo này thế nào? / Hồi này sao rồi?" },
  { category: "Health/Life", english: "What have you been up to?", vietnamese: "Dạo này cậu làm gì?" },
  { category: "Health/Life", english: "Alright?", vietnamese: "Ổn chứ?" },

  // Ways to say that you're well
  { category: "Well-being", english: "I feel great.", vietnamese: "Tôi cảm thấy tuyệt/ kỳ diệu/ tốt." },
  { category: "Well-being", english: "Couldn't be better.", vietnamese: "Không thể tốt hơn." },
  { category: "Well-being", english: "Fit as a fiddle.", vietnamese: "Rất khỏe, rất sung sức." },
  { category: "Well-being", english: "Not bad.", vietnamese: "Không tồi." },

  // Don't know
  { category: "Don't know", english: "I've no idea.", vietnamese: "(Tôi e rằng), Tôi không biết." },
  { category: "Don't know", english: "I can't help you there.", vietnamese: "Xin lỗi, Tôi không thể giúp bạn." },
  { category: "Don't know", english: "I haven't got a clue.", vietnamese: "Tôi không biết một tí gì (về việc đang nhắc đến)." },
  { category: "Don't know", english: "Search me.", vietnamese: "Tôi không biết." },
  { category: "Don't know", english: "How should I know?", vietnamese: "Sao mà tôi biết được?" },

  // Surprise
  { category: "Surprise", english: "What a surprise!", vietnamese: "Thật đáng kinh ngạc!" },
  { category: "Surprise", english: "That's the last thing I expected.", vietnamese: "Đó là điều cuối cùng tôi mong đợi." },
  { category: "Surprise", english: "You're kidding!", vietnamese: "Bạn đùa à!" },
  { category: "Surprise", english: "I'm speechless!", vietnamese: "Tôi không thể thốt nên lời nữa rồi!" },
  { category: "Surprise", english: "Unbelievable!", vietnamese: "Không thể nào tin được, tôi chưa bao giờ mong đợi nó." },

  // Say things are good
  { category: "Good/Impressive", english: "It's fantastic.", vietnamese: "Nó thật tuyệt." },
  { category: "Good/Impressive", english: "I'm very impressed.", vietnamese: "Thật ấn tượng." },
  { category: "Good/Impressive", english: "It's better than I expected.", vietnamese: "Tốt hơn những gì tôi mong đợi." },
  { category: "Good/Impressive", english: "Awesome!", vietnamese: "Tuyệt vời!" },

  // Saying when being angry
  { category: "Angry", english: "What a pain!", vietnamese: "Thật đau xót!" },
  { category: "Angry", english: "It's driving me up the wall.", vietnamese: "Điều đó làm tôi rất khó chịu và bực tức." },
  { category: "Angry", english: "I've had it up to here with...", vietnamese: "Tôi chịu hết nổi rồi..." },
  { category: "Angry", english: "It really gets on my nerves.", vietnamese: "Nó thật sự làm tôi bực mình." },
  { category: "Angry", english: "I'm sick and tired of...", vietnamese: "Tôi phát bệnh vì..." },
  { category: "Angry", english: "I'm fed up with it.", vietnamese: "Tôi chán ngấy với nó." },

  // Making suggestions
  { category: "Suggestions", english: "Why don't we go to the cinema?", vietnamese: "Tại sao chúng ta lại không đi xem phim nhỉ?" },
  { category: "Suggestions", english: "How about going to the cinema?", vietnamese: "Thế xem phim thì sao?" },
  { category: "Suggestions", english: "Seeing a film's a good idea.", vietnamese: "Xem phim cũng là 1 ý hay đấy." },

  // Asking for help
  { category: "Asking help", english: "Can you give me a hand with this?", vietnamese: "Bạn có thể giúp tôi một tay không?" },
  { category: "Asking help", english: "Can I ask a favour?", vietnamese: "Tôi có thể nhờ bạn giúp không?" },
  { category: "Asking help", english: "Could you spare a moment?", vietnamese: "Cho tôi xin một vài phút được không?" },
  { category: "Asking help", english: "Could you do me a favor?", vietnamese: "Bạn có thể làm cho tôi một việc được không?" },

  // Suggest giving help
  { category: "Suggest giving help", english: "Would you mind showing me...?", vietnamese: "Bạn có thể chỉ cho tôi...?" },
  { category: "Suggest giving help", english: "Do you have any free time on...?", vietnamese: "Bạn có thời gian rảnh vào ...?" },
  { category: "Suggest giving help", english: "I could really use your help.", vietnamese: "Tôi được biết bạn có rất nhiều kinh nghiệm về... và tôi thực sự muốn sự giúp đỡ của bạn." },

  // Ask somebody's opinion
  { category: "Ask opinion", english: "What do you think of...?", vietnamese: "Bạn nghĩ gì về...?" },
  { category: "Ask opinion", english: "How d'you feel (about...)?", vietnamese: "Bạn cảm thấy như thế nào về...?" },
  { category: "Ask opinion", english: "What are your views on...?", vietnamese: "Quan điểm của bạn về...là gì?" },
  { category: "Ask opinion", english: "How do you see the situation?", vietnamese: "Bạn thấy tình huống này như thế nào?" },

  // Short Communications (1-36 from latest list)
  { category: "Short comms", english: "Certainly!", vietnamese: "Chắc chắn rồi!" },
  { category: "Short comms", english: "Of course!", vietnamese: "Tất nhiên rồi!" },
  { category: "Short comms", english: "No problem!", vietnamese: "Không vấn đề gì" },
  { category: "Short comms", english: "Nevermind!", vietnamese: "Không sao (đáp lại một lời xin lỗi)" },
  { category: "Short comms", english: "You're welcome", vietnamese: "Không có gì (đáp lại lời cảm ơn)" },
  { category: "Short comms", english: "Congratulations!", vietnamese: "Chúc mừng!" },
  { category: "Short comms", english: "I totally agree with you", vietnamese: "Mình hoàn toàn đồng ý." },
  { category: "Short comms", english: "I'd love/like to.", vietnamese: "Mình/tớ thích lắm." },
  { category: "Short comms", english: "Thanks for your compliment!", vietnamese: "Cảm ơn vì lời khen!" },
  { category: "Short comms", english: "Have a nice day!", vietnamese: "Chúc ngày mới/cuối tuần/chuyến đi... vui vẻ." },
  { category: "Short comms", english: "Fingers crossed!", vietnamese: "Chúc may mắn!" },
  { category: "Short comms", english: "Break a leg!", vietnamese: "Chúc bạn thành công!" },
  { category: "Short comms", english: "Good job!", vietnamese: "Giỏi lắm!" },
  { category: "Short comms", english: "I'm glad you like it.", vietnamese: "Mình rất vui khi bạn thích nó!" },
  { category: "Short comms", english: "That's very kind of you.", vietnamese: "Bạn thật tốt." },
  { category: "Short comms", english: "No worries", vietnamese: "Đừng bận tâm." },
  { category: "Short comms", english: "Nice to meet you", vietnamese: "Rất vui được gặp bạn" },
  { category: "Short comms", english: "Just for fun!", vietnamese: "Cho vui thôi." },
  { category: "Short comms", english: "No kidding!", vietnamese: "Không đùa đâu!" },
  { category: "Short comms", english: "Dont' take it seriously!", vietnamese: "Đừng tưởng thật chứ!" },
  { category: "Short comms", english: "I'm just messing with you.", vietnamese: "Tôi đang trêu bạn thôi mà." },
  { category: "Short comms", english: "Keep it up", vietnamese: "Cứ tiếp tục phát huy." },
  { category: "Short comms", english: "To put it simply", vietnamese: "Nói cách khác" },
  { category: "Short comms", english: "Sincerely thanks.", vietnamese: "Thành thực cảm ơn." },
  { category: "Short comms", english: "Thank you in advance.", vietnamese: "Cảm ơn anh trước." },
  { category: "Short comms", english: "No words for my appreciation!", vietnamese: "Không một lời nói nào có thể diễn tả hết lòng biết ơn của tôi." }
];
