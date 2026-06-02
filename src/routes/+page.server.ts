import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  lastUpdated: new Date().toISOString()
});
