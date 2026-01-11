'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';

const DIRECT_ABOUT_QUERY = `
  query GetAboutSectionData {
    aboutFields {
      nodes {
        aboutPageFieldsType {
          sectionTitle
          sectionTitleItalic
          nepaliDescription
          imageStack {
            tagline
            cardImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export default function DirectAboutQueryTest() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('🔍 Testing direct About query...');
        const result = await executeQuery(DIRECT_ABOUT_QUERY);
        console.log('📊 About query result:', result);
        setData(result);
      } catch (err) {
        console.error('❌ About query error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <p className="text-blue-800">🔍 Testing direct About WordPress query...</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg bg-gray-50 border-gray-200">
      <h3 className="font-semibold text-gray-800 mb-3">
        🧪 Direct About Query Test Results
      </h3>
      
      <div className="space-y-3">
        <div>
          <strong>Query Status:</strong> {error ? '❌ Failed' : '✅ Success'}
        </div>
        
        {error && (
          <div className="bg-red-100 p-3 rounded">
            <strong>Error:</strong>
            <pre className="text-sm mt-1 whitespace-pre-wrap">{error}</pre>
          </div>
        )}
        
        {data && (
          <div className="bg-green-100 p-3 rounded">
            <strong>Raw Data Received:</strong>
            <pre className="text-xs mt-2 whitespace-pre-wrap overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
        
        {!data && !error && (
          <div className="bg-yellow-100 p-3 rounded">
            <strong>No data received</strong> - WordPress might not have aboutFields content
          </div>
        )}
      </div>
    </div>
  );
}