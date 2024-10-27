import type { Provider, Sponsorship } from 'sponsorkit'
import { sponsorFromGitHub } from '../utils/sponsor'

export const manualProvider: Provider = {
    name: 'manual',
    fetchSponsors: async () => await Promise.all([
        {
            sponsor: sponsorFromGitHub('Interstellar750'),
            monthlyDollars: -1, // Past Sponsor
            isOneTime: true
        },
        {
            sponsor: sponsorFromGitHub('nekomeowww'),
            monthlyDollars: 300, // Special Sponsor
            isOneTime: true
        }
    ] as Sponsorship[])
}
