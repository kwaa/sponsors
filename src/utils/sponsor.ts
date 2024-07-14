import type { Sponsor } from 'sponsorkit'

export const sponsorFromGitHub = (name: string): Sponsor => ({
    avatarUrl: `https://github.com/${name}.png`,
    linkUrl: `https://github.com/${name}`,
    login: name,
    name,
    type: 'User',
})