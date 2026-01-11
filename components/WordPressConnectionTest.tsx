'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';

interface ConnectionStatus {
  isConnected: boolean;
  error?: string;
  wpUrl?: string;
  wpTitle?: string;
}

export default function WordPressConnectionTest() {
  const [status, setStatus] = useState<ConnectionStatus>({ isConnected: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Basic query to test connection
        const query = `
          query GetGeneralSettings {
            generalSettings {
              title
              description
              url
            }
          }
        `;

        const result = await executeQuery(query);

        if (result?.generalSettings) {
          setStatus({
            isConnected: true,
            wpUrl: result.generalSettings.url,
            wpTitle: result.generalSettings.title,
          });
        } else {
          setStatus({
            isConnected: false,
            error: 'No data received from WordPress',
          });
        }
      } catch (error) {
        setStatus({
          isConnected: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        });
      } finally {
        setIsLoading(false);
      }
    };

    testConnection();
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <p className="text-blue-800">Testing WordPress GraphQL connection...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      status.isConnected 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      <h3 className={`font-semibold ${
        status.isConnected ? 'text-green-800' : 'text-red-800'
      }`}>
        WordPress GraphQL Connection Status
      </h3>
      
      {status.isConnected ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully connected to WordPress!</p>
          {status.wpTitle && (
            <p className="text-sm mt-1">Site: {status.wpTitle}</p>
          )}
          {status.wpUrl && (
            <p className="text-sm mt-1">URL: {status.wpUrl}</p>
          )}
          <p className="text-xs mt-2 text-green-600">
            Using Apollo Client + WPGraphQL (App Router compatible)
          </p>
        </div>
      ) : (
        <div className="mt-2 text-red-700">
          <p>❌ Failed to connect to WordPress</p>
          {status.error && (
            <div className="text-sm mt-2">
              <p className="font-semibold">Error:</p>
              <p className="font-mono bg-red-100 p-2 rounded text-xs">
                {status.error}
              </p>
            </div>
          )}
          <div className="text-xs mt-2 text-red-600">
            <p>Make sure:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>WordPress is running at: {process.env.NEXT_PUBLIC_WORDPRESS_URL}</li>
              <li>WPGraphQL plugin is installed and activated</li>
              <li>GraphQL endpoint is accessible at: {process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}