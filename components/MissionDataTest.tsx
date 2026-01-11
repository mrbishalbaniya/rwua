'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';
import { GET_MISSION_SECTION } from '@/lib/wordpress/queries';
import { MissionData } from '@/lib/faust-types';

export default function MissionDataTest() {
  const [missionData, setMissionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await executeQuery<MissionData>(GET_MISSION_SECTION);
        setMissionData(data);
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
        <p className="text-blue-800">Testing Mission Section WordPress data...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      missionData?.missions?.nodes?.[0] 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <h3 className={`font-semibold ${
        missionData?.missions?.nodes?.[0] ? 'text-green-800' : 'text-yellow-800'
      }`}>
        Mission Section WordPress Data Test
      </h3>
      
      {missionData?.missions?.nodes?.[0] ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully fetched Mission Section data!</p>
          <div className="text-sm mt-2 space-y-1">
            {missionData.missions.nodes[0].missionFields && (
              <>
                <p><strong>Title 1:</strong> {missionData.missions.nodes[0].missionFields.missionTitle1}</p>
                <p><strong>Title Italic:</strong> {missionData.missions.nodes[0].missionFields.missionTitleItalic}</p>
                <p><strong>CTA Text:</strong> {missionData.missions.nodes[0].missionFields.missionCtaText}</p>
                <p><strong>Cards Count:</strong> {missionData.missions.nodes[0].missionFields.missionCards?.length || 0}</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-yellow-700">
          <p>⚠️ No Mission Section data found in WordPress</p>
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