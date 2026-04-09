'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic'; // Build: 2026-04-04T16:00Z

// Only read from v2 tracker - isolated from old data
type RankingRow = {
  id: number;
  keyword: string;
  domain: string;
  found: boolean;
  organic_position: number | null;
  raw_position: number | null;
  ranking_url: string | null;
  checked_at: string;
  source: string;
  debug_log?: string;
};

export default function LiveResultsPage() {
  const [rows, setRows] = useState<RankingRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState<RankingRow | null>(null);
  useEffect(() => {
    async function load() {
      // HARD-CODED: Only read from v2 tracker - do NOT mix with old data
      const SOURCE = 'organic_rank_tracker_v2';

      // Query 1: Get latest checked_at for v2 tracker only
      const { data: latestRun } = await supabase
        .from('rankings_public')
        .select('checked_at')
        .eq('source', SOURCE)
        .order('checked_at', { ascending: false })
        .limit(1)
        .single();

      if (latestRun) {
        // Query 2: Fetch all rows from that latest run - v2 only
        const { data } = await supabase
          .from('rankings_public')
          .select('*')
          .eq('source', SOURCE)
          .eq('checked_at', latestRun.checked_at)
          .order('keyword', { ascending: true });

        if (data) {
          setRows(data);
        }
      }
      setLoading(false);
    }

    load();
  }, []);

  // Show only unique keywords (latest data)
  const latest = rows.length
    ? rows.filter((r, i, arr) =>
        arr.findIndex(x => x.keyword === r.keyword) === i
      )
    : [];

  // Stats
  const ranked = latest.filter(r => r.found && r.organic_position).length;
  const top10 = latest.filter(r => r.organic_position && r.organic_position <= 10).length;
  const page2 = latest.filter(r => r.organic_position && r.organic_position > 10 && r.organic_position <= 20).length;
  const deeper = latest.filter(r => r.organic_position && r.organic_position > 20).length;
  const notFound = latest.filter(r => !r.found).length;

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '48px 24px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Live Google Rankings</h1>
          <p style={{ color: '#888', fontSize: 16 }}>Organic rank tracking v2 — excludes ads, maps, AI Overview</p>
          <p style={{ color: '#666', fontSize: 13, marginTop: 8 }}>
            ℹ️ <strong>Organic Position</strong> = true position excluding ads, maps, AI Overview. 
            <strong>Raw Position</strong> = position in full SERP.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 48 }}>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 24 }}>
            <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Keywords Tracked</div>
            <div style={{ fontSize: 36, fontWeight: 800 }}>{latest.length}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 24 }}>
            <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Top 10</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#22c55e' }}>{top10}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 24 }}>
            <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Page 2 (11-20)</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#f97316' }}>{page2}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 24 }}>
            <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Page 3+</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#3b82f6' }}>{deeper}</div>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 24 }}>
            <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Not Found</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#ef4444' }}>{notFound}</div>
          </div>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#1a1a1a', color: '#888', fontSize: 13 }}>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Keyword</th>
                <th style={{ padding: '14px 20px', textAlign: 'center' }}>Organic Pos</th>
                <th style={{ padding: '14px 20px', textAlign: 'center' }}>Raw Pos</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>Last Checked</th>
                <th style={{ padding: '14px 20px', textAlign: 'center' }}>Debug</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: 24, color: '#888', textAlign: 'center' }}>Loading...</td></tr>
              ) : latest.map(row => (
                <tr key={row.id} style={{ borderTop: '1px solid #1a1a1a' }}>
                  <td style={{ padding: '16px 20px' }}>{row.keyword}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: row.organic_position && row.organic_position <= 10 ? '#22c55e' : row.organic_position && row.organic_position <= 20 ? '#f97316' : '#fff' }}>
                    {row.organic_position ? '#' + row.organic_position : '—'}
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'center', color: '#666', fontSize: 13 }}>
                    {row.raw_position ? '#' + row.raw_position : '—'}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ color: row.found ? '#22c55e' : '#ef4444', fontSize: 13 }}>
                      {row.found ? '✓ Found' : '✗ Not in top 100'}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#888', fontSize: 13 }}>
                    {new Date(row.checked_at).toLocaleDateString('en-GB')}
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                    {row.debug_log && (
                      <button
                        onClick={() => setSelectedRow(row)}
                        style={{
                          background: '#333',
                          border: '1px solid #555',
                          color: '#fbbf24',
                          padding: '4px 10px',
                          borderRadius: 4,
                          cursor: 'pointer',
                          fontSize: 11
                        }}
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Debug Log Modal */}
        {selectedRow && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: 24
            }}
            onClick={() => setSelectedRow(null)}
          >
            <div 
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: 12,
                padding: 24,
                maxWidth: 800,
                maxHeight: '80vh',
                overflow: 'auto',
                width: '100%'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0, color: '#fbbf24' }}>Debug Log: {selectedRow.keyword}</h3>
                <button 
                  onClick={() => setSelectedRow(null)}
                  style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: 20 }}
                >
                  ×
                </button>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 12, lineHeight: 1.6, whiteSpace: 'pre-wrap', color: '#aaa' }}>
                {selectedRow.debug_log || 'No debug log available'}
              </div>
            </div>
          </div>
        )}

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: 32, marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Area Availability</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { area: 'Sittingbourne', taken: true },
              { area: 'Swindon', taken: false },
              { area: 'Peterborough', taken: false },
              { area: 'Telford', taken: false },
              { area: 'Northampton', taken: false },
              { area: 'Gloucester', taken: false },
              { area: 'Basildon', taken: false },
              { area: 'Cheltenham', taken: false },
              { area: 'Wakefield', taken: false },
              { area: 'Derby', taken: false },
              { area: 'Luton', taken: false },
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
