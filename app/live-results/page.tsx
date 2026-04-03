'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type RankingRow = {
  id: number;
  keyword: string;
  rank: number | null;
  found: boolean;
  ranking_url: string | null;
  checked_at: string;
};

export default function LiveResultsPage() {
  const [rows, setRows] = useState<RankingRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      // First, get the latest checked_at date for own_site_tracker
      const { data: latestRun } = await supabase
        .from('rankings')
        .select('checked_at')
        .eq('source', 'own_site_tracker')
        .order('checked_at', { ascending: false })
        .limit(1)
        .single();

      if (latestRun) {
        // Then fetch all rows from that latest run
        const { data } = await supabase
          .from('rankings')
          .select('*')
          .eq('source', 'own_site_tracker')
          .eq('checked_at', latestRun.checked_at)
          .order('keyword', { ascending: true });

        if (data) setRows(data);
      }
      setLoading(false);
    }

    load();
  }, []);

  const latest = rows.length
    ? rows.filter((r, i, arr) =>
        arr.findIndex(x => x.keyword === r.keyword) === i
      )
    : [];

  const ranked = latest.filter(r => r.found && r.rank).length;

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '48px 24px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Live Google Rankings</h1>
          <p style={{ color: '#888', fontSize: 16 }}>This is our own site — tracked automatically every week. Client results tracked the same way.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 28 }}>
            <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>Keywords Tracked</div>
            <div style={{ fontSize: 48, fontWeight: 800 }}>{latest.length}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 28 }}>
            <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>Ranking on Google</div>
            <div style={{ fontSize: 48, fontWeight: 800, color: '#22c55e' }}>{ranked}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 28 }}>
            <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>Best Position</div>
            <div style={{ fontSize: 48, fontWeight: 800, color: '#f97316' }}>
              {latest.filter(r => r.rank).length > 0
                ? '#' + Math.min(...latest.filter(r => r.rank).map(r => r.rank!))
                : '—'}
            </div>
          </div>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#1a1a1a', color: '#888', fontSize: 13 }}>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Keyword</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Position</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Last Checked</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ padding: 24, color: '#888', textAlign: 'center' }}>Loading...</td></tr>
              ) : latest.map(row => (
                <tr key={row.id} style={{ borderTop: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '16px 20px' }}>{row.keyword}</td>
                  <td style={{ padding: '16px 20px', fontWeight: 700 }}>{row.rank ? '#' + row.rank : '—'}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ color: row.found ? '#22c55e' : '#ef4444', fontSize: 13 }}>
                      {row.found ? '✓ Found' : '✗ Not in top 100'}</span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#888', fontSize: 13 }}>
                    {new Date(row.checked_at).toLocaleDateString('en-GB')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 32, marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Area Availability</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { area: 'Sittingbourne', taken: true },
              { area: 'Swindon', taken: false },
              { area: 'Coventry', taken: false },
              { area: 'Birmingham', taken: false },
              { area: 'Bristol', taken: false },
              { area: 'Reading', taken: false },
            ].map(a => (
              <div key={a.area} style={{
                background: a.taken ? '#1a0000' : '#001a00',
                border: `1px solid ${a.taken ? '#7f1d1d' : '#14532d'}`,
                borderRadius: 10,
                padding: '14px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{a.area}</span>
                <span style={{ fontSize: 12, color: a.taken ? '#ef4444' : '#22c55e' }}>
                  {a.taken ? '🔒 TAKEN' : 'AVAILABLE'}
                </span>
              </div>
            ))}
          </div>
          <p style={{ color: '#888', fontSize: 13, marginTop: 16 }}>One engineer per area. No internal competition.</p>
        </div>

      </div>
    </main>
  );
}
