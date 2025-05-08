

// src/components/chat/Message.jsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Lottie from 'lottie-react'
import robotAnimation from '../../assets/robot-animation.json'

export default function Message({ text, sender, timestamp }) {
  const isUser = sender === 'user'
  
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 gap-2`}>
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#6E56CF] to-[#9B8AFF] flex items-center justify-center">
          <Lottie 
            animationData={robotAnimation} 
            loop={true}
            style={{ width: 32, height: 32 }}
          />
        </div>
      )}
      
      {/* Message bubble */}
      <div 
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isUser 
            ? 'bg-gradient-to-br from-[#6E56CF] to-[#9B8AFF] text-white rounded-tr-none' 
            : 'bg-gray-100 dark:bg-[#2D1B4D] text-gray-800 dark:text-gray-200 rounded-tl-none'
        } shadow-md`}
      >
        {isUser ? (
          <div className="text-sm whitespace-pre-wrap">{text}</div>
        ) : (
          <div className="prose prose-sm max-w-none text-sm dark:prose-invert">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, inline, className, children, ...props}) {
                  return (
                    <code className="bg-gray-200 dark:bg-[#3A1D66] p-1 rounded" {...props}>
                      {children}
                    </code>
                  )
                },
                a({node, children, ...props}) {
                  return (
                    <a className="text-[#6E56CF] dark:text-[#9B8AFF] hover:underline" {...props}>
                      {children}
                    </a>
                  )
                }
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        )}
        <div className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
          {formatTime(new Date(timestamp))}
        </div>
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-[#3A1D66] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
  )
}
// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import vsDark from 'prism-react-renderer/themes/vsDark';
// import vsLight from 'prism-react-renderer/themes/vsLight';import Lottie from 'lottie-react';
// import robotAnimation from '../../assets/robot-animation.json';
// import { useApp } from '../../context/AppContext';

// const SyntaxHighlighter = ({ children, language, darkMode }) => {
//   return (
//     <Highlight
//       {...defaultProps}
//       code={children.trim()}
//       language={language}
//       theme={darkMode ? vsDark : vsLight}
//     >
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <pre className={className} style={{ ...style, padding: '1rem', borderRadius: '0.5rem' }}>
//           {tokens.map((line, i) => (
//             <div key={i} {...getLineProps({ line })}>
//               {line.map((token, key) => (
//                 <span key={key} {...getTokenProps({ token })} />
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   );
// };

// export default function Message({ text, sender, timestamp }) {
//   const { darkMode } = useApp();
//   const isUser = sender === 'user';

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 gap-2`}>
//       {/* Avatar */}
//       {!isUser && (
//         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#6E56CF] to-[#9B8AFF] flex items-center justify-center">
//           <Lottie
//             animationData={robotAnimation}
//             loop={true}
//             style={{ width: 32, height: 32 }}
//           />
//         </div>
//       )}

//       {/* Message bubble */}
//       <div
//         className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
//           isUser
//             ? 'bg-gradient-to-br from-[#6E56CF] to-[#9B8AFF] text-white rounded-tr-none'
//             : 'bg-gray-100 dark:bg-[#2D1B4D] text-gray-800 dark:text-gray-200 rounded-tl-none'
//         } shadow-md`}
//       >
//         {isUser ? (
//           <div className="text-sm whitespace-pre-wrap">{text}</div>
//         ) : (
//           <div className="prose prose-sm max-w-none text-sm dark:prose-invert">
//             <ReactMarkdown
//               remarkPlugins={[remarkGfm]}
//               components={{
//                 code({ node, inline, className, children, ...props }) {
//                   const match = /language-(\w+)/.exec(className || '');
//                   return !inline && match ? (
//                     <SyntaxHighlighter
//                       language={match[1]}
//                       darkMode={darkMode}
//                     >
//                       {String(children).replace(/\n$/, '')}
//                     </SyntaxHighlighter>
//                   ) : (
//                     <code
//                       className="bg-gray-200 dark:bg-[#3A1D66] p-1 rounded text-sm"
//                       {...props}
//                     >
//                       {children}
//                     </code>
//                   );
//                 },
//                 a({ node, children, ...props }) {
//                   return (
//                     <a
//                       className="text-[#6E56CF] dark:text-[#9B8AFF] hover:underline"
//                       {...props}
//                     >
//                       {children}
//                     </a>
//                   );
//                 }
//               }}
//             >
//               {text}
//             </ReactMarkdown>
//           </div>
//         )}
//         <div className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
//           {formatTime(new Date(timestamp))}
//         </div>
//       </div>

//       {/* User avatar */}
//       {isUser && (
//         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-[#3A1D66] flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-gray-600 dark:text-gray-300"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//             />
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// }
