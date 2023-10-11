// src/components/PostComments/PostComments.test.tsx

import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComments />);
    expect(screen.getByTestId('post-comments-form')).toBeInTheDocument();
  });

  it('Deve adicionar dois comentários corretamente', () => {
    render(<PostComments />);
    
    // Find the textarea and button using data-testid
    const textarea = screen.getByTestId('post-comments-form-textarea');
    const button = screen.getByTestId('post-comments-form-button');
    
    // Add the first comment
    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    // Add the second comment
    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    // Check if both comments are rendered
    expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
    expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
  });
});
