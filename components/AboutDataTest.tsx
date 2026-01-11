'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';
import { GET_ABOUT_SECTION_DATA } from '@/lib/wordpress/queries';
import { AboutSectionData } from '@/lib/faust-types';

export default function AboutDataTest() {
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await executeQuery<AboutSectionData>(GET_ABOUT_SECTION_DATA);
        setAboutData(data);
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
        <p className="text-blue-800">Testing About Section WordPress data...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      aboutData?.aboutFields?.nodes?.[0]?.aboutPageFieldsType 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <h3 className={`font-semibold ${
        aboutData?.aboutFields?.nodes?.[0]?.aboutPageFieldsType ? 'text-green-800' : 'text-yellow-800'
      }`}>
        About Section WordPress Data Test
      </h3>
      
      {aboutData?.aboutFields?.nodes?.[0]?.aboutPageFieldsType ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully fetched About Section data!</p>
          <div className="text-sm mt-2 space-y-1">
            <p><strong>Section Title:</strong> {aboutData.aboutFields.nodes[0].aboutPageFieldsType.sectionTitle}</p>
            <p><strong>Title Italic:</strong> {aboutData.aboutFields.nodes[0].aboutPageFieldsType.sectionTitleItalic}</p>
            <p><strong>Image Stack Count:</strong> {aboutData.aboutFields.nodes[0].aboutPageFieldsType.imageStack?.length || 0}</p>
            {aboutData.aboutFields.nodes[0].aboutPageFieldsType.imageStack?.slice(0, 2).map((item: any, index: number) => (
              <div key={index} className="ml-4">
                <p><strong>Image {index + 1}:</strong> {item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-yellow-700">
          <p>⚠️ No About Section data found in WordPress</p>
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