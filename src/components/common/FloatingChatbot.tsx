'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Himanshu's personal assistant. Feel free to ask me anything about his background, skills, experience, or projects!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/qna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessage = (message: Message) => {
    const isBot = message.sender === 'bot';
    
    return (
      <div
        key={message.id}
        className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
      >
        <div
          className={`flex max-w-[85%] sm:max-w-[80%] ${
            isBot ? 'flex-row' : 'flex-row-reverse'
          } items-start gap-2`}
        >
          <div
            className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full flex-shrink-0 ${
              isBot ? 'bg-primary text-primary-foreground' : 'bg-muted'
            }`}
          >
            {isBot ? <Bot className="h-3 w-3 sm:h-4 sm:w-4" /> : <User className="h-3 w-3 sm:h-4 sm:w-4" />}
          </div>
          <div
            className={`rounded-lg px-2 py-1 sm:px-3 sm:py-2 break-words ${
              isBot
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-80 md:w-96 h-[calc(100vh-6rem)] sm:h-80 md:h-[500px] shadow-xl z-50 flex flex-col max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-3 sm:px-4 py-2 sm:py-3 border-b">
            <CardTitle className="text-xs sm:text-sm font-medium truncate">
              Chat with Himanshu's Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 min-h-0 overflow-hidden">
            <ScrollArea className="flex-1 px-3 sm:px-4 py-2 overflow-y-auto">
              <div className="space-y-3 sm:space-y-4">
                {messages.map(renderMessage)}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <div className="bg-muted text-muted-foreground rounded-lg px-2 py-1 sm:px-3 sm:py-2">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>
            <div className="p-3 sm:p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 text-xs sm:text-sm h-8 sm:h-10"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  size="icon"
                  className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingChatbot;
