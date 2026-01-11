'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';

const DEBUG_QUERIES = {
  // Test basic connection
  generalSettings: `
    query GetGeneralSettings {
      generalSettings {
        title
        description
        url
      }
    }
  `,
  
  // Test what post types are available
  postTypes: `
    query GetPostTypes {
      __schema {
        queryType {
          fields {
            name
            type {
              name
            }
          }
        }
      }
    }
  `,
  
  // Test if aboutFields exists
  aboutFields: `
    query TestAboutFields {
      aboutFields {
        nodes {
          id
          title
        }
      }
    }
  `
};

export default function WordPressDebugTest() {
  const [results, setResults] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runTests = async () => {
      const testResults: any = {};
      
      for (const [testName, query] of Object.entries(DEBUG_QUERIES)) {
        try {
          console.log(`🧪 Testing ${testName}...`);
          const result = await executeQuery(query);
          testResults[testName] = { success: true, data: result };
          console.log(`✅ ${testName} success:`, result);
        } catch (error) {
          testResults[testName] = { 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
          };
          console.log(`❌ ${testName} failed:`, error);
        }
      }
      
      setResults(testResults);
      setLoading(false);
    };

    runTests();
  }, []);

  if (loading) {
    return (
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <p className="text-blue-800">🔍 Running WordPress debug tests...</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg bg-gray-50 border-gray-200">
      <h3 className="font-semibold text-gray-800 mb-3">
        🛠️ WordPress Debug Test Results
      </h3>
      
      <div className="space-y-4">
        {Object.entries(results).map(([testName, result]: [string, any]) => (
          <div key={testName} className={`p-3 rounded ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
            <div className="font-semibold">
              {result.success ? '✅' : '❌'} {testName}
            </div>
            
            {result.success ? (
              <pre className="text-xs mt-2 whitespace-pre-wrap overflow-auto max-h-32">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            ) : (
              <div className="text-sm mt-1 text-red-700">
                Error: {result.error}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-100 rounded">
        <div className="font-semibold text-blue-800">WordPress URL:</div>
        <div className="text-sm">{process.env.NEXT_PUBLIC_WORDPRESS_URL}</div>
      </div>
    </div>
  );
}