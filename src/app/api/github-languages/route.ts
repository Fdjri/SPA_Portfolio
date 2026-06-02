import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'Fdjri';
    const headers: Record<string, string> = {
      'User-Agent': 'NextJS-Portfolio',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fallback to top 10 recent if unauthenticated to avoid rate limits
    const perPage = process.env.GITHUB_TOKEN ? 100 : 10;
    
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`, { 
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.statusText}`);
    }

    const repos = await reposRes.json();
    const languageCounts: Record<string, number> = {};

    // Fetch languages for all repositories concurrently
    await Promise.all(
      repos.map(async (repo: any) => {
        if (!repo.languages_url) return;
        
        try {
          const langRes = await fetch(repo.languages_url, { 
              headers,
              next: { revalidate: 3600 } 
          });
          if (!langRes.ok) return; 
          const langs = await langRes.json();
          
          for (const [lang, bytes] of Object.entries(langs)) {
            languageCounts[lang] = (languageCounts[lang] || 0) + (bytes as number);
          }
        } catch (err) {
          console.warn(`Failed to fetch languages for ${repo.name}`);
        }
      })
    );

    let totalBytes = 0;
    for (const bytes of Object.values(languageCounts)) {
      totalBytes += bytes;
    }

    if (totalBytes === 0) {
      return NextResponse.json({ languages: [] });
    }

    // Calculate percentages and sort
    const result = Object.entries(languageCounts)
      .map(([name, bytes]) => ({
        name,
        percentage: Number(((bytes / totalBytes) * 100).toFixed(1))
      }))
      .sort((a, b) => b.percentage - a.percentage);

    // Group Top 4 and "Others"
    const topN = 4;
    const finalLangs = result.slice(0, topN);
    const others = result.slice(topN);
    
    if (others.length > 0) {
      const othersPercent = others.reduce((acc, curr) => acc + curr.percentage, 0);
      finalLangs.push({
        name: 'Others',
        percentage: Number(othersPercent.toFixed(1))
      });
    }

    // Normalize sum to exactly 100% due to precision rounding
    const sum = finalLangs.reduce((acc, curr) => acc + curr.percentage, 0);
    if (sum !== 100 && finalLangs.length > 0) {
      const diff = 100 - sum;
      finalLangs[0].percentage = Number((finalLangs[0].percentage + diff).toFixed(1));
    }

    return NextResponse.json({ languages: finalLangs });

  } catch (error) {
    console.error('Error fetching GitHub languages:', error);
    return NextResponse.json({ error: 'Failed to fetch language data' }, { status: 500 });
  }
}
