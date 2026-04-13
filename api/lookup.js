// Direct MusicFetch.io Premium Proxy (Vercel Serverless Function)
export default async function handler(req, res) {
  const { type, query } = req.query;
  const token = process.env.MUSICFETCH_TOKEN;

  if (!token) return res.status(500).json({ error: 'API Token Missing' });
  if (!type || !query) return res.status(400).json({ error: 'Missing parameters' });

  try {
    const services = [
      'amazon','amazonMusic','anghami','appleMusic','audiomack','audius','awa',
      'bandcamp','beatport','boomplay','deezer','discogs','flo','gaana','genius',
      'iHeartRadio','instagram','jioSaavn','joox','kkbox','lineMusic','musicBrainz',
      'napster','netease','pandora','qobuz','qqMusic','sevenDigital','shazam',
      'soundcloud','spotify','telmoreMusik','tidal','tiktok','trebel','yandex',
      'youseeMusik','youtube','youtubeMusic','youtubeShorts'
    ].join(',');

    let url = `https://api.musicfetch.io/${type}?${type === 'search' ? 'query' : type}=${encodeURIComponent(query)}&services=${services}`;
    
    if (type === 'search') {
      url += '&types=track,album,artist';
    }

    const response = await fetch(url, {
      headers: { 'x-token': token, 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Network Error', detail: err.message });
  }
}
