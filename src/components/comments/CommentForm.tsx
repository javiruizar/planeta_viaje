// src/components/comments/CommentForm.tsx

/**
 * @description
 * Componente CommentForm: formulario para añadir un comentario a un post.
 * Recibe el postId como prop y, en la versión final, enviará el comentario a la API.
 * Por ahora, simula el envío y valida que el comentario tenga al menos 14 caracteres.
 *
 * Incluye mensajes de error y éxito para mejorar la experiencia de usuario.
 *
 * @param {string} postId - ID único del post al que se asociará el comentario.
 * @param {function} [onCommentAdded] - (Opcional) Callback para actualizar la lista tras añadir un comentario.
 * @returns {JSX.Element} Formulario de envío de comentario.
 */
"use client"
import React, { useState } from 'react';

interface CommentFormProps {
  postId: string;
  onCommentAdded?: () => void; // Callback opcional para refrescar la lista
}

/**
 * Componente funcional que renderiza el formulario de comentarios.
 */
const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentAdded }) => {
  // Estado local para el contenido del comentario
  const [content, setContent] = useState('');
  // Estado local para el email del autor
  const [authorName, setAuthorName] = useState('');
  // Estado para mensajes de error y éxito
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Función auxiliar para validar email de forma sencilla.
   * Retorna true si el email es válido.
   */
  const isValidEmail = (email: string) => {
    // Expresión regular básica para validar emails
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  /**
   * Maneja el envío del formulario.
   * Valida la longitud mínima, email y envía el comentario a la API.
   * Al éxito, refresca la lista de comentarios si es posible.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validación: mínimo 14 caracteres
    if (content.trim().length > 140) {
      setError('El comentario debe 140 caracteres maximo.');
      return;
    }
    // Validación: email obligatorio
    if (!authorName.trim()) {
      setError('Debes introducir tu email para publicar el comentario.');
      return;
    }
    // Validación de formato de email
    if (!isValidEmail(authorName)) {
      setError('Debes introducir un email válido.');
      return;
    }

    setLoading(true);
    try {
      // Llamada real a la API para crear el comentario
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          content,
          authorName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el comentario');
      }

      setSuccess('¡Comentario enviado correctamente!');
      setContent('');
      setAuthorName('');
      // Refresca la lista de comentarios si hay callback o window.refreshComments
      if (onCommentAdded) {
        onCommentAdded();
      } else if (typeof window !== 'undefined') {
        const win = window as unknown as { refreshComments?: () => void };
        if (win.refreshComments) {
          win.refreshComments();
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error al enviar el comentario';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 w-full overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">Añadir comentario</h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="w-full">
          <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="tu@email.com"
            required
          />
        </div>
        
        <div className="w-full">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Comentario *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
            placeholder="Escribe tu comentario aquí..."
            required
          />
          <div className="mt-1 text-sm text-gray-500">
            {content.length}/140 caracteres
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Enviando...' : 'Enviar comentario'}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
