// src/components/comments/CommentsList.tsx

/**
 * @description
 * Componente CommentsList: muestra la lista de comentarios asociados a un post.
 * Recibe el postId como prop y, en la versión final, obtendrá los comentarios desde la API.
 * Por ahora, los comentarios se pasarán como prop o se simularán hasta conectar la API.
 *
 * Cada comentario se muestra con su autor (si lo hubiera), fecha y contenido.
 * Si el usuario es el autor, se mostrarán botones de editar/borrar (preparados para el futuro).
 *
 * @param {string} postId - ID único del post al que pertenecen los comentarios.
 * @param {Array<Comment>} [comments] - (Opcional) Lista de comentarios a mostrar (útil para pruebas).
 * @returns {JSX.Element} Lista renderizada de comentarios.
 */

"use client"
import React, { useState, useEffect, useCallback } from 'react';

// Definición del tipo Comment para claridad didáctica.
export interface Comment {
  id: string;
  postId: string;
  authorName?: string;
  content: string;
  createdAt: string;
}

interface CommentsListProps {
  postId: string;
}

/**
 * Componente funcional que renderiza la lista de comentarios de un post.
 * Obtiene los comentarios desde la API en tiempo real usando fetch.
 * Muestra estados de carga, error y lista vacía.
 */
const CommentsList: React.FC<CommentsListProps> = ({ postId }) => {
  // Estado local para los comentarios
  const [comments, setComments] = useState<Comment[]>([]);
  // Estado de carga
  const [loading, setLoading] = useState(true);
  // Estado de error
  const [error, setError] = useState('');

  /**
   * Función para cargar los comentarios desde la API
   */
  const fetchComments = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      if (!res.ok) throw new Error('Error al cargar los comentarios');
      const data = await res.json();
      setComments(data);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  // Efecto para cargar los comentarios al montar el componente o cambiar el postId
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  // Permite a CommentForm refrescar la lista tras añadir un comentario
  // (Se puede pasar fetchComments como prop si se desea)
  if (typeof window !== 'undefined') {
    (window as Window & { refreshComments?: () => void }).refreshComments = fetchComments;
  }

  if (loading) {
    return <div className="text-gray-500 text-center py-4">Cargando comentarios...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  if (!comments.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No hay comentarios todavía. ¡Sé el primero en opinar!
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6 w-full overflow-hidden">
      {/* Recorremos y renderizamos cada comentario */}
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 shadow-sm w-full break-words"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {comment.authorName || 'Anónimo'}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            
            {/* Botones de acción (solo para el autor en el futuro) */}
            <div className="flex space-x-2">
              <button
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                onClick={() => {
                  // TODO: Implementar edición
                  console.log('Editar comentario:', comment.id);
                }}
              >
                Editar
              </button>
              <button
                className="text-sm text-red-600 hover:text-red-800 transition-colors"
                onClick={() => {
                  // TODO: Implementar eliminación
                  console.log('Eliminar comentario:', comment.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
