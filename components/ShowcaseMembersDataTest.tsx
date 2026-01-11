'use client';

import { useEffect, useState } from 'react';
import { executeQuery } from '@/lib/wordpress/client';
import { GET_ALL_SHOWCASE_MEMBERS } from '@/lib/wordpress/queries';
import { ShowcaseMembersData } from '@/lib/faust-types';

export default function ShowcaseMembersDataTest() {
  const [membersData, setMembersData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await executeQuery<ShowcaseMembersData>(GET_ALL_SHOWCASE_MEMBERS);
        setMembersData(data);
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
        <p className="text-blue-800">Testing Showcase Members WordPress data...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg ${
      membersData?.showcaseMembers?.nodes?.[0]?.showcaseMemberFieldsType?.members 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <h3 className={`font-semibold ${
        membersData?.showcaseMembers?.nodes?.[0]?.showcaseMemberFieldsType?.members ? 'text-green-800' : 'text-yellow-800'
      }`}>
        Showcase Members WordPress Data Test
      </h3>
      
      {membersData?.showcaseMembers?.nodes?.[0]?.showcaseMemberFieldsType?.members ? (
        <div className="mt-2 text-green-700">
          <p>✅ Successfully fetched Showcase Members data!</p>
          <div className="text-sm mt-2 space-y-1">
            <p><strong>Post Title:</strong> {membersData.showcaseMembers.nodes[0].title}</p>
            <p><strong>Members Count:</strong> {membersData.showcaseMembers.nodes[0].showcaseMemberFieldsType.members.length}</p>
            {membersData.showcaseMembers.nodes[0].showcaseMemberFieldsType.members.slice(0, 2).map((member: any, index: number) => (
              <div key={index} className="ml-4">
                <p><strong>Member {index + 1}:</strong> {member.name} ({member.nepaliName}) - {member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-yellow-700">
          <p>⚠️ No Showcase Members data found in WordPress</p>
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