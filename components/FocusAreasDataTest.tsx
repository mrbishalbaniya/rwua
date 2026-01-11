'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';
import { GET_FOCUS_AREAS_SECTION } from '@/lib/wordpress/queries';
import { FocusAreasData } from '@/lib/faust-types';

export default function FocusAreasDataTest() {
  const [focusData, setFocusData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await executeQuery<FocusAreasData>(GET_FOCUS_AREAS_SECTION);
        setFocusData(data);
      } catch (err) {
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
        <p className="text-blue-800">Testing Focus Areas WordPress data...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      focusData?.focusArea?.focusAreaFieldsType?.focusCards 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <h3 className={`font-semibold ${
        focusData?.focusArea?.focusAreaFieldsType?.focusCards ? 'text-green-800' : 'text-yellow-800'
      }`}>
        Focus Areas WordPress Data Test
      </h3>
      
      {focusData?.focusArea?.focusAreaFieldsType?.focusCards ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully fetched Focus Areas data!</p>
          <div className="text-sm mt-2 space-y-1">
            <p><strong>Page Title:</strong> {focusData.focusArea.title}</p>
            <p><strong>Cards Count:</strong> {focusData.focusArea.focusAreaFieldsType.focusCards.length}</p>
            {focusData.focusArea.focusAreaFieldsType.focusCards.slice(0, 2).map((card: any, index: number) => (
              <div key={index} className="ml-4">
                <p><strong>Card {index + 1}:</strong> {card.title} - {card.metric}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-yellow-700">
          <p>⚠️ No Focus Areas data found in WordPress</p>
          <p className="text-sm mt-1">Component will use fallback data</p>
          {error && (
            <p className="text-sm mt-2 font-mono bg-yellow-100 p-2 rounded">
              Error: {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}