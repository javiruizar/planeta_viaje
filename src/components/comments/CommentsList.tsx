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
import React, { useEffect, useState } from 'react';

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
  const fetchComments = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      if (!res.ok) throw new Error('Error al cargar los comentarios');
      const data = await res.json();
      setComments(data);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar los comentarios al montar el componente o cambiar el postId
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  // Permite a CommentForm refrescar la lista tras añadir un comentario
  // (Se puede pasar fetchComments como prop si se desea)
  (window as any).refreshComments = fetchComments;

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
    <div className="space-y-4 mt-6">
      {/* Recorremos y renderizamos cada comentario */}
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 shadow-sm"
        >
          {/* Cabecera del comentario: autor y fecha */}
          <div className="flex items-center justify-between mb-2">
            {/* Mostramos el autor del comentario usando el campo authorName */}
            <span className="font-semibold text-blue-700 dark:text-blue-300">
              {comment.authorName || 'Anónimo'}
            </span>
            <span className="text-xs text-gray-500">
              {/* Fecha formateada en español */}
              {new Date(comment.createdAt).toLocaleString('es-ES', {
                day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
              })}
            </span>
          </div>
          {/* Contenido del comentario */}
          <div className="text-gray-800 dark:text-gray-200">
            {comment.content}
          </div>
          {/* Botones de editar/borrar (sólo visibles si el usuario es el autor; lógica futura) */}
          {/* <div className="flex gap-2 mt-2">
            <button className="text-xs text-blue-500 hover:underline">Editar</button>
            <button className="text-xs text-red-500 hover:underline">Borrar</button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
