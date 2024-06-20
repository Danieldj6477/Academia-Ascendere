import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const EmojiRating = ({ question }) => {
  const [selected, setSelected] = useState(null);
  const emojis = ['😃', '🙂', '😐', '🙁'];

  return (
    <Form.Group controlId="emojiRating" className="mb-3">
      <Form.Label>{question}</Form.Label>
      <div>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            onClick={() => setSelected(index)}
            style={{
              cursor: 'pointer',
              fontSize: '2rem',
              margin: '0 10px',
              border: selected === index ? '2px solid blue' : 'none',
              borderRadius: '50%',
              padding: '5px',
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </Form.Group>
  );
};

export default EmojiRating;
