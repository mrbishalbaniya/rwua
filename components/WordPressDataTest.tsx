'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';
import { GET_IMPACT_HERO_DATA } from '@/lib/wordpress/queries';
import { ImpactHeroData } from '@/lib/faust-types';

export default function WordPressDataTest() {
  const [heroData, setHeroData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await executeQuery<ImpactHeroData>(GET_IMPACT_HERO_DATA);
        setHeroData(data);
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
        <p className="text-blue-800">Testing Impact Hero WordPress data...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      heroData?.impactHeroes?.nodes?.[0] 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <h3 className={`font-semibold ${
        heroData?.impactHeroes?.nodes?.[0] ? 'text-green-800' : 'text-yellow-800'
      }`}>
        Impact Hero WordPress Data Test
      </h3>
      
      {heroData?.impactHeroes?.nodes?.[0] ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully fetched Impact Hero data!</p>
          <div className="text-sm mt-2 space-y-1">
            <p><strong>Title:</strong> {heroData.impactHeroes.nodes[0].title}</p>
            {heroData.impactHeroes.nodes[0].impactHeroFields && (
              <>
                <p><strong>Hero Title 1:</strong> {heroData.impactHeroes.nodes[0].impactHeroFields.heroTitle1}</p>
                <p><strong>Hero Vision:</strong> {heroData.impactHeroes.nodes[0].impactHeroFields.heroVision}</p>
                <p><strong>Badge Number:</strong> {heroData.impactHeroes.nodes[0].impactHeroFields.heroBadgeNum}</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-yellow-700">
          <p>⚠️ No Impact Hero data found in WordPress</p>
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