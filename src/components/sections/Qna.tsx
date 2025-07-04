'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function Qna() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const response = await fetch('http://localhost:5001/api/qna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({question}),
      });
      const result = await response.json();
      setAnswer(result.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Sorry, something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Ask me anything</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="What do you want to know?"
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Thinking...' : 'Ask'}
          </Button>
        </div>
        {answer && (
          <div className="mt-4">
            <p>{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
