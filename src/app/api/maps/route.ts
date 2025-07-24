// src/app/api/maps/route.ts
// Endpoint seguro para obtener datos de mapas desde el servidor

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const zoom = searchParams.get('zoom') || '10';
    
    if (!location) {
      return NextResponse.json(
        { error: 'Location parameter is required' },
        { status: 400 }
      );
    }

    // Obtener la API key desde las variables de entorno del servidor
    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
    
    if (!googleMapsApiKey) {
      return NextResponse.json(
        { error: 'Google Maps API key not configured' },
        { status: 500 }
      );
    }

    // Función para obtener coordenadas de la localización
    const getCoordinates = (location: string) => {
      const coordinates: { [key: string]: { lat: number; lng: number } } = {
        'tailandia': { lat: 13.7563, lng: 100.5018 },
        'bangkok': { lat: 13.7563, lng: 100.5018 },
        'phuket': { lat: 7.8804, lng: 98.3923 },
        'chiang-mai': { lat: 18.7883, lng: 98.9853 },
        'españa': { lat: 40.4168, lng: -3.7038 },
        'madrid': { lat: 40.4168, lng: -3.7038 },
        'barcelona': { lat: 41.3851, lng: 2.1734 },
        'valencia': { lat: 39.4699, lng: -0.3763 },
        'japon': { lat: 35.6762, lng: 139.6503 },
        'tokio': { lat: 35.6762, lng: 139.6503 },
        'kyoto': { lat: 35.0116, lng: 135.7681 },
        'osaka': { lat: 34.6937, lng: 135.5023 },
        'islandia': { lat: 64.9631, lng: -19.0208 },
        'reikiavik': { lat: 64.1353, lng: -21.8952 },
        'vik': { lat: 63.4194, lng: -19.0073 },
      };
      
      return coordinates[location.toLowerCase()] || coordinates['tailandia'];
    };

    const coords = getCoordinates(location);
    
    // Crear la URL del iframe con la API key del servidor
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${coords.lat},${coords.lng}&zoom=${zoom}`;
    
    // Crear la URL para abrir en Google Maps
    const mapsUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=${zoom}`;

    return NextResponse.json({
      success: true,
      data: {
        location,
        coordinates: coords,
        embedUrl,
        mapsUrl,
        zoom: parseInt(zoom)
    }});

  } catch (error) {
    console.error('Error in maps API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 