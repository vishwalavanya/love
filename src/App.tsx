import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Send, Trash2, Bell, BellOff } from 'lucide-react';
// ⚠️ Firebase is disabled temporarily
// import { requestFCMToken, onForegroundMessage } from './firebase';
import { useChat } from './hooks/useChat';
import ThoughtCloud from './components/ThoughtCloud';
import ChatBubble from './components/ChatBubble';

type Nickname = "Vishwa" | "Navya";

function App() {
  const [currentUser, setCurrentUser] = useState<Nickname | null>(null);
  const [inputNickname, setInputNickname] = useState("");
  const [message, setMessage] = useState("");
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [isReplyMode, setIsReplyMode] = useState(false);
  
  const { msgs, send, clear } = useChat(currentUser!);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  // 🔒 Temporarily disabling Firebase for GitHub Pages deployment
  // useEffect(() => {
  //   if (currentUser && notificationsOn && "Notification" in window) {
  //     if (Notification.permission === 'denied') {
  //       setNotificationsOn(false);
  //       return;
  //     }

  //     requestFCMToken().then(token => {
  //       if (token) console.log('FCM token:', token);
  //     }).catch(err => {
  //       console.error('FCM error:', err);
  //       if (err.code === 'messaging/permission-blocked') {
  //         setNotificationsOn(false);
  //       }
  //     });

  //     const unsubscribe = onForegroundMessage((payload) => {
  //       console.log('Foreground message:', payload);
  //     });

  //     return unsubscribe;
  //   }
  // }, [currentUser, notificationsOn]);

  const handleNicknameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nickname = inputNickname.trim().toLowerCase();

    if (nickname === "vishwa" || nickname === "navya") {
      const properNickname = nickname === "vishwa" ? "Vishwa" : "Navya";
      setCurrentUser(properNickname as Nickname);
      setAccessDenied(false);
    } else {
      setAccessDenied(true);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && currentUser) {
      await send(message.trim(), isReplyMode);
      setMessage("");
      setIsReplyMode(false);
    }
  };

  const handleClearChat = async () => {
    if (showClearConfirm) {
      await clear();
      setShowClearConfirm(false);
    } else {
      setShowClearConfirm(true);
      setTimeout(() => setShowClearConfirm(false), 3000);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
                      flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-blue-200 text-6xl animate-pulse">📚</div>
          <div className="absolute top-32 right-20 text-indigo-200 text-4xl animate-bounce">🧠</div>
          <div className="absolute bottom-40 left-32 text-purple-300 text-5xl animate-pulse">❓</div>
          <div className="absolute bottom-20 right-16 text-blue-300 text-3xl animate-bounce">💡</div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md 
                        border border-blue-200 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
                           bg-clip-text text-transparent mb-2">
              GK Quiz Portal
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              Study Discussion
              <BookOpen className="w-4 h-4 text-blue-400" />
            </p>
          </div>

          {accessDenied && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-red-600 text-center font-medium">
                Access denied. Only Vishwa and Navya can enter.
              </p>
            </div>
          )}

          <form onSubmit={handleNicknameSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Enter your study name
              </label>
              <input
                type="text"
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blue-200 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-100 
                           outline-none transition-all"
                placeholder="Enter your name "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 
                         text-white py-3 rounded-2xl font-medium 
                         hover:from-blue-600 hover:to-indigo-600 
                         transform hover:scale-105 transition-all duration-200 
                         shadow-lg hover:shadow-xl"
            >
              Start Study Session
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-pink-200 px-4 py-3 
                      sticky top-0 z-20 shadow-sm">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
                           bg-clip-text text-transparent">
              GK Study Discussion
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setNotificationsOn(!notificationsOn)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
                         transition-all ${
                notificationsOn 
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {notificationsOn ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
              {notificationsOn ? 'On' : 'Off'}
            </button>
            
            <button
              onClick={handleClearChat}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
                         transition-all ${
                showClearConfirm
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              {showClearConfirm ? 'Confirm?' : 'Clear'}
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="max-w-2xl mx-auto p-4 pb-24">
        <div className="space-y-4">
          {msgs.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <p className="text-gray-500 italic">
                Start your study discussion...
              </p>
            </div>
          ) : (
            msgs.map((msg: any) => (
              <div key={msg.id}>
                {msg.isReply ? (
                  <ThoughtCloud 
                    text={msg.text} 
                    isRobot={true} 
                    isOwn={msg.by === currentUser} 
                  />
                ) : msg.by === currentUser ? (
                  <ChatBubble text={msg.text} isOwn={true} />
                ) : (
                  <div className="flex items-start gap-3 mb-4 animate-slide-in-left">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 
                                    rounded-full flex items-center justify-center text-white text-sm">
                      {msg.by === "Vishwa" ? "👨🏻" : "👩🏻"}
                    </div>
                    <div className="max-w-[280px] bg-white border border-gray-200 
                                    rounded-2xl rounded-tl-lg px-4 py-3 shadow-sm">
                      <p className="text-sm text-gray-800">{msg.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm 
                      border-t border-blue-200 p-4">
        <form onSubmit={handleSendMessage} className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <button
              type="button"
              onClick={() => setIsReplyMode(!isReplyMode)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                         transition-all ${
                isReplyMode 
                  ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                  : 'bg-gray-100 text-gray-600 border border-gray-300'
              }`}
            >
              🤖 {isReplyMode ? 'Robot Reply Mode ON' : 'Normal Mode'}
            </button>
          </div>
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isReplyMode ? "Type your robot reply..." : "Type your message..."}
                className="w-full px-4 py-3 rounded-xl border border-blue-200 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-100 
                           outline-none resize-none transition-all"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
            </div>
            <button
              type="submit"
              disabled={!message.trim()}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
                         p-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:scale-105 transition-all duration-200 
                         shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Decorative Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-5 text-blue-200 text-2xl animate-bounce 
                        animation-delay-1000">📚</div>
        <div className="absolute top-40 right-8 text-indigo-200 text-xl animate-pulse 
                        animation-delay-2000">🧠</div>
        <div className="absolute bottom-32 left-12 text-purple-300 text-3xl animate-bounce 
                        animation-delay-3000">💡</div>
      </div>
    </div>
  );
}

export default App;
