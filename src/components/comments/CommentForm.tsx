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
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, content, authorName }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al enviar el comentario');
      }
      setSuccess('¡Comentario enviado correctamente!');
      setContent('');
      setAuthorName('');
      // Refresca la lista de comentarios si hay callback o window.refreshComments
      if (onCommentAdded) {
        onCommentAdded();
      } else if (typeof window !== 'undefined' && (window as any).refreshComments) {
        (window as any).refreshComments();
      }
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al enviar el comentario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow mt-8">
      {/* Campo de texto para el comentario */}
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        Escribe tu comentario
      </label>
      <textarea
        id="comment"
        className="w-full border rounded p-2 mb-2 dark:bg-gray-800 dark:text-gray-100"
        rows={3}
        placeholder="Comparte tu opinión..."
        value={content}
        onChange={e => setContent(e.target.value)}
        disabled={loading}
      />
      {/* Campo de email obligatorio */}
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 mt-4">
        Tu email (obligatorio)
      </label>
      <input
        id="email"
        type="email"
        className="w-full border rounded p-2 mb-2 dark:bg-gray-800 dark:text-gray-100"
        placeholder="tucorreo@ejemplo.com"
        value={authorName}
        onChange={e => setAuthorName(e.target.value)}
        disabled={loading}
        required
      />
      {/* Mensaje de error */}
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      {/* Mensaje de éxito */}
      {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
      {/* Botón de enviar */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded mt-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar comentario'}
      </button>
    </form>
  );
};

export default CommentForm;
